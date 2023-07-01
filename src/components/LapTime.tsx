import { View, Text, StyleSheet } from "react-native";

import formatTime from "../util/format";

export default function LapTime({ time }: { time: number, index: number }) {
    return (
        <View style={styles.timeBox}>
            <Text>{formatTime(time)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    timeBox: {
        borderRadius: 12,
        elevation: 5,
        shadowColor: "#7b7979",
        paddingVertical: 25,
        marginVertical: 13,
    },
})