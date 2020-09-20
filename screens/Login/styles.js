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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20
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
    },
    button: {
        backgroundColor: "#FFCE00",
        width: "100%",
        height: 56,
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    seta: {
        width: 18,
        height: 18,
        marginLeft: 13,
    },
    texto: {
        fontSize: 20,
        fontWeight: "bold"
    }
})

export default Style;