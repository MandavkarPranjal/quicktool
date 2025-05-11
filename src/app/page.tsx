import Link from "next/link";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col justify-between p-8 font-[family-name:var(--font-geist-sans)] sm:p-20">
            <main className="flex flex-grow flex-col items-center justify-center text-center">
                <div className="text-2xl">
                    Hi. I&apos;m{" "}
                    <a
                        href="https://x.com/__pr4njal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        Pranjal
                    </a>
                    . I built these tools because I was annoyed they did not exist <br />
                    <p className="inline-block rounded-full border border-white/30 bg-white/5 px-2 py-0.5 text-center text-sm text-white/60">
                        Or maybe I was just bored
                    </p>

                </div>
                <div className="mt-4"></div>
                <Link href="/github-activity-extension" title="extension that show user activity of repo owner" className="text-blue-500 hover:underline">
                    GitHub Activity Extension
                </Link>
                <Link href="https://whataduck.vercel.app/" title="better duckduckgo with AI" className="text-blue-500 hover:underline mt-1" target="_blank">
                    WhataDuck
                </Link>
            </main>
            <footer className="mt-8 text-center text-sm text-gray-500">
                <a
                    href="https://github.com/MandavkarPranjal/quicktool"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    View on GitHub
                </a>
            </footer>
        </div>
    );
}
