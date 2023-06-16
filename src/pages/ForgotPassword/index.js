import { StyleSheet, Text, View, TextInput } from "react-native";;
import { Link } from "@react-navigation/native";
import { useState } from "react";

export default function ForgotPassword() {
    let [email, onchangeEmail] = useState("");
    return (
        <View style={forgotPassword.container}>
            <Text style={forgotPassword.title}>Forgot password?</Text>
            <View>
                <Text style={forgotPassword.text}>If the email is correct, we will send you the password reset.</Text>
                <TextInput
                    style={forgotPassword.input}
                    value={email}
                    placeholder="E-mail address"
                    onChangeText={onchangeEmail}
                />
            </View>
            <Link
                style={forgotPassword.signin__link}
                to={{ screen: 'Login' }}>
                Reset Password
            </Link>
            <View>
                <Text style={forgotPassword.text}>Do you have an account?</Text>
                <Link
                    style={forgotPassword.signup__link}
                    to={{ screen: 'Register' }}>
                    Back to Register
                </Link>
            </View>

        </View>
    );
}

const forgotPassword = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",

        padding: 20,
        backgroundColor: "#27282b",
    },
    title: {
        fontSize: "calc(2rem + 2vw)",
        fontWeight: 200,
        color: "#EEF1F7",
    },
    text: {
        marginBottom: "calc(1rem + 1vw)",

        fontSize: "calc(1rem + 1vw)",
        fontWeight: 200,
        textAlign: "center",
        color: "#EEF1F7",
    },
    input: {
        padding: "calc(0.8rem + 0.4vw)",
        marginBottom: "calc(1rem + 1vw)",
        borderRadius: 50,

        fontSize: "calc(1rem + 1vw)",
        backgroundColor: "#2f3136",
        color: "#EEF1F7",
    },
    signin__link: {
        padding: "calc(0.8rem + 0.4vw)",
        marginBottom: "calc(1rem + 1vw)",
        borderRadius: 50,

        textAlign: "center",
        fontSize: "calc(1rem + 1vw)",
        backgroundColor: "##a84d51",
        color: "#EEF1F7",
    },
    signup__link: {
        textAlign: "center",
        fontSize: "calc(1rem + 1vw)",
        color: "#a84d51",
    },
});