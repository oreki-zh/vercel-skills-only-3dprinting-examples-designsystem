import type { BadgeVariant } from './StatusBadge'

interface ProgressBarProps {
    value: number
    status: BadgeVariant
}

const fills: Record<string, string> = {
    heating: 'bg-status-heating',
    printing: 'bg-status-printing',
    error: 'bg-status-error',
    completed: 'bg-status-completed',
    idle: 'bg-status-idle',
    warning: 'bg-status-warning',
    optimizing: 'bg-accent-cyan',
    paused: 'bg-status-paused',
}

export default function ProgressBar({ value, status }: ProgressBarProps) {
    return (
        <div className="w-full h-2 bg-bg-elevated rounded-full overflow-hidden">
            <div
                className={`h-full rounded-full transition-[width] duration-1000 linear ${fills[status] ?? 'bg-accent-cyan'}`}
                style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
            />
        </div>
    )
}
