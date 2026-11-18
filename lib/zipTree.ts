export type ZipEntryInfo = { path: string; size: number };

export type TreeNode = {
  path: string; // folders end with "/"
  name: string;
  isDir: boolean;
  size: number;
  children: TreeNode[];
};

export function buildTree(entries: ZipEntryInfo[]): TreeNode {
  const root: TreeNode = { path: "", name: "", isDir: true, size: 0, children: [] };
  const dirs = new Map<string, TreeNode>([["", root]]);

  const ensureDir = (p: string): TreeNode => {
    const hit = dirs.get(p);
    if (hit) return hit;
    const parts = p.slice(0, -1).split("/");
    const parentPath = parts.length > 1 ? parts.slice(0, -1).join("/") + "/" : "";
    const node: TreeNode = { path: p, name: parts[parts.length - 1], isDir: true, size: 0, children: [] };
    ensureDir(parentPath).children.push(node);
    dirs.set(p, node);
    return node;
  };

  for (const e of entries) {
    if (e.path.endsWith("/")) {
      ensureDir(e.path);
      continue;
    }
    const i = e.path.lastIndexOf("/");
    ensureDir(i >= 0 ? e.path.slice(0, i + 1) : "").children.push({
      path: e.path,
      name: e.path.slice(i + 1),
      isDir: false,
      size: e.size,
      children: [],
    });
  }

  const finish = (n: TreeNode): number => {
    n.children.sort((a, b) => Number(b.isDir) - Number(a.isDir) || a.name.localeCompare(b.name));
    if (n.isDir) n.size = n.children.reduce((s, c) => s + finish(c), 0);
    return n.size;
  };
  finish(root);
  return root;
}

/** A path is removed if it, or any ancestor folder, is marked. */
export function isRemoved(path: string, selected: ReadonlySet<string>): boolean {
  if (selected.has(path)) return true;
  for (let i = path.indexOf("/"); i !== -1; i = path.indexOf("/", i + 1)) {
    if (selected.has(path.slice(0, i + 1))) return true;
  }
  return false;
}

/** Mark/unmark a node. Marking a folder absorbs marks on its descendants. */
export function toggleSelection(selected: ReadonlySet<string>, path: string): Set<string> {
  const next = new Set(selected);
  if (next.has(path)) {
    next.delete(path);
    return next;
  }
  if (path.endsWith("/")) for (const p of selected) if (p.startsWith(path)) next.delete(p);
  next.add(path);
  return next;
}

export function keptEntries(entries: ZipEntryInfo[], selected: ReadonlySet<string>): ZipEntryInfo[] {
  return entries.filter((e) => !isRemoved(e.path, selected));
}

export function removalSummary(entries: ZipEntryInfo[], selected: ReadonlySet<string>) {
  const removed = entries.filter((e) => !e.path.endsWith("/") && isRemoved(e.path, selected));
  return { files: removed.length, bytes: removed.reduce((s, e) => s + e.size, 0) };
}

export function formatBytes(n: number): string {
  if (n < 1024) return `${n} B`;
  const units = ["KB", "MB", "GB", "TB"];
  let v = n / 1024;
  let u = 0;
  while (v >= 1024 && u < units.length - 1) {
    v /= 1024;
    u++;
  }
  return `${v.toFixed(v < 10 ? 1 : 0)} ${units[u]}`;
}
