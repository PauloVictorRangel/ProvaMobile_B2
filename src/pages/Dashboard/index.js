import { StyleSheet, View, Text } from "react-native";

export default function Dashboard() {
    return (
        <View style={signin.container}>
            <Text style={signin.text}>Dashboard</Text>
        </View>
    );
}

const signin = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

        padding: 20,
        backgroundColor: "#27282b",
    },
    text: {
        fontSize: "calc(2rem + 2vw)",
        fontWeight: 200,
        color: "#EEF1F7",
    },
});