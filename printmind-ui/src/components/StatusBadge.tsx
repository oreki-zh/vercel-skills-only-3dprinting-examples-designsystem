type BadgeVariant = 'heating' | 'printing' | 'error' | 'completed' | 'idle' | 'warning' | 'optimizing' | 'paused'

interface StatusBadgeProps {
    variant: BadgeVariant
    label?: string
    value?: string
}

const config: Record<BadgeVariant, { bg: string; text: string; dot: string; animation?: string }> = {
    heating: { bg: 'bg-status-heating/12', text: 'text-orange-300', dot: 'bg-status-heating', animation: 'animate-dot-pulse' },
    printing: { bg: 'bg-status-printing/12', text: 'text-green-300', dot: 'bg-status-printing' },
    error: { bg: 'bg-status-error/12', text: 'text-red-300', dot: 'bg-status-error', animation: 'animate-dot-urgent' },
    completed: { bg: 'bg-status-completed/12', text: 'text-purple-300', dot: 'bg-status-completed' },
    idle: { bg: 'bg-status-idle/12', text: 'text-gray-400', dot: 'bg-status-idle' },
    warning: { bg: 'bg-status-warning/12', text: 'text-yellow-300', dot: 'bg-status-warning', animation: 'animate-dot-pulse' },
    optimizing: { bg: 'bg-accent-cyan/12', text: 'text-cyan-300', dot: 'border-accent-cyan/30 border-t-accent-cyan', animation: 'animate-spin-dot' },
    paused: { bg: 'bg-status-paused/12', text: 'text-blue-300', dot: 'bg-status-paused' },
}

const labels: Record<BadgeVariant, string> = {
    heating: 'Heating',
    printing: 'Printing',
    error: 'Error',
    completed: 'Completed',
    idle: 'Idle',
    warning: 'Warning',
    optimizing: 'Optimizing',
    paused: 'Paused by AI',
}

export default function StatusBadge({ variant, label, value }: StatusBadgeProps) {
    const c = config[variant]
    const isSpinner = variant === 'optimizing'

    return (
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium ${c.bg} ${c.text}`}>
            <span
                className={`flex-shrink-0 rounded-full ${c.animation ?? ''} ${isSpinner ? 'w-2 h-2 border-[1.5px] bg-transparent' : 'w-1.5 h-1.5'
                    } ${isSpinner ? c.dot : c.dot}`}
            />
            {label || labels[variant]}
            {value && <span className="font-mono tabular-nums ml-0.5">{value}</span>}
        </span>
    )
}

export type { BadgeVariant }
