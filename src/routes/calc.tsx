import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'


declare global {
  interface Window {
    createYelWidget: (
      selector: string | HTMLElement,
      options?: {
        locale?: 'fi' | 'sv' | 'en'
        defaultIncome?: number
        defaultBirthYear?: number
        defaultPaymentCount?: 1 | 2 | 3 | 4 | 6 | 12
        showAccumulatedPension?: boolean
        showPaymentOptions?: boolean
        showModeSelector?: boolean
        showDailyAllowances?: boolean
        showWorkIncomeRecommendation?: boolean
      }
    ) => void
  }
}

export const Route = createFileRoute('/calc')({
  component: RouteComponent,
})

function RouteComponent() {
  useEffect(() => {
    if (window.createYelWidget) {
      window.createYelWidget('#yel-calculator', {
        locale: 'fi',
        defaultIncome: 25000,
        defaultBirthYear: 1981,
        showAccumulatedPension: false,
        showPaymentOptions: true,
        showModeSelector: false,
        showDailyAllowances: true,
        showWorkIncomeRecommendation: true,
      })
    }
  }, [])

  return (
    <div className="yel-calculator-container">
      <div id="yel-calculator" />
    </div>
  )
}
