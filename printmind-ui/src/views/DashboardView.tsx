import TopBar from '../components/TopBar'
import MetricWidget from '../components/MetricWidget'
import AIAlertBanner from '../components/AIAlertBanner'
import TelemetryCard from '../components/TelemetryCard'

export default function DashboardView() {
    return (
        <div className="flex flex-col min-h-screen">
            <TopBar />

            <div className="flex-1 p-8 space-y-6 max-w-[1440px]">
                {/* Page Title */}
                <div>
                    <h1 className="font-heading text-2xl font-bold text-text-primary">Print Farm Dashboard</h1>
                    <p className="text-sm text-text-muted mt-1">Real-time fleet monitoring · 15 printers across 3 bays</p>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    <MetricWidget
                        label="Active Printers"
                        value="12 / 15"
                        subtext="3 idle, ready to queue"
                        accent="text-status-printing"
                        icon={<PrinterGridIcon />}
                    />
                    <MetricWidget
                        label="AI Filament Saved"
                        value="1.2 kg"
                        subtext="This month via G-code optimization"
                        accent="text-accent-cyan"
                        icon={<FilamentIcon />}
                    />
                    <MetricWidget
                        label="Fleet Health"
                        value="98%"
                        subtext="All systems nominal"
                        accent="text-status-printing"
                        icon={<HeartIcon />}
                    />
                    <MetricWidget
                        label="Active Errors"
                        value="1"
                        subtext="Bay 2 — Ender 3 nozzle jam"
                        accent="text-status-error"
                        icon={<AlertIcon />}
                    />
                </div>

                {/* AI Alert */}
                <AIAlertBanner />

                {/* Telemetry Grid */}
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-heading text-lg font-semibold text-text-primary">Printer Fleet</h2>
                        <span className="text-[11px] font-mono text-text-muted bg-bg-surface border border-border-default px-3 py-1 rounded-full">
                            Live · Updated 3s ago
                        </span>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <TelemetryCard
                            modelName="Precision Gear v3"
                            fileName="gear_v3_final.stl"
                            material="PLA+"
                            status="printing"
                            progress={85}
                            nozzleTemp={210}
                            bedTemp={60}
                            fanSpeed={80}
                            timeRemaining="47m"
                            currentLayer={170}
                            totalLayers={200}
                            statusValue="85%"
                        />
                        <TelemetryCard
                            modelName="Phone Stand Pro"
                            fileName="phone_stand.stl"
                            material="PETG"
                            status="heating"
                            progress={15}
                            nozzleTemp={187}
                            bedTemp={52}
                            fanSpeed={0}
                            subtitle="Warming up…"
                            statusValue="220°C"
                        />
                        <TelemetryCard
                            modelName="Bracket Assembly"
                            fileName="bracket_asm.stl"
                            material="ABS"
                            status="error"
                            progress={43}
                            nozzleTemp={245}
                            bedTemp={80}
                            fanSpeed={100}
                            statusLabel="Nozzle Jam"
                            currentLayer={86}
                            totalLayers={200}
                        />
                        <TelemetryCard
                            modelName="Cable Clip Set (x20)"
                            fileName="cable_clips.stl"
                            material="PLA"
                            status="completed"
                            progress={100}
                            nozzleTemp={28}
                            bedTemp={25}
                            fanSpeed={0}
                            timeRemaining="1h 47m"
                        />
                        <TelemetryCard
                            modelName="Drone Propeller Guard"
                            fileName="prop_guard_v2.stl"
                            material="TPU"
                            status="paused"
                            progress={62}
                            nozzleTemp={230}
                            bedTemp={50}
                            fanSpeed={60}
                            subtitle="Paused by AI — filament tangle detected"
                            currentLayer={124}
                            totalLayers={200}
                        />
                        <TelemetryCard
                            modelName="Lithophane Frame"
                            fileName="litho_sunset.stl"
                            material="White PLA"
                            status="printing"
                            progress={31}
                            nozzleTemp={200}
                            bedTemp={55}
                            fanSpeed={100}
                            timeRemaining="3h 12m"
                            currentLayer={62}
                            totalLayers={200}
                            statusValue="31%"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

/* ── Metric Icons ── */
function PrinterGridIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="1" y="1" width="7" height="7" rx="1.5" />
            <rect x="10" y="1" width="7" height="7" rx="1.5" />
            <rect x="1" y="10" width="7" height="7" rx="1.5" />
            <rect x="10" y="10" width="7" height="7" rx="1.5" />
        </svg>
    )
}

function FilamentIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="9" cy="9" r="7" />
            <circle cx="9" cy="9" r="3" />
            <path d="M9 2v4M9 12v4" />
        </svg>
    )
}

function HeartIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 15.5s-6-4.35-6-8.25A3.25 3.25 0 019 4.88a3.25 3.25 0 016 2.37c0 3.9-6 8.25-6 8.25z" />
        </svg>
    )
}

function AlertIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 2L1.5 15.5h15L9 2z" />
            <path d="M9 7v4M9 13v.5" strokeLinecap="round" />
        </svg>
    )
}
