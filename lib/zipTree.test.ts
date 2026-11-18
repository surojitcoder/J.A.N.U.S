import { describe, expect, it } from "vitest";
import { buildTree, isRemoved, keptEntries, removalSummary, toggleSelection } from "./zipTree";

const entries = [
  { path: "readme.txt", size: 10 },
  { path: "src/", size: 0 },
  { path: "src/a.ts", size: 100 },
  { path: "src/lib/b.ts", size: 200 }, // implicit "src/lib/" folder
  { path: "img/logo.png", size: 1000 },
];

describe("buildTree", () => {
  it("nests entries, creates implicit folders, rolls up sizes, folders first", () => {
    const root = buildTree(entries);
    expect(root.size).toBe(1310);
    expect(root.children.map((c) => c.path)).toEqual(["img/", "src/", "readme.txt"]);
    const src = root.children.find((c) => c.path === "src/")!;
    expect(src.size).toBe(300);
    expect(src.children.map((c) => c.path)).toEqual(["src/lib/", "src/a.ts"]);
  });
});

describe("selection", () => {
  it("marking a folder removes its contents", () => {
    const sel = toggleSelection(new Set(), "src/");
    expect(isRemoved("src/a.ts", sel)).toBe(true);
    expect(isRemoved("src/lib/b.ts", sel)).toBe(true);
    expect(isRemoved("img/logo.png", sel)).toBe(false);
    expect(keptEntries(entries, sel).map((e) => e.path)).toEqual(["readme.txt", "img/logo.png"]);
  });

  it("undo restores the entries", () => {
    const sel = toggleSelection(toggleSelection(new Set(), "src/"), "src/");
    expect(sel.size).toBe(0);
    expect(keptEntries(entries, sel)).toHaveLength(entries.length);
  });

  it("folder mark absorbs earlier child marks", () => {
    let sel = toggleSelection(new Set(), "src/a.ts");
    sel = toggleSelection(sel, "src/");
    expect([...sel]).toEqual(["src/"]);
  });

  it("does not confuse similarly named siblings", () => {
    expect(isRemoved("src2/a.ts", new Set(["src/"]))).toBe(false);
  });

  it("summarizes removed files and bytes", () => {
    const sel = new Set(["src/lib/", "readme.txt"]);
    expect(removalSummary(entries, sel)).toEqual({ files: 2, bytes: 210 });
  });
});
