import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
    sair: {
        height: 19,
        width: 19,
    },
    foto: {
        width: 115,
        height: 115,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: "white",
        marginTop: "-15%",
        marginBottom: 39,
    },
    backGround: {
        backgroundColor: "#292929",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
    },
    pageTop: {
        flexDirection: "row",
        paddingTop: 23,
        paddingLeft: 11,
        width: "100%",
        justifyContent: "space-between",
        paddingRight: 29,
        backgroundColor: "#1F1F1F",
        height: 126,
    },
    texto: {
        color: "white",
        fontFamily: "Helvetica-Neue",
    },
    textoNome: {
        color: "white",
        fontFamily: "Helvetica-Neue",
        fontWeight: "bold",
        fontSize: 26
    },
    textoInfo: {
        fontSize: 18,
        color: "white",
        fontFamily: "Helvetica-Neue",
    },
    textoNumero: {
        fontSize: 32,
        color: "white",
        fontFamily: "Helvetica-Neue",
        fontWeight: "bold",
    },
    textoInfo2: {
        fontSize: 17,
        color: "white",
        fontFamily: "Helvetica-Neue",
    },
    textoLogin: {
        fontSize: 17,
        color: "white",
        fontFamily: "Helvetica-Neue",
        fontWeight: "bold"
    },
    viewAmarela: {
        backgroundColor: "#FFCE00",
        height: 42,
        width: 20,
        borderRadius: 100,
        marginLeft: -10,
    },
    midView: {
        flexDirection: "row",
        width: "100%",
    },
    infoGit: {
        marginTop: 44,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        backgroundColor: "#5252525D",
        paddingTop: 12,
        paddingBottom: 16,
    },
    bottomView: {
        width: "100%",
        flexDirection: "row",
        marginTop: 40,
        marginBottom: 40,
    },
    infoGitText: {
        textAlign: "center",
    },
})

export default Style;