import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "./types";

type Props = StackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const [waterIntake, setWaterIntake] = useState(0);
    const totalGoal = 2500; // cel w ml (2.5L)
    const progress = (waterIntake / totalGoal) * 100;

    const addWater = () => {
        setWaterIntake(prev => Math.min(prev + 250, totalGoal));
    };

    const handleLogout = () => {
        navigation.replace("Login");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Waterio</Text>
            <Ionicons name="water-outline" size={80} color="#4A90E2" style={styles.icon} />
            <Text style={styles.progressText}>{(waterIntake / 1000).toFixed(2)}L / 2.5L</Text>

            <View style={styles.progressBarContainer}>
                <View style={[styles.progressBar, { width: `${progress}%` }]} />
            </View>

            <TouchableOpacity style={styles.button} onPress={addWater}>
                <Text style={styles.buttonText}>Dodaj 250ml 💧</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.buttonText}>Wyloguj</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#EAF6FF",
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#4A90E2",
    },
    icon: {
        marginVertical: 20,
    },
    progressText: {
        fontSize: 22,
        fontWeight: "600",
        marginBottom: 10,
    },
    progressBarContainer: {
        width: "80%",
        height: 20,
        backgroundColor: "#D0E8FF",
        borderRadius: 10,
        overflow: "hidden",
    },
    progressBar: {
        height: "100%",
        backgroundColor: "#4A90E2",
    },
    button: {
        marginTop: 20,
        paddingVertical: 12,
        paddingHorizontal: 25,
        backgroundColor: "#4A90E2",
        borderRadius: 10,
    },
    logoutButton: {
        marginTop: 10,
        paddingVertical: 12,
        paddingHorizontal: 25,
        backgroundColor: "#D9534F", // Kolor czerwony dla przycisku wylogowania
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
    },
});

export default HomeScreen;