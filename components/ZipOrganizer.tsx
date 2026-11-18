"use client";

import { useMemo, useRef, useState } from "react";
import { Zip, ZipDeflate, ZipPassThrough, unzipSync } from "fflate";

import {
buildTree,
formatBytes,
isRemoved,
keptEntries,
removalSummary,
toggleSelection,
type TreeNode,
type ZipEntryInfo,
} from "@/lib/zipTree";

import {
Archive,
ArrowDownToLine,
ArrowUpFromLine,
Check,
ChevronDown,
ChevronRight,
File,
FileCode,
FileImage,
FileText,
Folder,
FolderOpen,
HardDrive,
LockKeyhole,
RefreshCw,
RotateCcw,
ShieldCheck,
Trash2,
X,
} from "lucide-react";

type Status = "idle" | "building" | "done";

function getFileIcon(name: string) {
const ext = name.split(".").pop()?.toLowerCase();

if (["png", "jpg", "jpeg", "svg", "webp", "gif"].includes(ext || ""))
return <FileImage size={15} />;

if (["js", "ts", "tsx", "jsx", "html", "css", "json", "py"].includes(ext || ""))
return <FileCode size={15} />;

if (["pdf", "doc", "docx", "txt", "md"].includes(ext || ""))
return <FileText size={15} />;

return <File size={15} />;
}

export default function ZipOrganizer() {
const [file, setFile] = useState<File | null>(null);
const [entries, setEntries] = useState<ZipEntryInfo[]>([]);
const [selected, setSelected] = useState<Set<string>>(new Set());
const [expanded, setExpanded] = useState<Set<string>>(new Set());
const [error, setError] = useState<string | null>(null);
const [status, setStatus] = useState<Status>("idle");
const [progress, setProgress] = useState(0);
const [dragging, setDragging] = useState(false);

const inputRef = useRef<HTMLInputElement>(null);

const tree = useMemo(() => buildTree(entries), [entries]);

const summary = useMemo(
() => removalSummary(entries, selected),
[entries, selected]
);

const remaining = keptEntries(entries, selected);

const fileCount = entries.filter(
(entry) => !entry.path.endsWith("/")
).length;

const folderCount = entries.filter(
(entry) => entry.path.endsWith("/")
).length;

const remainingCount = remaining.filter(
(entry) => !entry.path.endsWith("/")
).length;

async function onPick(selectedFile?: File) {
if (!selectedFile) return;

setStatus("idle");
setProgress(0);
setError(null);

try {
  const data = new Uint8Array(await selectedFile.arrayBuffer());
  const list: ZipEntryInfo[] = [];

  unzipSync(data, {
    filter(info) {
      list.push({
        path: info.name,
        size: info.originalSize,
      });

      return false;
    },
  });

  setFile(selectedFile);
  setEntries(list);
  setSelected(new Set());
  setExpanded(new Set());
} catch {
  setError(
    `"${selectedFile.name}" could not be opened. The archive may be corrupted, encrypted, or unsupported.`
  );
} finally {
  if (inputRef.current) inputRef.current.value = "";
}

}

async function rebuild() {
if (!file || remaining.length === 0) return;

setStatus("building");
setProgress(0);
setError(null);

try {
  const keep = new Set(remaining.map((entry) => entry.path));

  const data = new Uint8Array(await file.arrayBuffer());

  const files = unzipSync(data, {
    filter: (info) => keep.has(info.name),
  });

  const names = Object.keys(files);

  const blob = await new Promise<Blob>((resolve, reject) => {
    const chunks: Uint8Array[] = [];

    const zip = new Zip((err, chunk, final) => {
      if (err) {
        reject(err);
        return;
      }

      chunks.push(chunk);

      if (final) {
        resolve(
          new Blob(chunks as BlobPart[], {
            type: "application/zip",
          })
        );
      }
    });

    (async () => {
      for (let i = 0; i < names.length; i++) {
        const name = names[i];

        const entry = name.endsWith("/")
          ? new ZipPassThrough(name)
          : new ZipDeflate(name, { level: 6 });

        zip.add(entry);
        entry.push(files[name], true);

        setProgress(
          Math.round(((i + 1) / names.length) * 100)
        );

        await new Promise((resolve) => setTimeout(resolve, 0));
      }

      zip.end();
    })().catch(reject);
  });

  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");

  anchor.href = url;
  anchor.download =
    file.name.replace(/\.zip$/i, "") + "-cleaned.zip";

  anchor.click();

  setTimeout(() => URL.revokeObjectURL(url), 10000);

  setStatus("done");
} catch {
  setStatus("idle");
  setError(
    "Could not rebuild the archive. Your selections are preserved. Please try again."
  );
}

}

function resetArchive() {
setFile(null);
setEntries([]);
setSelected(new Set());
setExpanded(new Set());
setStatus("idle");
setProgress(0);
setError(null);
}

function toggleExpand(path: string) {
setExpanded((previous) => {
const next = new Set(previous);

  if (!next.delete(path)) next.add(path);

  return next;
});

}

function expandAll(nodes: TreeNode[]) {
const paths = new Set<string>();

function walk(node: TreeNode) {
  if (node.isDir) paths.add(node.path);
  node.children.forEach(walk);
}

nodes.forEach(walk);
setExpanded(paths);

}

function renderNode(node: TreeNode, depth: number): React.ReactNode {
const removed = isRemoved(node.path, selected);
const inherited = removed && !selected.has(node.path);
const open = expanded.has(node.path);

return (
  <li key={node.path}>
    <div
      className={`group flex min-h-10 items-center gap-3 border-b border-white/[0.025] px-3 transition-colors hover:bg-[#162333] ${
        removed ? "opacity-45" : ""
      }`}
      style={{ paddingLeft: `${12 + depth * 22}px` }}
    >
      {node.isDir ? (
        <button
          type="button"
          onClick={() => toggleExpand(node.path)}
          className="flex h-6 w-5 items-center justify-center text-[#64748B] hover:text-[#00D9FF]"
          aria-label={open ? "Collapse folder" : "Expand folder"}
        >
          {open ? (
            <ChevronDown size={15} />
          ) : (
            <ChevronRight size={15} />
          )}
        </button>
      ) : (
        <span className="w-5" />
      )}

      <input
        type="checkbox"
        checked={removed}
        disabled={inherited || status === "building"}
        onChange={() =>
          setSelected((previous) =>
            toggleSelection(previous, node.path)
          )
        }
        className="h-3.5 w-3.5 shrink-0 cursor-pointer accent-[#00D9FF] disabled:cursor-not-allowed"
        aria-label={`Remove ${node.name}`}
      />

      <span
        className={
          node.isDir
            ? "text-[#00D9FF]"
            : "text-[#A8B4C2]"
        }
      >
        {node.isDir ? (
          open ? (
            <FolderOpen size={16} />
          ) : (
            <Folder size={16} />
          )
        ) : (
          getFileIcon(node.name)
        )}
      </span>

      <span
        className={`min-w-0 flex-1 truncate text-[13px] ${
          removed
            ? "text-[#64748B] line-through"
            : "text-[#DCE5EF]"
        }`}
      >
        {node.name}
      </span>

      {removed && (
        <span className="text-[10px] font-medium text-[#FF4D5A]">
          REMOVING
        </span>
      )}

      <span className="w-20 shrink-0 text-right text-xs tabular-nums text-[#64748B]">
        {formatBytes(node.size)}
      </span>
    </div>

    {node.isDir && open && (
      <ul>
        {node.children.map((child) =>
          renderNode(child, depth + 1)
        )}
      </ul>
    )}
  </li>
);

}

return (
<main className="min-h-screen bg-[#080B10] text-[#F4F8FC]">
<div className="mx-auto max-w-[1180px] px-5 sm:px-8">

    {/* HEADER */}

    <header className="flex h-[68px] items-center justify-between border-b border-[#263548]">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#263548] bg-[#111821] text-[#00D9FF]">
          <Archive size={19} />
        </div>

        <div>
          <div className="text-[15px] font-bold tracking-[0.18em]">
            JANUS<span className="text-[#00D9FF]">.</span>
          </div>
          <div className="text-[9px] tracking-[0.13em] text-[#64748B]">
            ARCHIVE INTELLIGENCE SYSTEM
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-[#A8B4C2]">
        <span className="h-2 w-2 rounded-full bg-[#35E69B]" />
        Local processing
      </div>
    </header>

    {/* PAGE INTRO */}

    <section className="pb-8 pt-12">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#00D9FF]">
            WORKSPACE / ARCHIVE MANAGER
          </div>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-[38px]">
            Archive Manager
          </h1>

          <p className="mt-2 max-w-lg text-sm leading-6 text-[#A8B4C2]">
            Inspect, organize and rebuild your ZIP archives.
            Everything stays on your device.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#64748B]">
          <LockKeyhole size={14} className="text-[#35E69B]" />
          Private by design
        </div>
      </div>
    </section>

    {/* UPLOAD */}

    {!file && (
      <section
        onDragOver={(event) => {
          event.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(event) => {
          event.preventDefault();
          setDragging(false);
          onPick(event.dataTransfer.files?.[0]);
        }}
        onClick={() => inputRef.current?.click()}
        className={`flex min-h-[260px] cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed px-6 py-12 text-center transition-colors ${
          dragging
            ? "border-[#00D9FF] bg-[#00D9FF]/[0.06]"
            : "border-[#34495E] bg-[#0B1220] hover:border-[#00D9FF]/60"
        }`}
      >
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#263548] bg-[#111821] text-[#00D9FF]">
          <ArrowUpFromLine size={22} />
        </div>

        <h2 className="text-base font-semibold">
          Drop your ZIP archive here
        </h2>

        <p className="mt-2 text-xs text-[#64748B]">
          Select an archive from your computer to get started.
        </p>

        <button
          type="button"
          className="mt-6 inline-flex h-10 items-center gap-2 rounded-lg bg-[#0066CC] px-5 text-xs font-semibold text-white transition-colors hover:bg-[#247BFF]"
        >
          <Archive size={15} />
          Browse files
        </button>

        <span className="mt-4 text-[10px] uppercase tracking-wider text-[#64748B]">
          ZIP archives only
        </span>
      </section>
    )}

    <input
      ref={inputRef}
      type="file"
      accept=".zip,application/zip"
      hidden
      onChange={(event) => onPick(event.target.files?.[0])}
    />

    {/* ERROR */}

    {error && (
      <div
        role="alert"
        className="mt-4 flex items-start gap-3 rounded-lg border border-[#FF4D5A]/25 bg-[#FF4D5A]/[0.06] p-4 text-sm text-[#FF4D5A]"
      >
        <X size={17} className="mt-0.5 shrink-0" />
        {error}
      </div>
    )}

    {/* ARCHIVE WORKSPACE */}

    {file && (
      <section className="space-y-5">

        {/* ARCHIVE INFORMATION */}

        <div className="overflow-hidden rounded-xl border border-[#263548] bg-[#0B1220]">
          <div className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#162333] text-[#00D9FF]">
                <File size={20} />
              </div>

              <div className="min-w-0">
                <h2 className="truncate text-sm font-semibold">
                  {file.name}
                </h2>
                <p className="mt-1 text-xs text-[#64748B]">
                  Original archive · {formatBytes(file.size)}
                </p>
              </div>
            </div>

            <button
              onClick={resetArchive}
              className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-[#34495E] px-3 text-xs text-[#A8B4C2] transition-colors hover:border-[#FF4D5A]/50 hover:text-[#FF4D5A]"
            >
              <X size={14} />
              Close archive
            </button>
          </div>

          <div className="grid grid-cols-2 border-t border-[#263548] sm:grid-cols-4">
            {[
              { label: "Total files", value: fileCount },
              { label: "Folders", value: folderCount },
              { label: "To remove", value: summary.files },
              { label: "Remaining", value: remainingCount },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`px-5 py-4 ${
                  index !== 0
                    ? "border-l border-[#263548]"
                    : ""
                }`}
              >
                <p className="text-[10px] uppercase tracking-wider text-[#64748B]">
                  {stat.label}
                </p>

                <p
                  className={`mt-2 text-xl font-semibold tabular-nums ${
                    index === 2
                      ? "text-[#FF4D5A]"
                      : index === 3
                        ? "text-[#35E69B]"
                        : "text-[#F4F8FC]"
                  }`}
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FILE EXPLORER */}

        <div className="overflow-hidden rounded-xl border border-[#263548] bg-[#0B1220]">
          <div className="flex flex-col justify-between gap-4 border-b border-[#263548] p-5 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-sm font-semibold">
                File Explorer
              </h2>
              <p className="mt-1 text-xs text-[#64748B]">
                Select files or folders to mark them for removal.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => expandAll(tree.children)}
                className="rounded-md border border-[#34495E] px-3 py-2 text-[11px] text-[#A8B4C2] hover:bg-[#162333]"
              >
                Expand all
              </button>

              <button
                onClick={() => setExpanded(new Set())}
                className="rounded-md border border-[#34495E] px-3 py-2 text-[11px] text-[#A8B4C2] hover:bg-[#162333]"
              >
                Collapse all
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between bg-[#0F172A] px-5 py-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#64748B]">
              Name
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#64748B]">
              Size
            </span>
          </div>

          <div className="max-h-[540px] overflow-auto">
            {tree.children.length > 0 ? (
              <ul className="py-1">
                {tree.children.map((node) =>
                  renderNode(node, 0)
                )}
              </ul>
            ) : (
              <div className="p-10 text-center text-sm text-[#64748B]">
                No entries found in this archive.
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#263548] px-5 py-3">
            <span className="text-[11px] text-[#64748B]">
              {fileCount} files · {folderCount} folders
            </span>

            <span className="text-[11px] text-[#A8B4C2]">
              Checked items will be removed.
            </span>
          </div>
        </div>

        {/* CLEANUP ACTIONS */}

        <div className="rounded-xl border border-[#263548] bg-[#0B1220] p-5">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2">
                <Trash2 size={16} className="text-[#FF4D5A]" />
                <h3 className="text-sm font-semibold">
                  Cleanup summary
                </h3>
              </div>

              <p className="mt-2 text-xs text-[#A8B4C2]">
                {summary.files} files marked for removal
                <span className="mx-2 text-[#34495E]">·</span>
                {formatBytes(summary.bytes)}
              </p>
            </div>

            <button
              onClick={() => {
                setSelected(new Set());
                setStatus("idle");
                setProgress(0);
              }}
              disabled={selected.size === 0 || status === "building"}
              className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-[#34495E] px-4 text-xs text-[#A8B4C2] transition-colors hover:bg-[#162333] disabled:opacity-40"
            >
              <RotateCcw size={14} />
              Undo all
            </button>
          </div>

          <div className="my-5 h-px bg-[#263548]" />

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-sm font-semibold">
                Rebuild archive
              </h3>
              <p className="mt-1 text-xs text-[#64748B]">
                Generate a new ZIP containing the remaining files.
              </p>
            </div>

            <button
              onClick={rebuild}
              disabled={status === "building" || remaining.length === 0}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#0066CC] px-5 text-xs font-semibold text-white transition-colors hover:bg-[#247BFF] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {status === "building" ? (
                <>
                  <RefreshCw size={15} className="animate-spin" />
                  Rebuilding {progress}%
                </>
              ) : (
                <>
                  <ArrowDownToLine size={16} />
                  Rebuild & Download
                </>
              )}
            </button>
          </div>

          {status === "building" && (
            <div className="mt-5">
              <div className="mb-2 flex justify-between text-[10px] text-[#A8B4C2]">
                <span>Reconstruction progress</span>
                <span>{progress}%</span>
              </div>

              <div className="h-1.5 overflow-hidden rounded-full bg-[#263548]">
                <div
                  className="h-full bg-[#00D9FF] transition-all duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {status === "done" && (
            <div className="mt-5 flex items-center gap-3 rounded-lg border border-[#35E69B]/20 bg-[#35E69B]/[0.05] p-4">
              <Check size={17} className="text-[#35E69B]" />
              <div>
                <p className="text-xs font-semibold text-[#35E69B]">
                  Archive successfully rebuilt.
                </p>
                <p className="mt-1 text-[11px] text-[#A8B4C2]">
                  Your cleaned ZIP has been downloaded.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    )}

    {/* FOOTER */}

    <footer className="mt-16 flex flex-col justify-between gap-3 border-t border-[#263548] py-6 sm:flex-row sm:items-center">
      <div className="flex items-center gap-2">
        <Archive size={14} className="text-[#00D9FF]" />
        <span className="text-xs font-bold tracking-[0.15em]">
          JANUS
        </span>
        <span className="text-[10px] text-[#64748B]">
          Archive Intelligence System
        </span>
      </div>

      <div className="flex items-center gap-2 text-[10px] text-[#64748B]">
        <ShieldCheck size={13} className="text-[#35E69B]" />
        Files processed locally · No uploads
      </div>

      <span className="text-[10px] text-[#64748B]">
        VERSION 1.0
      </span>
    </footer>
  </div>
</main>

);
}