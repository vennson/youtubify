import { useState, useEffect } from 'react'

export default function usePollQueue() {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    let intervalId: NodeJS.Timeout

    const handleUserAction = () => {
      setIsActive(true)
      clearTimeout(timeoutId)
      clearInterval(intervalId)
      timeoutId = setTimeout(() => {
        setIsActive(false)
        intervalId = setInterval(foo, 1000)
      }, 3000)
    }

    const foo = () => {
      // Your logic for the "foo" function goes here
      console.log('foo is executed')
    }

    // Initial setup
    timeoutId = setTimeout(() => {
      setIsActive(false)
      intervalId = setInterval(foo, 1000)
    }, 3000)

    // Event listeners for user actions
    window.addEventListener('click', handleUserAction)
    window.addEventListener('keydown', handleUserAction)

    // Clean up event listeners on component unmount
    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
      window.removeEventListener('click', handleUserAction)
      window.removeEventListener('keydown', handleUserAction)
    }
  }, [])

  return isActive
}
