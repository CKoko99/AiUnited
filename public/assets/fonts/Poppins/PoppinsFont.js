
import localFont from "next/font/local"

const fonts = [
    {
        path: './Poppins-Black.ttf',
        weight: '900',
        style: 'normal'
    },
    {
        weight: '900',
        style: 'italic',
        path: './Poppins-BlackItalic.ttf'
    },
    {
        path: './Poppins-Bold.ttf',
        weight: '700',
        style: 'normal'
    },
    {
        path: './Poppins-BoldItalic.ttf',
        weight: '700',
        style: 'italic'
    },
    {
        path: './Poppins-ExtraBold.ttf',
        weight: '800',
        style: 'normal'
    },
    {
        path: './Poppins-ExtraBoldItalic.ttf',
        weight: '800',
        style: 'italic'
    },
    {
        path: './Poppins-ExtraLight.ttf',
        weight: '200',
        style: 'normal'

    },
    {
        path: './Poppins-ExtraLightItalic.ttf',
        weight: '200',
        style: 'italic'
    },
    {
        path: './Poppins-Italic.ttf',
        weight: '400',
        style: 'italic'
    },
    {
        path: './Poppins-Light.ttf',
        weight: '300',
        style: 'normal'
    },
    {
        path: './Poppins-LightItalic.ttf',
        weight: '300',
        style: 'italic'
    },
    {
        path: './Poppins-MediumItalic.ttf',
        weight: '500',
        style: 'italic'
    },
    {
        path: './Poppins-Regular.ttf',
        weight: '400',
        style: 'normal'
    },
    {
        path: './Poppins-SemiBold.ttf',
        weight: '600',
        style: 'normal'
    },
    {
        path: './Poppins-SemiBoldItalic.ttf',
        weight: '600',
        style: 'italic'
    },
    {
        path: './Poppins-Thin.ttf',
        weight: '100',
        style: 'normal'
    },
    {
        path: './Poppins-ThinItalic.ttf',
        weight: '100',
        style: 'italic'
    },
    {
        path: './Poppins-Medium.ttf',
        weight: '500',
        style: 'normal'
    },
]
//remove all fonts that contain Italic
const filteredFonts = [
    {
        path: './Poppins-Black.ttf',
        weight: '900',
        style: 'normal'
    },
    {
        path: './Poppins-Bold.ttf',
        weight: '700',
        style: 'normal'
    },

    {
        path: './Poppins-ExtraBold.ttf',
        weight: '800',
        style: 'normal'
    },

    {
        path: './Poppins-ExtraLight.ttf',
        weight: '200',
        style: 'normal'

    },


    {
        path: './Poppins-Light.ttf',
        weight: '300',
        style: 'normal'
    },


    {
        path: './Poppins-Regular.ttf',
        weight: '400',
        style: 'normal'
    },
    {
        path: './Poppins-SemiBold.ttf',
        weight: '600',
        style: 'normal'
    },
    {
        path: './Poppins-Thin.ttf',
        weight: '100',
        style: 'normal'
    },
    {
        path: './Poppins-Medium.ttf',
        weight: '500',
        style: 'normal'
    },
]

const Poppins = localFont({
    src: [
        {
            path: './Poppins-Black.ttf',
            weight: '900',
            style: 'normal'
        },
        {
            path: './Poppins-Bold.ttf',
            weight: '700',
            style: 'normal'
        },
        {
            path: './Poppins-ExtraBold.ttf',
            weight: '800',
            style: 'normal'
        },
        {
            path: './Poppins-Regular.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: './Poppins-SemiBold.ttf',
            weight: '600',
            style: 'normal'
        },
        {
            path: './Poppins-Medium.ttf',
            weight: '500',
            style: 'normal'
        },
    ]
})


export default Poppins.style.fontFamily
