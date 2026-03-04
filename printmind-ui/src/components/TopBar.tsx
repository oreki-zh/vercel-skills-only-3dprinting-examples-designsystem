import { useState } from 'react'

export default function TopBar() {
    const [aiPilot, setAiPilot] = useState(true)

    return (
        <div className="flex items-center gap-4 px-8 py-4 border-b border-border-default bg-bg-surface/60 backdrop-blur-md sticky top-0 z-10">
            {/* Search */}
            <div className="flex-1 max-w-md relative">
                <SearchIcon />
                <input
                    type="text"
                    placeholder="Search printers, models, G-code…"
                    spellCheck={false}
                    className="w-full h-9 pl-9 pr-4 rounded-lg bg-bg-elevated border border-border-default text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 transition-all"
                />
            </div>

            {/* AI Auto-Pilot Toggle */}
            <div className="flex items-center gap-2.5 ml-auto">
                <span className="text-xs font-medium text-text-muted">AI Auto-Pilot</span>
                <button
                    onClick={() => setAiPilot(!aiPilot)}
                    className={`relative w-11 h-6 rounded-full transition-colors duration-200 cursor-pointer flex-shrink-0 ${aiPilot ? 'bg-accent-cyan' : 'bg-bg-hover'
                        }`}
                    role="switch"
                    aria-checked={aiPilot}
                    aria-label="Toggle AI Auto-Pilot"
                >
                    <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-200 ${aiPilot ? 'translate-x-5' : 'translate-x-0'
                        }`} />
                </button>
                {aiPilot && (
                    <span className="text-[10px] font-mono text-accent-cyan bg-accent-cyan/10 px-2 py-0.5 rounded-full">ACTIVE</span>
                )}
            </div>

            {/* Separator */}
            <div className="w-px h-6 bg-border-default mx-1" />

            {/* User Avatar */}
            <div className="flex items-center gap-3 cursor-pointer group">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-cyan to-status-completed flex items-center justify-center text-[11px] font-bold text-bg-base ring-2 ring-transparent group-hover:ring-accent-cyan/30 transition-all">
                    JD
                </div>
                <div className="flex-col hidden sm:flex">
                    <span className="text-xs font-medium text-text-primary group-hover:text-accent-cyan transition-colors">John Doe</span>
                    <span className="text-[10px] text-text-muted">Fleet Admin</span>
                </div>
            </div>
        </div>
    )
}

function SearchIcon() {
    return (
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="7" cy="7" r="5.25" />
            <path d="M11 11l3.5 3.5" strokeLinecap="round" />
        </svg>
    )
}
