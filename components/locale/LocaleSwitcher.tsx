import { Box, Menu, MenuItem, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import LanguageIcon from "@mui/icons-material/Language";
import React from "react";
import KeyboardArrowDownSharp from "@mui/icons-material/KeyboardArrowDownSharp";

const languageMap: {
    [key: string]: {
        locale: string;
        lang: string;
    };
} = {
    en: {
        locale: "en-US",
        lang: "English",
    },
    es: {
        locale: "es",
        lang: "Español",
    },
};
//Lang.en = en-US
//create object called localesAndLanguages
//where each key is the locale and each value is the language by getting the value from languageMap
const localesAndLanguages: {
    [key: string]: string;
} = {};
Object.keys(languageMap).forEach((key) => {
    let newKey = languageMap[key].locale;
    localesAndLanguages[newKey] = languageMap[key].lang;
});
const Lang: {
    [key: string]: string;
} = {};
Object.keys(languageMap).forEach((key) => {
    Lang[languageMap[key].locale] = key;
});
export { Lang };

function returnLocaleText<T>(text: { [key: string]: T }) {
    if (!text) return;
    try {
        const router = useRouter();
        const { locale } = router;
        const currentLang = locale ? Lang[locale] : Lang["en"];
        if (text[currentLang]) return text[currentLang];
        else return text["en"];
    } catch (e) {
        return text["en"];
    }
}
export { returnLocaleText };
export default function LocaleSwitcher() {
    const router = useRouter();
    const { locales, locale: activeLocale } = router;

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Box
                sx={{
                    backgroundColor: "#dadada",
                    color: "black",
                }}
            >
                <Box
                    sx={{
                        maxWidth: "1320px",
                        display: "flex",
                        justifyContent: "flex-end",
                        margin: "0 auto",
                    }}
                >
                    <Box
                        ref={anchorRef}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: ".5rem",
                            cursor: "pointer",
                            margin: "0 1rem",
                        }}
                        onClick={handleToggle}
                        id="locale-switcher"
                    >
                        <LanguageIcon />
                        <Typography variant="subtitle1">
                            {" "}
                            {localesAndLanguages[activeLocale ?? "en"]}
                        </Typography>
                        <KeyboardArrowDownSharp />
                    </Box>
                    <Menu
                        id="locale-switcher"
                        open={open}
                        onClose={handleClose}
                        anchorEl={anchorRef.current}
                        MenuListProps={{
                            style: { pointerEvents: "auto" },
                        }}
                        disableScrollLock={true}
                        anchorOrigin={{
                            horizontal: "left",
                            vertical: "bottom",
                        }}
                        style={{
                            pointerEvents: "none",
                            marginLeft: "2rem",
                        }}
                    >
                        {locales?.map((locale, index) => {
                            const { pathname, query, asPath } = router;
                            return (
                                <MenuItem onClick={handleClose} key={index}>
                                    <Link
                                        key={locale}
                                        href={{ pathname, query }}
                                        as={asPath}
                                        locale={locale}
                                        legacyBehavior
                                    >
                                        <Typography variant="subtitle1">
                                            {localesAndLanguages[locale]}
                                        </Typography>
                                    </Link>
                                </MenuItem>
                            );
                        })}
                    </Menu>
                </Box>
            </Box>
        </>
    );
}
