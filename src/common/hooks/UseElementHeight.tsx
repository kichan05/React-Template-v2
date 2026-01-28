import {useEffect, useRef, useState} from "react";

export const useElementHeight = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [height, setHeight] = useState(0)

    useEffect(() => {
        if(!ref.current) return

        const observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                setHeight(entry.contentRect.height)
            }
        })

        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return [ref, height] as const
}