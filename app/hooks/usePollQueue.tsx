import { useState, useEffect } from 'react'
import { refreshQueue } from '~/graphql/actions'
import useIsViewingPage from './useIsViewingPage'

const CHECK_USER_INTERACTION_INTERVAL = 1000 // 1 second
const POLL_QUEUE_INTERVAL = 10000 // 10 secondS

export default function usePollQueue() {
  const [isActive, setIsActive] = useState(false)
  const isViewingPage = useIsViewingPage()

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    let intervalId: NodeJS.Timeout

    const handleUserAction = () => {
      setIsActive(true)
      clearTimeout(timeoutId)
      clearInterval(intervalId)
      timeoutId = setTimeout(() => {
        setIsActive(false)
        intervalId = setInterval(foo, POLL_QUEUE_INTERVAL)
      }, CHECK_USER_INTERACTION_INTERVAL)
    }

    const foo = async () => {
      // Only request queue if the user is looking at the page
      if (isViewingPage) {
        console.log('isViewingPage', isViewingPage)
        await refreshQueue()
      }
    }

    // Initial setup
    timeoutId = setTimeout(() => {
      setIsActive(false)
      intervalId = setInterval(foo, POLL_QUEUE_INTERVAL)
    }, CHECK_USER_INTERACTION_INTERVAL)

    // Set up interval for user interaction check
    intervalId = setInterval(() => {
      if (isActive) {
        foo()
      }
    }, POLL_QUEUE_INTERVAL)

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
  }, [isActive, isViewingPage])

  return isActive
}
