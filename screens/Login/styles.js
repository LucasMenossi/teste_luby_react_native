import { StyleSheet } from 'react-native';

const Style = StyleSheet.create ({
    image: {
        width: 98,
        height: 97,
        marginBottom: 48,
    },
    backGround: {
        backgroundColor: "#292929",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        backgroundColor: "#FFFFFF",
        margin: 20,
        height: 56,
        borderRadius: 12,
        paddingVertical: 17,
        paddingLeft: 20,
        width: "100%",
        fontSize: 20,
        flexDirection: "row",
        fontFamily: "Helvetica-Neue",
    },
    button: {
        backgroundColor: "#FFCE00",
        width: "100%",
        height: 56,
        borderRadius: 12,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
    seta: {
        width: 18,
        height: 18,
        marginLeft: 13,
    },
    texto: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Helvetica-Neue",
    },
    textoInput: {
        fontSize: 20,
        fontFamily: "Helvetica-Neue",
    },
    textoError: {
        fontSize: 14,
        fontFamily: "Helvetica-Neue",
        color: "red", 
        marginRight: 19,
    }
})

export default Style;