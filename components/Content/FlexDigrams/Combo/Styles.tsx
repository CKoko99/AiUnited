
export const classes = {
    root: {
        width: "90%",
        margin: "auto",
        padding: "1rem 0",
        display: "flex",
        flexDirection: "column",
        gap: "2rem"
    },
    titles: {
        textAlign: "center",
        width: { xs: "90%", sm: "80%", md: "70%" },
        margin: "auto",
    },
    imageContainer: {
        position: "relative",
        height: "13rem",
        width: "100%",
    },
    itemsContainer: {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: { xs: "column", md: "row" },
        gap: "2rem", alignItems: "stretch"
    },
    contentItem: {
        border: "1px solid #cacaca",
        maxWidth: { xs: "90%", md: "40%" },
        margin: "0 auto",
        borderRadius: "16px",
        flex: "1",
        boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.25)",
        display: "flex", flexDirection: "column",
    },
    itemTextContainer: {
        display: "flex",
        flexDirection: "column",
    },
    bottomContainer: {
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        flex: "1", paddingBottom: "1rem", padding: "0 1rem 1rem 1rem"
    },
    buttonsContainer: {
        display: "flex",
        justifyContent: "space-around",
        gap: "1rem",
        marginTop: "1rem",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
    },
    button: {
        minWidth: { xs: "12rem", md: "" },
    }
}