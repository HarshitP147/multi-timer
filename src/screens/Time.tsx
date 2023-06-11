import { View, Text, StyleSheet } from "react-native";

import useTime from "../hook/useTime";

export default function Time() {
    const time = useTime(false);

    return (
        <View style={styles.timeContainer}>
            <Text style={styles.time}>{time}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    timeContainer: {
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 8,
        marginHorizontal: 20
    },
    time: {
        fontSize: 42,
        textAlign: "center"
    }
});
