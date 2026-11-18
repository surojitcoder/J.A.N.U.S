import "./globals.css";
import type { Metadata } from "next";
import ZipOrganizer from "@/components/ZipOrganizer";

export const metadata: Metadata = {
title: "JANUS — Archive Intelligence System",
description:
"Inspect, organize, clean, and rebuild ZIP archives. Powered entirely by your browser. Your files never leave your device.",
};

export default function Home() {
return (
<main className="min-h-screen bg-[#080B10] text-[#F4F8FC] selection:bg-[#00D9FF]/30 selection:text-white">
<ZipOrganizer />
</main>
);
}