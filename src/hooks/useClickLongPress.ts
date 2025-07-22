import { useRef, type RefObject } from "react"

type ClickLongPressSet = {
    onMouseDown: () => void
    onMouseUp: () => void
    onTouchStart: () => void
    onTouchEnd: () => void
    onClick: (e: React.MouseEvent) => void
}

export const useClickLongPress = (
    clickCallback: () => void,
    LongPressCallback: () => void,
    ms: number = 1000
): ClickLongPressSet => {
    const timeout: RefObject<number | undefined> = useRef(undefined)
    const isLongPress: RefObject<boolean | undefined> = useRef(false)

    const start = () => {
        isLongPress.current = false
        timeout.current = setTimeout(() => {
            isLongPress.current = true
            LongPressCallback()
        }, ms)
    }

    const stop = () => {
        timeout.current && clearTimeout(timeout.current)
        timeout.current = undefined
    }

    const click = (e: React.MouseEvent) => {
        if (!isLongPress.current) {
            e.cancelable = true
            clickCallback()
        }
    }

    return {
        onMouseDown: start,
        onMouseUp: stop,
        onTouchStart: start,
        onTouchEnd: stop,
        onClick: click,
    }
}
