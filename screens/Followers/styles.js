import { StyleSheet } from 'react-native';

const Style = StyleSheet.create ({
    backGround: {
        backgroundColor: "#292929",
        width: "100%",
        height: "110%",
        marginBottom: "-10%",
        display: "flex",
    },
    pageTop: {
        flexDirection: "row",
        paddingTop: 23,
        width: "100%",
        backgroundColor: "#1F1F1F",
        height: 68,
    },
    textoFollowers: {
        color: "white",
        fontFamily: "Helvetica-Neue",
        fontSize: 17,
        fontWeight: "bold"
    },
    textoNome: {
        color: "white",
        fontFamily: "Helvetica-Neue",
        fontSize: 17,
        fontWeight: "bold"
    },
    seta: {
        height: 18,
        width: 18,
        marginLeft: 18,
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
        paddingTop: 30,
        borderBottomWidth: 1,
        borderColor: "#52525D",
        paddingBottom: 30,
    },
    foto: {
        width: 64,
        height: 64,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: "white",
        marginLeft: 25,
        marginRight: 32,
    },
    nome: {
        marginTop: 18,
    }, 
    arrumar: {
        position: 'absolute',
        right: 15,
        top: 30
    }
})

export default Style;