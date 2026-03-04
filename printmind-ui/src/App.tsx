import { useState } from 'react'
import Sidebar from './components/Sidebar'
import DashboardView from './views/DashboardView'
import DesignSystemView from './views/DesignSystemView'

export default function App() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'design-system'>('dashboard')

  return (
    <div className="flex h-screen overflow-hidden bg-bg-base">
      <Sidebar currentView={currentView} onNavigate={setCurrentView} />
      <main className="flex-1 overflow-y-auto">
        {currentView === 'dashboard' ? <DashboardView /> : <DesignSystemView />}
      </main>
    </div>
  )
}
