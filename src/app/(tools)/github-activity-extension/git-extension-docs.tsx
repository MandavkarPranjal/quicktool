"use client";

import { useState } from "react";

export default function GitExtensionDocs() {
    const [isClicked, setIsClicked] = useState(false);
    // when the button is clicked, set the clicked state to true and render new content
    if (isClicked) {
        return (
            <main className="flex flex-grow flex-col items-center justify-center text-center">
                <div className="text-2xl">
                    GitHub Activity Extension
                </div>
                <div className="mt-4"></div>
                <p className="">
                    This extension will help you to get the latest GitHub activity
                    of a user or organization.
                </p>
                <p className="mt-1 inline-block rounded-full border border-white/30 bg-white/5 px-2 py-0.5 text-center text-sm text-white/60">
                    btw, I am not affiliated with GitHub and I don&apos;t collect any of your data
                </p>
                <div className="mt-4"></div>
                <div>
                    <span className="text-white/80">I am broke and google charges me to add this extension to chrome web store, So get it from </span>
                    <a
                        href="https://github.com/MandavkarPranjal/quicktool"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                    >
                        here
                    </a>
                </div>
                <div className="mt-4"></div>
                <div className="flex flex-row">
                    Also, you can support me by buying me a
                    <a
                        className="text-coffeeyellow"
                        href="https://www.buymeacoffee.com/mandavkarpranjal"
                        target="_blank"
                    >
                        &nbsp;Coffee
                    </a>
                    &nbsp;or&nbsp;
                    <a
                        href="https://suggest.gg/mandavkarpranjal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-suggest"
                    >
                        suggest
                    </a>
                    &nbsp;me some ideas for my next project
                </div>
            </main>
        )
    }
    // if the button is not clicked, render the initial content
    return (
        <main className="flex flex-grow flex-col items-center justify-center text-center">
            <div className="text-2xl">
                GitHub Activity Extension
            </div>
            <div className="mt-4"></div>
            <p className="">
                This extension will help you to get the latest GitHub activity
                of a user or organization.
            </p>
            <p className="mt-1 inline-block rounded-full border border-white/30 bg-white/5 px-2 py-0.5 text-center text-sm text-white/60">
                btw, I am not affiliated with GitHub and I don&apos;t collect any of your data
            </p>

            <div className="mt-4"></div>
            <span
                className="text-blue-500 hover:underline"
                onClick={() => setIsClicked(true)}
            >
                Go to Chrome Web Store</span>
        </main>
    )
}
