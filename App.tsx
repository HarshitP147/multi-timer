import { StatusBar, View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Fontisto } from "@expo/vector-icons"

import Time from "./src/screens/Time";
import Stopwatch from "./src/screens/Stopwatch";
import Settings from "./src/screens/Settings";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <>
            <StatusBar />
            <NavigationContainer>
                <Tab.Navigator screenOptions={{
                    tabBarStyle: {
                        height: 55,
                    },
                    title: ""
                }}
                    backBehavior="firstRoute"
                >
                    <Tab.Screen name="Time" component={Time} options={{
                        headerShown: false,
                        tabBarItemStyle: {
                        },
                        tabBarIcon: ({ focused, color, size }) => {
                            return <Ionicons name="time-sharp" color={color} size={focused ? size * 1.2 : size} />
                        }
                    }} />
                    <Tab.Screen name="Stopwatch" component={Stopwatch} options={{
                        headerShown: false,
                        tabBarIcon: ({ focused, color, size }) => {
                            return <Fontisto name="stopwatch" color={color} size={focused ? size * 1.2 : size} />
                        }
                    }} />
                    <Tab.Screen name="Settings" component={Settings} options={{
                        header: (props) => {
                            return (
                                <View style={settingHeaderStyle.titleContainer}>
                                    <Text style={settingHeaderStyle.title}>Working</Text>
                                </View>
                            )
                        },
                        tabBarIcon: ({ focused, color, size }) => {
                            return <Ionicons name="settings-sharp" color={color} size={focused ? size * 1.2 : size} />
                        }
                    }} />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    );
}

const settingHeaderStyle = StyleSheet.create({
    titleContainer: {
        // elevation: 20,
        marginTop: 0,
        // height: 80,
    },
    title: {
        fontSize: 20,
    }
})