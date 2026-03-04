import StatusBadge from './StatusBadge'
import ProgressBar from './ProgressBar'
import type { BadgeVariant } from './StatusBadge'

export interface TelemetryCardProps {
    modelName: string
    fileName: string
    material: string
    status: BadgeVariant
    progress: number
    nozzleTemp: number
    bedTemp: number
    fanSpeed: number
    timeRemaining?: string
    currentLayer?: number
    totalLayers?: number
    statusLabel?: string
    statusValue?: string
    subtitle?: string
}

const borderColors: Record<string, string> = {
    printing: 'border-l-status-printing',
    heating: 'border-l-status-heating',
    error: 'border-l-status-error',
    completed: 'border-l-status-completed',
    idle: 'border-l-border-default',
    warning: 'border-l-status-warning',
    optimizing: 'border-l-accent-cyan',
    paused: 'border-l-status-paused',
}

export default function TelemetryCard({
    modelName, fileName, material, status, progress,
    nozzleTemp, bedTemp, fanSpeed,
    timeRemaining, currentLayer, totalLayers,
    statusLabel, statusValue, subtitle,
}: TelemetryCardProps) {
    const isError = status === 'error'

    return (
        <div className={`
      bg-bg-surface border border-border-default rounded-xl p-4 flex flex-col gap-4
      border-l-[3px] ${borderColors[status] ?? ''}
      hover:border-border-strong hover:shadow-[0_4px_6px_rgba(0,0,0,0.4)] transition-all duration-200 cursor-pointer
      ${isError ? 'bg-gradient-to-br from-status-error/5 to-bg-surface' : ''}
    `}>
            {/* Header */}
            <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-lg bg-bg-elevated flex items-center justify-center flex-shrink-0">
                    <PrinterIcon status={status} />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                        <span className="font-heading text-sm font-semibold text-text-primary truncate">{modelName}</span>
                        <StatusBadge variant={status} label={statusLabel} value={statusValue} />
                    </div>
                    <span className="font-mono text-[11px] text-text-muted">{fileName} · {material}</span>
                </div>
            </div>

            {/* Progress */}
            <div className="flex flex-col gap-2">
                <ProgressBar value={progress} status={status} />
                <div className="flex items-center justify-between text-[12px] text-text-muted">
                    <span className="flex items-center gap-1">
                        {isError ? (
                            <span className="text-red-300">Halted — requires attention</span>
                        ) : status === 'completed' ? (
                            <span>Finished {timeRemaining && `in ${timeRemaining}`}</span>
                        ) : subtitle ? (
                            <span>{subtitle}</span>
                        ) : (
                            <>
                                <ClockIcon />
                                <span className="font-mono tabular-nums">{timeRemaining ?? '—'}</span>
                                <span>remaining</span>
                            </>
                        )}
                    </span>
                    {currentLayer && totalLayers ? (
                        <span className="font-mono tabular-nums">Layer {currentLayer}/{totalLayers}</span>
                    ) : (
                        <span className="font-mono tabular-nums font-medium text-text-primary">{progress}%</span>
                    )}
                </div>
            </div>

            {/* Telemetry Readings */}
            <div className="flex gap-4 py-3 border-t border-b border-border-default/40">
                <Reading label="Nozzle" value={`${nozzleTemp}°C`} warn={isError || status === 'heating'} cool={status === 'completed'} />
                <Reading label="Bed" value={`${bedTemp}°C`} cool={status === 'completed'} />
                <Reading label="Fan" value={`${fanSpeed}%`} />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
                {status === 'error' && <ActionBtn variant="primary" label="Retry" />}
                {status === 'completed' && <ActionBtn variant="primary" label="Reprint" />}
                {(status === 'printing' || status === 'heating') && <ActionBtn variant="secondary" label="Pause" />}
                <ActionBtn variant="secondary" label="Details" />
                {status !== 'completed' && (
                    <button className="ml-auto w-8 h-8 rounded-lg border border-border-default flex items-center justify-center text-status-error hover:bg-status-error/10 transition-colors cursor-pointer" aria-label="Stop print">
                        <svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12"><rect x="4" y="4" width="8" height="8" rx="1" /></svg>
                    </button>
                )}
            </div>
        </div>
    )
}

function Reading({ label, value, warn, cool }: { label: string; value: string; warn?: boolean; cool?: boolean }) {
    let color = 'text-text-primary'
    if (warn) color = 'text-status-heating'
    if (cool) color = 'text-text-muted'
    return (
        <div className="flex-1 flex flex-col items-center gap-0.5">
            <span className="text-[10px] font-medium text-text-muted uppercase tracking-wider">{label}</span>
            <span className={`font-mono text-sm font-medium tabular-nums ${color}`}>{value}</span>
        </div>
    )
}

function ActionBtn({ variant, label }: { variant: 'primary' | 'secondary'; label: string }) {
    const base = 'h-8 px-3.5 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer'
    const styles = variant === 'primary'
        ? `${base} bg-accent-cyan text-bg-base hover:bg-[#0891B2] hover:shadow-[0_0_12px_rgba(6,182,212,0.3)]`
        : `${base} bg-transparent border border-border-default text-text-secondary hover:bg-bg-elevated hover:text-text-primary hover:border-border-strong`
    return <button className={styles}>{label}</button>
}

function ClockIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" className="flex-shrink-0 opacity-60">
            <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm.75-10.25a.75.75 0 00-1.5 0v3.5c0 .199.079.39.22.53l2 2a.75.75 0 101.06-1.06L8.75 7.94V4.75z" clipRule="evenodd" />
        </svg>
    )
}

function PrinterIcon({ status }: { status: string }) {
    const color = status === 'printing' ? '#22C55E' : status === 'heating' ? '#F97316' : status === 'error' ? '#EF4444' : status === 'completed' ? '#8B5CF6' : status === 'paused' ? '#3B82F6' : '#6B7280'
    return (
        <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
            <rect x="4" y="22" width="24" height="3" rx="1" fill="#374151" />
            <rect x="8" y="8" width="16" height="14" rx="2" fill={color} opacity="0.3" />
            <rect x="12" y="12" width="8" height="8" rx="1" fill={color} opacity="0.55" />
        </svg>
    )
}
