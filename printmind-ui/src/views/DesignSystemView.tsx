export default function DesignSystemView() {
    return (
        <div className="p-8 max-w-5xl mx-auto">
            <div className="mb-8">
                <p className="font-mono text-xs text-accent-cyan uppercase tracking-widest mb-2">Design System v1.0</p>
                <h1 className="font-heading text-3xl font-bold text-text-primary mb-3">PrintMind Design System</h1>
                <p className="text-text-secondary text-base leading-relaxed max-w-xl">
                    Comprehensive design tokens, components, and guidelines for AI-powered 3D print management. Paste your design system content here.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Color Tokens Placeholder */}
                <div className="rounded-xl border border-border-default bg-bg-surface p-6">
                    <h3 className="font-heading text-lg font-semibold mb-4 text-text-primary">Color Palette</h3>
                    <div className="flex flex-wrap gap-3">
                        {['#0B0F19', '#111827', '#06B6D4', '#22C55E', '#F97316', '#EF4444', '#8B5CF6', '#EAB308'].map((c) => (
                            <div key={c} className="flex flex-col items-center gap-1.5">
                                <div className="w-12 h-12 rounded-lg border border-border-default" style={{ background: c }} />
                                <span className="font-mono text-[10px] text-text-muted">{c}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Typography Placeholder */}
                <div className="rounded-xl border border-border-default bg-bg-surface p-6">
                    <h3 className="font-heading text-lg font-semibold mb-4 text-text-primary">Typography</h3>
                    <div className="space-y-3">
                        <div>
                            <span className="font-mono text-[10px] text-text-muted">Heading — Space Grotesk</span>
                            <p className="font-heading text-2xl font-bold">Print Farm Dashboard</p>
                        </div>
                        <div>
                            <span className="font-mono text-[10px] text-text-muted">Body — DM Sans</span>
                            <p className="text-text-secondary text-sm">PLA+ filament at 210°C nozzle, 60°C bed.</p>
                        </div>
                        <div>
                            <span className="font-mono text-[10px] text-text-muted">Mono — JetBrains Mono</span>
                            <p className="font-mono text-accent-cyan text-sm">G28 ; Home all axes</p>
                        </div>
                    </div>
                </div>

                {/* Components Placeholder */}
                <div className="rounded-xl border border-border-default bg-bg-surface p-6 md:col-span-2">
                    <h3 className="font-heading text-lg font-semibold mb-4 text-text-primary">Components</h3>
                    <p className="text-text-muted text-sm">
                        Buttons, Status Badges, Data Inputs, Telemetry Cards — paste your full design system documentation or component showcase here.
                    </p>
                    <div className="mt-4 rounded-lg border border-dashed border-border-default bg-bg-base p-8 flex items-center justify-center">
                        <span className="text-text-muted text-sm">Your design system content goes here</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
