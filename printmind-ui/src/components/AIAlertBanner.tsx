import { useState } from 'react'

export default function AIAlertBanner() {
    const [dismissed, setDismissed] = useState(false)
    if (dismissed) return null

    return (
        <div className="relative rounded-xl border border-accent-cyan/20 bg-accent-cyan/5 animate-shimmer overflow-hidden">
            <div className="relative flex items-start gap-4 px-5 py-4">
                {/* AI Icon */}
                <div className="w-9 h-9 rounded-lg bg-accent-cyan/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="#06B6D4">
                        <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0114 15a3.989 3.989 0 01-3.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L10 6.917l-1.763.665 1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 016 15a3.989 3.989 0 01-3.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" />
                    </svg>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="font-heading text-sm font-semibold text-accent-cyan">AI Auto-Pilot Alert</span>
                        <span className="text-[10px] font-mono text-text-muted bg-bg-elevated px-2 py-0.5 rounded-full">2 min ago</span>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">
                        Printer <span className="font-mono text-text-primary font-medium">Ender-5 Bay 3</span> detected abnormal Z-axis layer adhesion at layer 87.
                        AI reduced print speed to <span className="font-mono text-accent-cyan">35 mm/s</span> and increased bed temp to <span className="font-mono text-accent-cyan">65°C</span>.
                        Print failure probability dropped from <span className="font-mono text-status-error">72%</span> → <span className="font-mono text-status-printing">4%</span>.
                    </p>
                </div>

                {/* Dismiss */}
                <button
                    onClick={() => setDismissed(true)}
                    className="w-7 h-7 rounded-md flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-bg-elevated transition-colors cursor-pointer flex-shrink-0"
                    aria-label="Dismiss alert"
                >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                        <path d="M3.5 3.5l7 7M10.5 3.5l-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
