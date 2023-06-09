import { useEffect, useRef } from 'react'

// Custom hook for execute any function by x delay
export const useInterval = (callback: () => void, delay: number | null) => {
    const savedCallback = useRef(callback)

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current()
        }
        if (delay !== null) {
            let id = setInterval(tick, delay)
            return () => clearInterval(id)
        }
    }, [delay])
}
