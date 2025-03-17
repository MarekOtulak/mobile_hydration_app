import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "./types";

type Props = StackScreenProps<RootStackParamList, "Login">;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
    const handleLogin = () => {
        navigation.replace("Home");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Zaloguj się</Text>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Zaloguj przez Google</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#EAF6FF" },
    title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
    button: { backgroundColor: "#4A90E2", padding: 15, borderRadius: 10 },
    buttonText: { color: "white", fontSize: 18 },
});

export default LoginScreen;
