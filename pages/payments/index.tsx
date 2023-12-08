import Link from 'next/link'
import aainsImg from '../../public/assets/images/payments/aains.png'
import aggressiveusaImg from '../../public/assets/images/payments/aggressiveusa.png'
import amwinsImg from '../../public/assets/images/payments/amwinsauto.png'
import apolloImg from '../../public/assets/images/payments/apollo.png'
import connectImg from '../../public/assets/images/payments/Connect_Insurance.png'
import dairylandImg from '../../public/assets/images/payments/dairylandcycle_8m72-p6.png'
import empowerImg from '../../public/assets/images/payments/empowerins.png'
import foremostImg from '../../public/assets/images/payments/foremost.png'
import gainscoImg from '../../public/assets/images/payments/gainsco.png'
import hallmarkImg from '../../public/assets/images/payments/Hallmark_Insurance_Website.png'
import progressiveImg from '../../public/assets/images/payments/Progressive_Insurance.png'
import uaigImg from '../../public/assets/images/payments/uaig.png'
import ventureImg from '../../public/assets/images/payments/venture.png'
import wellingtonImg from '../../public/assets/images/payments/wellingtoninsgroup.png'
import aspenImg from '../../public/assets/images/payments/aspen.png'
import bridgerImg from '../../public/assets/images/payments/bridger.png'
import excellentImg from '../../public/assets/images/payments/excellent.png'
import falconImg from '../../public/assets/images/payments/falcon.png'
import jubileeImg from '../../public/assets/images/payments/jubilee.png'
import lamarImg from '../../public/assets/images/payments/lamar.png'
import lonestarImg from '../../public/assets/images/payments/lonestar.png'
import trinityImg from '../../public/assets/images/payments/trinity.png'
import westernImg from '../../public/assets/images/payments/western.png'
import { Box, Button, FormControl, Modal, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { StaticImageData } from 'next/image';
import { useRouter } from 'next/router'
import { Lang } from '@/components/locale/LocaleSwitcher'

const paymentText = {
    payment: {
        en: "Make a Payment",
        es: "Hacer un Pago"
    },
    enterPolicyNumber: {
        en: "Enter your policy number below to make a payment",
        es: "Ingrese su número de póliza a continuación para realizar un pago"
    },
    policyNumber: {
        en: "Policy Number",
        es: "Número de Póliza"
    },
    selectProvider: {
        en: "Select your insurance provider to make a payment",
        es: "Seleccione su proveedor de seguros para realizar un pago"
    },
    providerNotListed: {
        en: "Don't See Your Insurance Provider? Click Here to Select Others",
        es: "¿No ve su proveedor de seguros? Haga clic aquí para seleccionar otros"
    },
    enterValidPolicyNumber: {
        en: "Enter a Valid Policy Number",
        es: "Ingrese un número de póliza válido"
    }
}
const providers = [
    {
        title: "American Access Casualty Company",
        link: "https://payments.aains.com/payment.cfm",
        img: aainsImg,
        keys: ["42AU"]
    },
    {
        title: "Aggressive Insurance",
        link: "https://www.bluefireinsurance.com/make-a-payment/",
        img: aggressiveusaImg,
        keys: ["TKS", "TXA", "TXE", "MCY", "AMM", "AAE", 'ALL']
    },
    {
        title: "Amwins Insurance",
        link: "https://osis.amwinsauto.com/insd/",
        img: amwinsImg,
        keys: ["WCC", "ADR", "VLX", "EGA", "PME", "PRH", "EXL", "HTG", "PGA", "PGL"]
    },
    {
        title: "Apollo Insurance",
        link: "https://isiweb.apollomga.com/is/startPaymentIndex.cfm",
        img: apolloImg,
        keys: ["APS", "APM", "NSM", "SPS", "NSS"]
    },
    {
        title: "Aspen Insurance",
        link: "https://aspenmga.com/aspen/policy_payments.html",
        img: aspenImg,
        keys: ["PPTX"],
    },
    {
        title: "Bridger Insurance",
        link: "https://bridgerins.com/policyholders/",
        img: bridgerImg,
        keys: ["TXKBBGPPA"],
    },
    {
        title: "Connect Insurance",
        link: "http://www.connectinsurance.com/insd/",
        img: connectImg,
        keys: ["CCB01", "CCA01", "CCM01"]
    },
    {
        title: "DairyLand Insurance",
        link: "https://my.dairylandinsurance.com/",
        img: dairylandImg,
        keys: ["434", "TX"]
    },
    {
        title: "Empower / Alinsco Insurance",
        link: "https://customers.empowerins.com/Insurance/Auto/Policy/tx/fort-worth/empower-insurance-company/121000",
        img: empowerImg,
        keys: ["EAA", "EAP", "EAL", "EAB", "EAS"]
    },
    {
        title: "Excellent Insurance",
        link: "https://isiapp.excellentins.com/is/PolicyholderPortal/index.cfm",
        img: excellentImg,
        keys: ["X42M", "X42S", "GNM", "GNS"],
    },
    {
        title: "Falcon Insurance",
        link: "https://www.falconinsgroup.com/en/Customers/Payment",
        img: falconImg,
        keys: ["200"]
    },
    {
        title: "Gainsco Insurance",
        link: "https://www.billerpayments.com/app/cust/guestauth.do?bsn=gainsco",
        img: gainscoImg,
        keys: ["03MGEP", "03MGEN"]
    },
    {
        title: "Hallmark Insurance",
        link: "http://www.hallmarkinsco.com/index/make-a-payment-and-manage-your-policy",
        img: hallmarkImg,
        keys: ["TXA", "TXR",]
    },
    {
        title: "Jubilee Insurance",
        link: "https://jubileeinsurance.com/ke/how-to-make-payments/",
        img: jubileeImg,
        keys: ['0']
    },
    {
        title: "Lamar General Insurance",
        link: "https://lamargenagency.com/index.php/make-a-payment/",
        img: lamarImg,
        keys: ["TXP"],
    },
    {
        title: "Progressive Insurance",
        link: "https://onlineservice7.progressive.com/selfservice.web/SelfService.aspx?Page=Non-LoggedIn.VerifyPolicy.ProvidePolicyInformation&QueryStringSetKey=SessionGateway&OfferingID=SelfService&SessionStart=TRUE&EZDestination=EZPAY",
        img: progressiveImg,
        keys: ["9", "0", "4"]
    },
    {
        title: "United Auto Insurance Company",
        link: "https://mypolicy.uaig.net/insurednew/",
        img: uaigImg,
        keys: ["TXA", "TXS", "TXY", "TXM"]
    },
    {
        title: "Venture Insurance Agency",
        link: "https://ventureinsga.net/is/startpaymentindex.cfm",
        img: ventureImg,
        keys: ["VGAL", "VGAM", "VGAS", "VGAO"]
    },
    {
        title: "Wellington Insurance",
        link: "https://www.wellingtoninsgroup.com/mywellington/expresspay",
        img: wellingtonImg,
        keys: ["WDN", "WRA", "WHG", "TIC", "PIC", "TRV", "WWS", "AGW", "TSI", "SUT"]
    },
    {
        title: "Western General",
        link: "https://www.westerngeneral.com/customers",
        img: westernImg,
        keys: ["LST"]
    },
    {
        title: "Lone star",
        link: "https://www.lonestarmga.com/MakeaPayment",
        img: lonestarImg,
        keys: ["TXM"]
    },
    {
        title: "Trinity",
        link: "https://auto.tttmga.com/is/PolicyholderPortal/index.cfm?ctest=1",
        img: trinityImg,
        keys: ["TTXL", "LA0"]
    },
    {
        title: "Dairyland",
        link: "https://my.dairylandinsurance.com/web/login",
        img: dairylandImg,
        keys: ["11406"]
    },
    {
        title: "Foremost",
        link: "https://www.foremost.com/payonline/",
        img: foremostImg,
        keys: ["106-9", "077-00", "276-00", "381-501", "381-500",]
    },
]
providers.sort((a, b) => {
    if (a.title < b.title) {
        return -1
    }
    if (a.title > b.title) {
        return 1
    }
    return 0
})
const styles = {
    modal: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: 1002,
        width: { xs: "90%", sm: "80%", md: "70%", lg: "50%" },
        minHeight: "20%",
        backgroundColor: "white",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: { xs: "1rem", sm: " 2rem  " },
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        maxHeight: "90vh",
    },
}
function Providers(props) {
    return <Link
        style={{ flex: "1", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}
        target='_blank'
        href={props.link} >
        <Box
            sx={{
                position: "relative", height: "7rem", width: "15rem"
            }}
        >
            <Image fill style={{ objectFit: "contain" }} src={props.img} alt={props.title} />
        </Box>
        <Typography variant="h6">{props.title}</Typography>
    </Link >
}
interface ModalContent {
    title: string,
    link: string,
    img: StaticImageData
}
export default function () {
    const [paymentInput, setPaymentInput] = useState("")
    const [error, setError] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [modalContent, setModalContent] = useState<ModalContent[] | null>(null)
    const [errorCount, setErrorCount] = useState(0)
    const [showAllProviders, setShowAllProviders] = useState(false)
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']


    useEffect(() => {
        //check to see if there is 2 keys from different providers that are the same
        let found = false

        providers.forEach((item, index) => {
            item.keys.forEach((key) => {
                providers.forEach((item2, index2) => {
                    if (index !== index2) {
                        item2.keys.forEach((key2) => {
                            if (key === key2) {
                                found = true
                                //log companies with duplicate keys
                                console.log(item.title, item2.title, key)
                            }
                        })
                    }
                })
            })
        })
        if (found) {
            console.log("found duplicate keys")
        } else {
            console.log("no duplicate keys found")
        }


    }, [])
    function handleKeySearch() {
        //loop through providers and check if any of the keys match the start of the input
        //if they do, redirect to that link
        const foundProvider = [] as any
        let found = false
        setError(false)
        providers.forEach((item) => {
            item.keys.forEach((key) => {
                if (paymentInput.toUpperCase().startsWith(key.toUpperCase())) {
                    setOpenModal(true)
                    let newProvider = {
                        title: item.title,
                        link: item.link,
                        img: item.img
                    }
                    foundProvider.push(newProvider)
                    found = true
                }
            })
        })
        setModalContent(foundProvider)
        if (!found) {
            setError(true)
        }
        console.log(foundProvider)
        setErrorCount(errorCount + 1)
    }
    const providersContent = <Box sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "3rem",
        alignItems: "center",
        justifyContent: "center",
        margin: "2rem 0"
    }}
    >
        {providers.map((item, index) => {
            return <Providers key={index} {...item} />
        })}
    </Box>
    return <>
        <Box
            sx={{
                width: "90%", maxWidth: "1000px", margin: "auto", padding: "2rem 0", textAlign: "center",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2rem"
            }}
        >
            <Typography variant="h2">{paymentText.payment[currentLang]}</Typography>
            <Typography variant="h5">{paymentText.enterPolicyNumber[currentLang]}</Typography>
            <FormControl
                sx={{ display: "flex", flexDirection: "row", }}
            >
                <TextField label={paymentText.policyNumber[currentLang]} variant="outlined"
                    value={paymentInput}
                    onChange={(e) => setPaymentInput(e.target.value)}
                    error={error}
                    helperText={error && paymentText.enterValidPolicyNumber[currentLang]}
                    style={{
                        width: "12rem",
                        backgroundColor: "white"
                    }}
                />
                <Box>
                    <Button variant="contained" color="secondary"
                        onClick={handleKeySearch}
                        sx={{ width: "10rem", minHeight: "3.5rem" }}

                    >
                        {paymentText.payment[currentLang]}
                    </Button>
                </Box>
            </FormControl>
            {(errorCount > 1 && !showAllProviders) && <Button
                onClick={() => setShowAllProviders(true)}
            >
                {paymentText.providerNotListed[currentLang]}
            </Button>}
            {showAllProviders && providersContent}
            {openModal && <Modal

                open={openModal}
                onClose={() => setOpenModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ ...styles.modal, textAlign: "center" }}>
                    <Typography variant="h5">
                        {paymentText.selectProvider[currentLang]}
                    </Typography>
                    <Box
                        sx={{ display: "flex", gap: "1rem", justifyContent: "center" }}
                    >

                        {modalContent?.map((item, index) => {
                            return <React.Fragment key={index}>
                                <Link
                                    style={{
                                        display: "flex", flexDirection: "column",
                                    }}
                                    target='_blank'
                                    href={item.link || ""}
                                >
                                    <Box sx={{
                                        position: "relative", height: "7rem", width: "15rem", margin: "auto"
                                    }}>

                                        {item?.img && <Image fill style={{ objectFit: "contain" }} src={item.img} alt={item.title} />}
                                    </Box>
                                    <Typography variant="subtitle1">{item.title}</Typography>
                                </Link>
                            </React.Fragment>
                        })}
                    </Box>
                    {/*  <Button variant="contained" color="secondary"
                        style={{ width: "10rem", margin: "auto" }}
                        onClick={() => window.open(modalContent[0].link, "_blank")}
                    >Continue</Button>
                    */}
                    <Button
                        onClick={() => {
                            setShowAllProviders(true)
                            setOpenModal(false)
                        }
                        }
                    >
                        {paymentText.providerNotListed[currentLang]}
                    </Button>
                </Box>
            </Modal>}
        </Box >
    </>
}