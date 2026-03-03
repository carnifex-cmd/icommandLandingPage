import { ReactNode } from "react";

interface TerminalWindowProps {
    title?: string;
    className?: string;
    children: ReactNode;
}

export default function TerminalWindow({
    title,
    className = "",
    children,
}: TerminalWindowProps) {
    return (
        <div
            className={`border border-[#333333] bg-black font-mono text-sm shadow-2xl overflow-hidden flex flex-col ${className}`}
        >
            {/* Traffic-light title bar */}
            <div className="h-8 border-b border-[#333333] flex items-center px-4 bg-[#1a1a1a] shrink-0">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#333333]" />
                    <div className="w-3 h-3 rounded-full bg-[#333333]" />
                    <div className="w-3 h-3 rounded-full bg-[#333333]" />
                </div>
                {title && (
                    <div className="mx-auto text-xs text-[#666666]">{title}</div>
                )}
            </div>
            {/* Content */}
            <div className="flex-1 overflow-hidden">{children}</div>
        </div>
    );
}
