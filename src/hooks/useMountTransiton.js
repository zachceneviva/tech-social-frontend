import {useEffect, useState} from "react"

export const useMountTransition = (isMounted, unmountDelay) => {
    const [hasTransitionedIn, setHasTransitionedIn] =useState(false)

    useEffect(() => {
        let timeout;
        if(isMounted && !hasTransitionedIn) {
            setHasTransitionedIn(true)
        } else if (!isMounted && hasTransitionedIn) {
            timeout = setTimeout(() => setHasTransitionedIn(false), unmountDelay)
        }

        return () => {
            clearTimeout(timeout)
        }

    },[unmountDelay, isMounted, hasTransitionedIn])

    return hasTransitionedIn
}