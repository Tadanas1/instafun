

export const MainStyles = {
    button: {
        fontSize: 20,
        color: "#ffffff",
        borderRadius: "10px",
        backgroundColor: "rgb(0, 149, 206)",
        fontFamily: "BlueVinyl",
        letterSpacing: "3px",
        "&:hover": {
            backgroundColor: "rgb(1,132,180)",
        },
        "&:disabled": {
            color: "rgba(255, 255, 255, 0.7)"
        }
    },
    appBox: {
        width: "100%",
    },
    mainBox: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fafafa",
        alignItems: "center",
        minHeight: {xs: "680px", md: "750px"}
    },
    headerBox: {
        width: "100%",
        height: "70px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: "1px solid #dcdcdc",
        marginBottom: "20px",
        backgroundColor: "#fff"
    },
    contentBox: {
        width: {xs: "96%", md: "86%"},
        // backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    contentColumn: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: {xs: "100%", md: "67%"},
    },
    storiesBox: {
        display: "flex",
        flexDirection: "row",
        border: "1px solid #dcdcdc",
        borderRadius: "10px",
        width: "100%",
        height: "90px",
        backgroundColor: "#fff",
        marginBottom: "20px",
        alignItems: "center"
    },
    storiesPhoto: {
        width: "70px",
        height: "70px",
        borderRadius: "50%",
    },
    directPhoto: {
        width: "60px",
        height: "60px",
        borderRadius: "50%",
    },
    storiesPhotoBox: {
        width: "72px",
        height: "72px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid #dcdcdc",
        marginLeft: "10px",
    },
    formBox: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        border: "1px solid #dcdcdc",
        borderRadius: "10px",
        backgroundColor: "#fff",
        padding: "10px 0px"
    },
    directBox: {
        display: {xs: "none", md: "flex"},
        width: "30%",
        flexDirection: "column",
        border: "1px solid #dcdcdc",
        borderRadius: "10px",
    },
    dialogBox: {
        display: "flex",
        flexDirection: "row",
        height: "80px",
        padding: "0 5px",
        alignItems: "center",
        marginBottom: "5px"
    },
    dialogTextBox: {
        marginLeft: "20px",

    },
    dialogName: {
        fontSize: 16,
        fontWeight: 700
    },
    dialogText: {
        fontSize: 13,
        fontWeight: 400
    }

}