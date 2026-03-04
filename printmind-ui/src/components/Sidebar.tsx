interface SidebarProps {
    currentView: 'dashboard' | 'design-system'
    onNavigate: (view: 'dashboard' | 'design-system') => void
}

const navItems = [
    { id: 'dashboard' as const, label: 'Main Dashboard', icon: DashboardIcon },
    { id: 'design-system' as const, label: 'Design System', icon: PaletteIcon },
]

export default function Sidebar({ currentView, onNavigate }: SidebarProps) {
    return (
        <aside className="w-[240px] flex-shrink-0 h-screen flex flex-col bg-bg-surface border-r border-border-default">
            {/* Logo */}
            <div className="px-5 py-5 flex items-center gap-3 border-b border-border-default">
                <div className="w-8 h-8 rounded-lg bg-accent-cyan flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 28 28" fill="none">
                        <path d="M7 20V8l7 4v8l-7-4zm7 0V12l7-4v12l-7 4z" fill="#0B0F19" />
                    </svg>
                </div>
                <div className="flex flex-col">
                    <span className="font-heading font-bold text-sm text-text-primary leading-tight">PrintMind</span>
                    <span className="text-[10px] text-accent-cyan font-mono">v1.0 · AI Engine</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
                <span className="px-3 mb-2 text-[10px] font-mono font-medium text-text-muted uppercase tracking-widest">Navigation</span>
                {navItems.map((item) => {
                    const active = currentView === item.id
                    return (
                        <button
                            key={item.id}
                            onClick={() => onNavigate(item.id)}
                            className={`
                flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 cursor-pointer w-full text-left
                ${active
                                    ? 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20'
                                    : 'text-text-muted hover:text-text-primary hover:bg-bg-elevated border border-transparent'
                                }
              `}
                        >
                            <item.icon active={active} />
                            {item.label}
                        </button>
                    )
                })}
            </nav>

            {/* Footer */}
            <div className="px-4 py-4 border-t border-border-default">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent-cyan/20 flex items-center justify-center text-accent-cyan text-xs font-bold">PM</div>
                    <div className="flex flex-col min-w-0">
                        <span className="text-xs font-medium text-text-primary truncate">Print Manager</span>
                        <span className="text-[10px] text-text-muted">Admin</span>
                    </div>
                </div>
            </div>
        </aside>
    )
}

function DashboardIcon({ active }: { active: boolean }) {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0">
            <rect x="1" y="1" width="7" height="7" rx="1.5" stroke={active ? '#06B6D4' : '#9CA3AF'} strokeWidth="1.5" fill="none" />
            <rect x="10" y="1" width="7" height="7" rx="1.5" stroke={active ? '#06B6D4' : '#9CA3AF'} strokeWidth="1.5" fill="none" />
            <rect x="1" y="10" width="7" height="7" rx="1.5" stroke={active ? '#06B6D4' : '#9CA3AF'} strokeWidth="1.5" fill="none" />
            <rect x="10" y="10" width="7" height="7" rx="1.5" stroke={active ? '#06B6D4' : '#9CA3AF'} strokeWidth="1.5" fill="none" />
        </svg>
    )
}

function PaletteIcon({ active }: { active: boolean }) {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0">
            <circle cx="9" cy="9" r="7.25" stroke={active ? '#06B6D4' : '#9CA3AF'} strokeWidth="1.5" fill="none" />
            <circle cx="9" cy="5" r="1.5" fill={active ? '#06B6D4' : '#9CA3AF'} />
            <circle cx="5.5" cy="8" r="1.5" fill={active ? '#06B6D4' : '#9CA3AF'} />
            <circle cx="7" cy="12" r="1.5" fill={active ? '#06B6D4' : '#9CA3AF'} />
        </svg>
    )
}
