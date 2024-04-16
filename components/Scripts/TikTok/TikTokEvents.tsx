
declare global {
    interface Window {
        ttq: {
            track: (eventName: string, data: Record<string, unknown>) => void
        }
    }
}

export const event = (eventName: string, additionalParams: Record<string, unknown> = {}) => {
    function performAction() {
        window.ttq.track(eventName, additionalParams)
    }
    if (window.ttq) {
        performAction()
    } else {
        setTimeout(() => {
            if (window.ttq) {
                performAction()
            } else {
                console.error('TikTok Pixel not loaded')
            }
        }, 1000)
    }
}