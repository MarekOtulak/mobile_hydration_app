import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import { RootStackParamList } from "./types";

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} options={{ title: "Logowanie" }} />
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Twój licznik wody" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
