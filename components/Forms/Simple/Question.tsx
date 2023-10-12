import { Box, FormControl, TextField } from "@mui/material"
import { useRouter } from "next/router"
import { Lang } from "../../locale/LocaleSwitcher"

function InputQuestion(props) {
    return <>
        <Box
            sx={{ width: props.fullWidth ? "100%" : { xs: "100%", md: "49%" } }}
        >
            <FormControl fullWidth>
                <TextField
                    label={props.title}
                />
            </FormControl>
        </Box>
    </>
}
export default function (props) {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']
    return <><InputQuestion  {...props} title={props.title[currentLang]} /> </>
}