
declare global {
    interface Window {
        fbq: Function;
    }
}

export const event = (name: string, options = {}) => {
    function performAction() {
        window.fbq('track', name, options)
    }
    if (window.fbq) {
        performAction()
    } else {
        setTimeout(() => {
            if (window.fbq) {
                performAction()
            } else {
                console.error('Facebook Pixel not loaded')
            }
        }, 1000)
    }
}