import { Dimensions, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

import Time from "./src/screens/Time";
import Stopwatch from "./src/screens/Stopwatch";

const Tab = createMaterialTopTabNavigator();

export default function App() {
    return (
        <>
            <StatusBar />
            {/* <NavigationContainer>
                <Tab.Navigator backBehavior="history" >
                    <Tab.Screen name="Time" component={Time} />
                    <Tab.Screen name="Stopwatch" component={Stopwatch} />
                </Tab.Navigator>
            </NavigationContainer> */}
            <Stopwatch />
        </>
    );
}