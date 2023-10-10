
import localFont from "next/font/local"


const Gustavo = localFont({
    src: [
        {
            path: './Gustavo-Bold.ttf',
            weight: '700',
            style: 'normal'
        },
        {
            path: './Gustavo-Medium.ttf',
            weight: '500',
            style: 'normal'
        }
    ]
})


export default Gustavo.style.fontFamily
