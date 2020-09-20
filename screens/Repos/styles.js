import { StyleSheet } from 'react-native';

const Style = StyleSheet.create ({
    backGround: {
        backgroundColor: "#292929",
        width: "100%",
        height: "100%",
        display: "flex",
    },
    pageTop: {
        flexDirection: "row",
        paddingTop: 23,
        marginTop: 20,
        width: "100%",
        backgroundColor: "#1F1F1F",
        height: 68,
    },
    texto: {
        color: "white",
    },
    seta: {
        height: 18,
        width: 18,
        marginLeft: 18,
    },
    icons: {
        height: 18,
        width: 16,
        marginRight: 9,
    },
    viewAmarela: {
        backgroundColor: "#FFCE00",
        height: 42,
        width: 20,
        borderRadius: 100,
        marginLeft: -10,
    },
    repos: {
        width: "100%",
        flexDirection: "row",
        paddingVertical: 20,
    },
    reposInfo: {
        flexDirection: "row",
    }
})

export default Style;