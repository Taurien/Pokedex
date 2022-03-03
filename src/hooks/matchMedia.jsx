import { useState, useEffect } from "react"

export const useMedia = query => {
    const mediaQ = window.matchMedia(query)
    const [matches, setMatches] = useState(mediaQ.matches)

    useEffect(() => {
        const listener = () => setMatches(mediaQ.matches);

        mediaQ.addEventListener('change', listener)
        
        return () => mediaQ.removeEventListener('change', listener);
    }, [])

    return matches
}