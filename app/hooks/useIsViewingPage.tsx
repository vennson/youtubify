import { useEffect, useState } from 'react'

export default function useIsViewingPage() {
  const [onFocus, setOnFocus] = useState(false)

  const onFocusFunction = () => {
    // do whatever when focus is gained
    setOnFocus(true)
  }

  const onBlurFunction = () => {
    // do whatever when focus is lost
    setOnFocus(false)
  }

  useEffect(() => {
    onFocusFunction()

    window.addEventListener('focus', onFocusFunction)
    window.addEventListener('blur', onBlurFunction)

    return () => {
      onBlurFunction()

      window.removeEventListener('focus', onFocusFunction)
      window.removeEventListener('blur', onBlurFunction)
    }
  }, [])

  return onFocus
}
