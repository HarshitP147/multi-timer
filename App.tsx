import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Fontisto } from "@expo/vector-icons"

import Time from "./src/screens/Time";
import Stopwatch from "./src/screens/Stopwatch";

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
                </Tab.Navigator>
            </NavigationContainer>
        </>
    );
}
