(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ZipOrganizer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ZipOrganizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fflate$2f$esm$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fflate/esm/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$zipTree$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/zipTree.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/archive.mjs [app-client] (ecmascript) <export default as Archive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$to$2d$line$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownToLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down-to-line.mjs [app-client] (ecmascript) <export default as ArrowDownToLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$from$2d$line$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpFromLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-from-line.mjs [app-client] (ecmascript) <export default as ArrowUpFromLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file.mjs [app-client] (ecmascript) <export default as File>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-code.mjs [app-client] (ecmascript) <export default as FileCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-image.mjs [app-client] (ecmascript) <export default as FileImage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder.mjs [app-client] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-open.mjs [app-client] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock-keyhole.mjs [app-client] (ecmascript) <export default as LockKeyhole>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function getFileIcon(name) {
    const ext = name.split(".").pop()?.toLowerCase();
    if ([
        "png",
        "jpg",
        "jpeg",
        "svg",
        "webp",
        "gif"
    ].includes(ext || "")) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__["FileImage"], {
        size: 15
    }, void 0, false, {
        fileName: "[project]/components/ZipOrganizer.tsx",
        lineNumber: 45,
        columnNumber: 8
    }, this);
    if ([
        "js",
        "ts",
        "tsx",
        "jsx",
        "html",
        "css",
        "json",
        "py"
    ].includes(ext || "")) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__["FileCode"], {
        size: 15
    }, void 0, false, {
        fileName: "[project]/components/ZipOrganizer.tsx",
        lineNumber: 48,
        columnNumber: 8
    }, this);
    if ([
        "pdf",
        "doc",
        "docx",
        "txt",
        "md"
    ].includes(ext || "")) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
        size: 15
    }, void 0, false, {
        fileName: "[project]/components/ZipOrganizer.tsx",
        lineNumber: 51,
        columnNumber: 8
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
        size: 15
    }, void 0, false, {
        fileName: "[project]/components/ZipOrganizer.tsx",
        lineNumber: 53,
        columnNumber: 8
    }, this);
}
function ZipOrganizer() {
    _s();
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [entries, setEntries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ZipOrganizer.useMemo[tree]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$zipTree$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildTree"])(entries)
    }["ZipOrganizer.useMemo[tree]"], [
        entries
    ]);
    const summary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ZipOrganizer.useMemo[summary]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$zipTree$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removalSummary"])(entries, selected)
    }["ZipOrganizer.useMemo[summary]"], [
        entries,
        selected
    ]);
    const remaining = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$zipTree$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keptEntries"])(entries, selected);
    const fileCount = entries.filter((entry)=>!entry.path.endsWith("/")).length;
    const folderCount = entries.filter((entry)=>entry.path.endsWith("/")).length;
    const remainingCount = remaining.filter((entry)=>!entry.path.endsWith("/")).length;
    async function onPick(selectedFile) {
        if (!selectedFile) return;
        setStatus("idle");
        setProgress(0);
        setError(null);
        try {
            const data = new Uint8Array(await selectedFile.arrayBuffer());
            const list = [];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fflate$2f$esm$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unzipSync"])(data, {
                filter (info) {
                    list.push({
                        path: info.name,
                        size: info.originalSize
                    });
                    return false;
                }
            });
            setFile(selectedFile);
            setEntries(list);
            setSelected(new Set());
            setExpanded(new Set());
        } catch  {
            setError(`"${selectedFile.name}" could not be opened. The archive may be corrupted, encrypted, or unsupported.`);
        } finally{
            if (inputRef.current) inputRef.current.value = "";
        }
    }
    async function rebuild() {
        if (!file || remaining.length === 0) return;
        setStatus("building");
        setProgress(0);
        setError(null);
        try {
            const keep = new Set(remaining.map((entry)=>entry.path));
            const data = new Uint8Array(await file.arrayBuffer());
            const files = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fflate$2f$esm$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unzipSync"])(data, {
                filter: (info)=>keep.has(info.name)
            });
            const names = Object.keys(files);
            const blob = await new Promise((resolve, reject)=>{
                const chunks = [];
                const zip = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fflate$2f$esm$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Zip"]((err, chunk, final)=>{
                    if (err) {
                        reject(err);
                        return;
                    }
                    chunks.push(chunk);
                    if (final) {
                        resolve(new Blob(chunks, {
                            type: "application/zip"
                        }));
                    }
                });
                (async ()=>{
                    for(let i = 0; i < names.length; i++){
                        const name = names[i];
                        const entry = name.endsWith("/") ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fflate$2f$esm$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZipPassThrough"](name) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fflate$2f$esm$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZipDeflate"](name, {
                            level: 6
                        });
                        zip.add(entry);
                        entry.push(files[name], true);
                        setProgress(Math.round((i + 1) / names.length * 100));
                        await new Promise((resolve)=>setTimeout(resolve, 0));
                    }
                    zip.end();
                })().catch(reject);
            });
            const url = URL.createObjectURL(blob);
            const anchor = document.createElement("a");
            anchor.href = url;
            anchor.download = file.name.replace(/\.zip$/i, "") + "-cleaned.zip";
            anchor.click();
            setTimeout(()=>URL.revokeObjectURL(url), 10000);
            setStatus("done");
        } catch  {
            setStatus("idle");
            setError("Could not rebuild the archive. Your selections are preserved. Please try again.");
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
    function toggleExpand(path) {
        setExpanded((previous)=>{
            const next = new Set(previous);
            if (!next.delete(path)) next.add(path);
            return next;
        });
    }
    function expandAll(nodes) {
        const paths = new Set();
        function walk(node) {
            if (node.isDir) paths.add(node.path);
            node.children.forEach(walk);
        }
        nodes.forEach(walk);
        setExpanded(paths);
    }
    function renderNode(node, depth) {
        const removed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$zipTree$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRemoved"])(node.path, selected);
        const inherited = removed && !selected.has(node.path);
        const open = expanded.has(node.path);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `group flex min-h-10 items-center gap-3 border-b border-white/[0.025] px-3 transition-colors hover:bg-[#162333] ${removed ? "opacity-45" : ""}`,
                    style: {
                        paddingLeft: `${12 + depth * 22}px`
                    },
                    children: [
                        node.isDir ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>toggleExpand(node.path),
                            className: "flex h-6 w-5 items-center justify-center text-[#64748B] hover:text-[#00D9FF]",
                            "aria-label": open ? "Collapse folder" : "Expand folder",
                            children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/components/ZipOrganizer.tsx",
                                lineNumber: 261,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/components/ZipOrganizer.tsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ZipOrganizer.tsx",
                            lineNumber: 254,
                            columnNumber: 9
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-5"
                        }, void 0, false, {
                            fileName: "[project]/components/ZipOrganizer.tsx",
                            lineNumber: 267,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "checkbox",
                            checked: removed,
                            disabled: inherited || status === "building",
                            onChange: ()=>setSelected((previous)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$zipTree$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleSelection"])(previous, node.path)),
                            className: "h-3.5 w-3.5 shrink-0 cursor-pointer accent-[#00D9FF] disabled:cursor-not-allowed",
                            "aria-label": `Remove ${node.name}`
                        }, void 0, false, {
                            fileName: "[project]/components/ZipOrganizer.tsx",
                            lineNumber: 270,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: node.isDir ? "text-[#00D9FF]" : "text-[#A8B4C2]",
                            children: node.isDir ? open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/components/ZipOrganizer.tsx",
                                lineNumber: 292,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/components/ZipOrganizer.tsx",
                                lineNumber: 294,
                                columnNumber: 13
                            }, this) : getFileIcon(node.name)
                        }, void 0, false, {
                            fileName: "[project]/components/ZipOrganizer.tsx",
                            lineNumber: 283,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `min-w-0 flex-1 truncate text-[13px] ${removed ? "text-[#64748B] line-through" : "text-[#DCE5EF]"}`,
                            children: node.name
                        }, void 0, false, {
                            fileName: "[project]/components/ZipOrganizer.tsx",
                            lineNumber: 301,
                            columnNumber: 7
                        }, this),
                        removed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] font-medium text-[#FF4D5A]",
                            children: "REMOVING"
                        }, void 0, false, {
                            fileName: "[project]/components/ZipOrganizer.tsx",
                            lineNumber: 312,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-20 shrink-0 text-right text-xs tabular-nums text-[#64748B]",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$zipTree$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBytes"])(node.size)
                        }, void 0, false, {
                            fileName: "[project]/components/ZipOrganizer.tsx",
                            lineNumber: 317,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ZipOrganizer.tsx",
                    lineNumber: 247,
                    columnNumber: 5
                }, this),
                node.isDir && open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    children: node.children.map((child)=>renderNode(child, depth + 1))
                }, void 0, false, {
                    fileName: "[project]/components/ZipOrganizer.tsx",
                    lineNumber: 323,
                    columnNumber: 7
                }, this)
            ]
        }, node.path, true, {
            fileName: "[project]/components/ZipOrganizer.tsx",
            lineNumber: 246,
            columnNumber: 3
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[#080B10] text-[#F4F8FC]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-[1180px] px-5 sm:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex h-[68px] items-center justify-between border-b border-[#263548]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-9 w-9 items-center justify-center rounded-lg border border-[#263548] bg-[#111821] text-[#00D9FF]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__["Archive"], {
                                        size: 19
                                    }, void 0, false, {
                                        fileName: "[project]/components/ZipOrganizer.tsx",
                                        lineNumber: 343,
                                        columnNumber: 11
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                    lineNumber: 342,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[15px] font-bold tracking-[0.18em]",
                                            children: [
                                                "JANUS",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#00D9FF]",
                                                    children: "."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 18
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ZipOrganizer.tsx",
                                            lineNumber: 347,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[9px] tracking-[0.13em] text-[#64748B]",
                                            children: "ARCHIVE INTELLIGENCE SYSTEM"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ZipOrganizer.tsx",
                                            lineNumber: 350,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                    lineNumber: 346,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ZipOrganizer.tsx",
                            lineNumber: 341,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-xs text-[#A8B4C2]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-2 w-2 rounded-full bg-[#35E69B]"
                                }, void 0, false, {
                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                    lineNumber: 357,
                                    columnNumber: 9
                                }, this),
                                "Local processing"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ZipOrganizer.tsx",
                            lineNumber: 356,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ZipOrganizer.tsx",
                    lineNumber: 340,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "pb-8 pt-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-between gap-5 sm:flex-row sm:items-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#00D9FF]",
                                        children: "WORKSPACE / ARCHIVE MANAGER"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ZipOrganizer.tsx",
                                        lineNumber: 367,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-semibold tracking-tight sm:text-[38px]",
                                        children: "Archive Manager"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ZipOrganizer.tsx",
                                        lineNumber: 371,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 max-w-lg text-sm leading-6 text-[#A8B4C2]",
                                        children: "Inspect, organize and rebuild your ZIP archives. Everything stays on your device."
                                    }, void 0, false, {
                                        fileName: "[project]/components/ZipOrganizer.tsx",
                                        lineNumber: 375,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ZipOrganizer.tsx",
                                lineNumber: 366,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-xs text-[#64748B]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__["LockKeyhole"], {
                                        size: 14,
                                        className: "text-[#35E69B]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ZipOrganizer.tsx",
                                        lineNumber: 382,
                                        columnNumber: 11
                                    }, this),
                                    "Private by design"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ZipOrganizer.tsx",
                                lineNumber: 381,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ZipOrganizer.tsx",
                        lineNumber: 365,
                        columnNumber: 7
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ZipOrganizer.tsx",
                    lineNumber: 364,
                    columnNumber: 5
                }, this),
                !file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    onDragOver: (event)=>{
                        event.preventDefault();
                        setDragging(true);
                    },
                    onDragLeave: ()=>setDragging(false),
                    onDrop: (event)=>{
                        event.preventDefault();
                        setDragging(false);
                        onPick(event.dataTransfer.files?.[0]);
                    },
                    onClick: ()=>inputRef.current?.click(),
                    className: `flex min-h-[260px] cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed px-6 py-12 text-center transition-colors ${dragging ? "border-[#00D9FF] bg-[#00D9FF]/[0.06]" : "border-[#34495E] bg-[#0B1220] hover:border-[#00D9FF]/60"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#263548] bg-[#111821] text-[#00D9FF]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$from$2d$line$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpFromLine$3e$__["ArrowUpFromLine"], {
                                size: 22
                            }, void 0, false, {
                                fileName: "[project]/components/ZipOrganizer.tsx",
                                lineNumber: 410,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ZipOrganizer.tsx",
                            lineNumber: 409,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-base font-semibold",
                            children: "Drop your ZIP archive here"
                        }, void 0, false, {
                            fileName: "[project]/components/ZipOrganizer.tsx",
                            lineNumber: 413,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-xs text-[#64748B]",
                            children: "Select an archive from your computer to get started."
                        }, void 0, false, {
                            fileName: "[project]/components/ZipOrganizer.tsx",
                            lineNumber: 417,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "mt-6 inline-flex h-10 items-center gap-2 rounded-lg bg-[#0066CC] px-5 text-xs font-semibold text-white transition-colors hover:bg-[#247BFF]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__["Archive"], {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                    lineNumber: 425,
                                    columnNumber: 11
                                }, this),
                                "Browse files"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ZipOrganizer.tsx",
                            lineNumber: 421,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mt-4 text-[10px] uppercase tracking-wider text-[#64748B]",
                            children: "ZIP archives only"
                        }, void 0, false, {
                            fileName: "[project]/components/ZipOrganizer.tsx",
                            lineNumber: 429,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ZipOrganizer.tsx",
                    lineNumber: 391,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    ref: inputRef,
                    type: "file",
                    accept: ".zip,application/zip",
                    hidden: true,
                    onChange: (event)=>onPick(event.target.files?.[0])
                }, void 0, false, {
                    fileName: "[project]/components/ZipOrganizer.tsx",
                    lineNumber: 435,
                    columnNumber: 5
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    role: "alert",
                    className: "mt-4 flex items-start gap-3 rounded-lg border border-[#FF4D5A]/25 bg-[#FF4D5A]/[0.06] p-4 text-sm text-[#FF4D5A]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 17,
                            className: "mt-0.5 shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/components/ZipOrganizer.tsx",
                            lineNumber: 450,
                            columnNumber: 9
                        }, this),
                        error
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ZipOrganizer.tsx",
                    lineNumber: 446,
                    columnNumber: 7
                }, this),
                file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "space-y-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-hidden rounded-xl border border-[#263548] bg-[#0B1220]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex min-w-0 items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#162333] text-[#00D9FF]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ZipOrganizer.tsx",
                                                        lineNumber: 466,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                                    lineNumber: 465,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "truncate text-sm font-semibold",
                                                            children: file.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ZipOrganizer.tsx",
                                                            lineNumber: 470,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 text-xs text-[#64748B]",
                                                            children: [
                                                                "Original archive · ",
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$zipTree$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBytes"])(file.size)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/ZipOrganizer.tsx",
                                                            lineNumber: 473,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                                    lineNumber: 469,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ZipOrganizer.tsx",
                                            lineNumber: 464,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: resetArchive,
                                            className: "inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-[#34495E] px-3 text-xs text-[#A8B4C2] transition-colors hover:border-[#FF4D5A]/50 hover:text-[#FF4D5A]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                                    lineNumber: 483,
                                                    columnNumber: 15
                                                }, this),
                                                "Close archive"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ZipOrganizer.tsx",
                                            lineNumber: 479,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                    lineNumber: 463,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 border-t border-[#263548] sm:grid-cols-4",
                                    children: [
                                        {
                                            label: "Total files",
                                            value: fileCount
                                        },
                                        {
                                            label: "Folders",
                                            value: folderCount
                                        },
                                        {
                                            label: "To remove",
                                            value: summary.files
                                        },
                                        {
                                            label: "Remaining",
                                            value: remainingCount
                                        }
                                    ].map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `px-5 py-4 ${index !== 0 ? "border-l border-[#263548]" : ""}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] uppercase tracking-wider text-[#64748B]",
                                                    children: stat.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                                    lineNumber: 503,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `mt-2 text-xl font-semibold tabular-nums ${index === 2 ? "text-[#FF4D5A]" : index === 3 ? "text-[#35E69B]" : "text-[#F4F8FC]"}`,
                                                    children: stat.value
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                                    lineNumber: 507,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, stat.label, true, {
                                            fileName: "[project]/components/ZipOrganizer.tsx",
                                            lineNumber: 495,
                                            columnNumber: 15
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                    lineNumber: 488,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ZipOrganizer.tsx",
                            lineNumber: 462,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-hidden rounded-xl border border-[#263548] bg-[#0B1220]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col justify-between gap-4 border-b border-[#263548] p-5 sm:flex-row sm:items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-sm font-semibold",
                                                    children: "File Explorer"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                                    lineNumber: 528,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-xs text-[#64748B]",
                                                    children: "Select files or folders to mark them for removal."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                                    lineNumber: 531,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ZipOrganizer.tsx",
                                            lineNumber: 527,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>expandAll(tree.children),
                                                    className: "rounded-md border border-[#34495E] px-3 py-2 text-[11px] text-[#A8B4C2] hover:bg-[#162333]",
                                                    children: "Expand all"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                                    lineNumber: 537,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setExpanded(new Set()),
                                                    className: "rounded-md border border-[#34495E] px-3 py-2 text-[11px] text-[#A8B4C2] hover:bg-[#162333]",
                                                    children: "Collapse all"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                                    lineNumber: 544,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ZipOrganizer.tsx",
                                            lineNumber: 536,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                    lineNumber: 526,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between bg-[#0F172A] px-5 py-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-semibold uppercase tracking-wider text-[#64748B]",
                                            children: "Name"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ZipOrganizer.tsx",
                                            lineNumber: 554,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-semibold uppercase tracking-wider text-[#64748B]",
                                            children: "Size"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ZipOrganizer.tsx",
                                            lineNumber: 557,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                    lineNumber: 553,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-h-[540px] overflow-auto",
                                    children: tree.children.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "py-1",
                                        children: tree.children.map((node)=>renderNode(node, 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/ZipOrganizer.tsx",
                                        lineNumber: 564,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-10 text-center text-sm text-[#64748B]",
                                        children: "No entries found in this archive."
                                    }, void 0, false, {
                                        fileName: "[project]/components/ZipOrganizer.tsx",
                                        lineNumber: 570,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                    lineNumber: 562,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center justify-between gap-3 border-t border-[#263548] px-5 py-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] text-[#64748B]",
                                            children: [
                                                fileCount,
                                                " files · ",
                                                folderCount,
                                                " folders"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ZipOrganizer.tsx",
                                            lineNumber: 577,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] text-[#A8B4C2]",
                                            children: "Checked items will be removed."
                                        }, void 0, false, {
                                            fileName: "[project]/components/ZipOrganizer.tsx",
                                            lineNumber: 581,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                    lineNumber: 576,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ZipOrganizer.tsx",
                            lineNumber: 525,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-[#263548] bg-[#0B1220] p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col justify-between gap-4 sm:flex-row sm:items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            size: 16,
                                                            className: "text-[#FF4D5A]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ZipOrganizer.tsx",
                                                            lineNumber: 593,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-sm font-semibold",
                                                            children: "Cleanup summary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ZipOrganizer.tsx",
                                                            lineNumber: 594,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                                    lineNumber: 592,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 text-xs text-[#A8B4C2]",
                                                    children: [
                                                        summary.files,
                                                        " files marked for removal",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mx-2 text-[#34495E]",
                                                            children: "·"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ZipOrganizer.tsx",
                                                            lineNumber: 601,
                                                            columnNumber: 17
                                                        }, this),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$zipTree$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBytes"])(summary.bytes)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                                    lineNumber: 599,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ZipOrganizer.tsx",
                                            lineNumber: 591,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setSelected(new Set());
                                                setStatus("idle");
                                                setProgress(0);
                                            },
                                            disabled: selected.size === 0 || status === "building",
                                            className: "inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-[#34495E] px-4 text-xs text-[#A8B4C2] transition-colors hover:bg-[#162333] disabled:opacity-40",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                                    lineNumber: 615,
                                                    columnNumber: 15
                                                }, this),
                                                "Undo all"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ZipOrganizer.tsx",
                                            lineNumber: 606,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                    lineNumber: 590,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "my-5 h-px bg-[#263548]"
                                }, void 0, false, {
                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                    lineNumber: 620,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col justify-between gap-4 sm:flex-row sm:items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-semibold",
                                                    children: "Rebuild archive"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                                    lineNumber: 624,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-xs text-[#64748B]",
                                                    children: "Generate a new ZIP containing the remaining files."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                                    lineNumber: 627,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ZipOrganizer.tsx",
                                            lineNumber: 623,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: rebuild,
                                            disabled: status === "building" || remaining.length === 0,
                                            className: "inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#0066CC] px-5 text-xs font-semibold text-white transition-colors hover:bg-[#247BFF] disabled:cursor-not-allowed disabled:opacity-40",
                                            children: status === "building" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                        size: 15,
                                                        className: "animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ZipOrganizer.tsx",
                                                        lineNumber: 639,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Rebuilding ",
                                                    progress,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ZipOrganizer.tsx",
                                                lineNumber: 638,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$to$2d$line$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownToLine$3e$__["ArrowDownToLine"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ZipOrganizer.tsx",
                                                        lineNumber: 644,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Rebuild & Download"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ZipOrganizer.tsx",
                                                lineNumber: 643,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ZipOrganizer.tsx",
                                            lineNumber: 632,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                    lineNumber: 622,
                                    columnNumber: 11
                                }, this),
                                status === "building" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-2 flex justify-between text-[10px] text-[#A8B4C2]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Reconstruction progress"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                                    lineNumber: 654,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        progress,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                                    lineNumber: 655,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ZipOrganizer.tsx",
                                            lineNumber: 653,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-1.5 overflow-hidden rounded-full bg-[#263548]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-full bg-[#00D9FF] transition-all duration-200",
                                                style: {
                                                    width: `${progress}%`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/ZipOrganizer.tsx",
                                                lineNumber: 659,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ZipOrganizer.tsx",
                                            lineNumber: 658,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                    lineNumber: 652,
                                    columnNumber: 13
                                }, this),
                                status === "done" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 flex items-center gap-3 rounded-lg border border-[#35E69B]/20 bg-[#35E69B]/[0.05] p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            size: 17,
                                            className: "text-[#35E69B]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ZipOrganizer.tsx",
                                            lineNumber: 669,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-semibold text-[#35E69B]",
                                                    children: "Archive successfully rebuilt."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                                    lineNumber: 671,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-[11px] text-[#A8B4C2]",
                                                    children: "Your cleaned ZIP has been downloaded."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                                    lineNumber: 674,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ZipOrganizer.tsx",
                                            lineNumber: 670,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                    lineNumber: 668,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ZipOrganizer.tsx",
                            lineNumber: 589,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ZipOrganizer.tsx",
                    lineNumber: 458,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "mt-16 flex flex-col justify-between gap-3 border-t border-[#263548] py-6 sm:flex-row sm:items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__["Archive"], {
                                    size: 14,
                                    className: "text-[#00D9FF]"
                                }, void 0, false, {
                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                    lineNumber: 688,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-bold tracking-[0.15em]",
                                    children: "JANUS"
                                }, void 0, false, {
                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                    lineNumber: 689,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] text-[#64748B]",
                                    children: "Archive Intelligence System"
                                }, void 0, false, {
                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                    lineNumber: 692,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ZipOrganizer.tsx",
                            lineNumber: 687,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-[10px] text-[#64748B]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                    size: 13,
                                    className: "text-[#35E69B]"
                                }, void 0, false, {
                                    fileName: "[project]/components/ZipOrganizer.tsx",
                                    lineNumber: 698,
                                    columnNumber: 9
                                }, this),
                                "Files processed locally · No uploads"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ZipOrganizer.tsx",
                            lineNumber: 697,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] text-[#64748B]",
                            children: "VERSION 1.0"
                        }, void 0, false, {
                            fileName: "[project]/components/ZipOrganizer.tsx",
                            lineNumber: 702,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ZipOrganizer.tsx",
                    lineNumber: 686,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ZipOrganizer.tsx",
            lineNumber: 336,
            columnNumber: 1
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ZipOrganizer.tsx",
        lineNumber: 335,
        columnNumber: 1
    }, this);
}
_s(ZipOrganizer, "hdFmdHoWtOkIYpw0H3eSk/bE24w=");
_c = ZipOrganizer;
var _c;
__turbopack_context__.k.register(_c, "ZipOrganizer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/zipTree.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildTree",
    ()=>buildTree,
    "formatBytes",
    ()=>formatBytes,
    "isRemoved",
    ()=>isRemoved,
    "keptEntries",
    ()=>keptEntries,
    "removalSummary",
    ()=>removalSummary,
    "toggleSelection",
    ()=>toggleSelection
]);
function buildTree(entries) {
    const root = {
        path: "",
        name: "",
        isDir: true,
        size: 0,
        children: []
    };
    const dirs = new Map([
        [
            "",
            root
        ]
    ]);
    const ensureDir = (p)=>{
        const hit = dirs.get(p);
        if (hit) return hit;
        const parts = p.slice(0, -1).split("/");
        const parentPath = parts.length > 1 ? parts.slice(0, -1).join("/") + "/" : "";
        const node = {
            path: p,
            name: parts[parts.length - 1],
            isDir: true,
            size: 0,
            children: []
        };
        ensureDir(parentPath).children.push(node);
        dirs.set(p, node);
        return node;
    };
    for (const e of entries){
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
            children: []
        });
    }
    const finish = (n)=>{
        n.children.sort((a, b)=>Number(b.isDir) - Number(a.isDir) || a.name.localeCompare(b.name));
        if (n.isDir) n.size = n.children.reduce((s, c)=>s + finish(c), 0);
        return n.size;
    };
    finish(root);
    return root;
}
function isRemoved(path, selected) {
    if (selected.has(path)) return true;
    for(let i = path.indexOf("/"); i !== -1; i = path.indexOf("/", i + 1)){
        if (selected.has(path.slice(0, i + 1))) return true;
    }
    return false;
}
function toggleSelection(selected, path) {
    const next = new Set(selected);
    if (next.has(path)) {
        next.delete(path);
        return next;
    }
    if (path.endsWith("/")) {
        for (const p of selected)if (p.startsWith(path)) next.delete(p);
    }
    next.add(path);
    return next;
}
function keptEntries(entries, selected) {
    return entries.filter((e)=>!isRemoved(e.path, selected));
}
function removalSummary(entries, selected) {
    const removed = entries.filter((e)=>!e.path.endsWith("/") && isRemoved(e.path, selected));
    return {
        files: removed.length,
        bytes: removed.reduce((s, e)=>s + e.size, 0)
    };
}
function formatBytes(n) {
    if (n < 1024) return `${n} B`;
    const units = [
        "KB",
        "MB",
        "GB",
        "TB"
    ];
    let v = n / 1024;
    let u = 0;
    while(v >= 1024 && u < units.length - 1){
        v /= 1024;
        u++;
    }
    return `${v.toFixed(v < 10 ? 1 : 0)} ${units[u]}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0nr_n_glg5z9h._.js.map