import { View, Text, FlatList, StyleSheet } from "react-native";

import LapTime from "./LapTime";

export default function LappedTime({ laps, deleteLapTime }: { laps: number[], deleteLapTime: (sno: number) => void }) {

    if (laps.length) {
        return (
            <View style={styles.lapListContainer}>
                <FlatList data={laps} renderItem={(item) => {
                    return <LapTime index={item.index} time={item.item} />
                }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    lapListContainer: {
        flex: 1,
        marginHorizontal: 4,
        marginTop: 25,
        marginBottom: 20
    }
})