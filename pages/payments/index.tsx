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
import { Box, Button, FormControl, Modal, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'
const providers = [
    {
        title: "American Access Casualty Company",
        link: "https://payments.aains.com/payment.cfm",
        img: aainsImg,
        keys: ["42AU"]
    },
    {
        title: "Aggressive Insurance",
        link: "https://portalone.processonepayments.com/Aggressive/AggressiveInsurance",
        img: aggressiveusaImg,
        keys: ["TKS", "TXA", "TXE", "MCY"]
    },
    {
        title: "Amwins Insurance",
        link: "https://osis.amwinsauto.com/insd/",
        img: amwinsImg,
        keys: ["PGA", "PGL"]
    },
    {
        title: "Apollo Insurance",
        link: "https://isiweb.apollomga.com/is/startPaymentIndex.cfm",
        img: apolloImg,
        keys: ["APS", "APM"]
    },
    {
        title: "Connect Insurance",
        link: "http://www.connectinsurance.com/insd/",
        img: connectImg,
        keys: ["CCB"]
    },
    {
        title: "DairyLand Insurance",
        link: "https://my.dairylandinsurance.com/",
        img: dairylandImg,
        keys: ["434", "TX"]
    },
    {
        title: "Empower Insurance",
        link: "https://customers.empowerins.com/Insurance/Auto/Policy/tx/fort-worth/empower-insurance-company/121000",
        img: empowerImg,
        keys: ["EMP", "EAB", "EML", "EAP", "LSS", "EAL", "EAS"]
    },
    {
        title: "Foremost Insurance",
        link: "https://www.bristolwest.com/bristolwest/login/login.aspx?Foremost=true",
        img: foremostImg,
        keys: ["G00"]
    },
    {
        title: "Foremost Insurance",
        link: "https://secure4.billerweb.com/fmi/JustPayIt/jpt.do",
        img: foremostImg,
        keys: ["0", "RC"]
    },
    {
        title: "Gainsco Insurance",
        link: "https://www.billerpayments.com/app/cust/guestauth.do?bsn=gainsco",
        img: gainscoImg,
        keys: ["03"]
    },
    {
        title: "Hallmark Insurance",
        link: "http://www.hallmarkinsco.com/index/make-a-payment-and-manage-your-policy",
        img: hallmarkImg,
        keys: ["TXA", "TXR", "342", "942", "042", "650"]
    },
    {
        title: "Progressive Insurance",
        link: "https://onlineservice7.progressive.com/selfservice.web/SelfService.aspx?Page=Non-LoggedIn.VerifyPolicy.ProvidePolicyInformation&QueryStringSetKey=SessionGateway&OfferingID=SelfService&SessionStart=TRUE&EZDestination=EZPAY",
        img: progressiveImg,
        keys: ["910", "909", "407", "406", "911"]
    },
    {
        title: "United Automobile Insurance Company",
        link: "https://mypolicy.uaig.net/insurednew/",
        img: uaigImg,
        keys: ["TXA", "TXS"]
    },
    {
        title: "Venture Insurance Agency",
        link: "https://ventureinsga.net/is/startpaymentindex.cfm",
        img: ventureImg,
        keys: ["VGAL", "VGAS"]
    },
    {
        title: "Wellington Insurance",
        link: "https://www.wellingtoninsgroup.com/mywellington/expresspay",
        img: wellingtonImg,
        keys: ["TVH", "WLD", "WLH", "CPC", "TVD", "CDI"]
    },
]

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
        <Typography variant="h6">{props.title}</Typography>
        <Box
            sx={{
                position: "relative", height: "7rem", width: "15rem"
            }}
        >
            <Image fill style={{ objectFit: "contain" }} src={props.img} alt={props.title} />
        </Box>
    </Link >
}
export default function () {
    const [paymentInput, setPaymentInput] = useState("")
    const [error, setError] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [modalContent, setModalContent] = useState({
        title: "",
        link: "",
        img: null
    })
    function handleKeySearch() {
        //loop through providers and check if any of the keys match the start of the input
        //if they do, redirect to that link
        let found = false
        setError(false)
        providers.forEach((item) => {
            item.keys.forEach((key) => {
                if (paymentInput.startsWith(key)) {
                    setOpenModal(true)
                    setModalContent({
                        title: item.title,
                        link: item.link,
                        img: item.img
                    })
                    found = true
                }
            })
        })
        if (!found) {
            setError(true)
        }


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
            <Typography variant="h2">Make a Payment</Typography>
            <Typography variant="h5">Enter your policy number below to make a payment</Typography>
            <FormControl
                sx={{ display: "flex", flexDirection: "row", }}

            >
                <TextField label="Policy Number" variant="outlined"
                    value={paymentInput}
                    onChange={(e) => setPaymentInput(e.target.value)}
                    error={error}
                    helperText={error && "Enter a Valid Policy Number"}
                    style={{
                        width: "12rem",
                        backgroundColor: "white"
                    }}
                />
                <Button variant="contained" color="secondary"
                    onClick={handleKeySearch}
                    sx={{ width: "10rem", minHeight: "3.5rem" }}

                >Make a Payment</Button>
            </FormControl>
            {openModal && <Modal

                open={openModal}
                onClose={() => setOpenModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ ...styles.modal, textAlign: "center" }}>
                    <Typography variant="h5">
                        Continue to {modalContent.title} to make a payment
                    </Typography>
                    <Box
                        sx={{
                            position: "relative", height: "7rem", width: "15rem", margin: "auto"
                        }}
                    >
                        <Image fill style={{ objectFit: "contain" }} src={modalContent.img} alt={modalContent.title} />
                    </Box>
                    <Button variant="contained" color="secondary"
                        style={{ width: "10rem", margin: "auto" }}
                        onClick={() => window.open(modalContent.link, "_blank")}
                    >Continue</Button>
                </Box>
            </Modal>}
        </Box >
    </>
}