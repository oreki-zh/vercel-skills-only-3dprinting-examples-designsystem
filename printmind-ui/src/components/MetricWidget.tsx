interface MetricWidgetProps {
    label: string
    value: string
    subtext?: string
    accent: string      // Tailwind text color, e.g. 'text-status-printing'
    icon: React.ReactNode
}

export default function MetricWidget({ label, value, subtext, accent, icon }: MetricWidgetProps) {
    return (
        <div className="bg-bg-surface border border-border-default rounded-xl p-5 flex items-start gap-4 hover:border-border-strong transition-colors duration-150 cursor-default">
            <div className={`w-10 h-10 rounded-lg bg-bg-elevated flex items-center justify-center flex-shrink-0 ${accent}`}>
                {icon}
            </div>
            <div className="flex flex-col min-w-0">
                <span className="text-[11px] font-medium text-text-muted uppercase tracking-wider mb-1">{label}</span>
                <span className={`font-heading text-xl font-bold tabular-nums ${accent}`}>{value}</span>
                {subtext && <span className="text-[11px] text-text-muted mt-0.5">{subtext}</span>}
            </div>
        </div>
    )
}
