import { useState, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";

import ButtonContainer from "../components/ButtonContainer";
import LappedTime from "../components/LappedTime";

import formatTime from "../util/format";

export default function Stopwatch() {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const [laps, setLap] = useState<number[]>([]);

    const intervalRef = useRef<NodeJS.Timer>();

    function setTimer(action: "Start" | "Stop" | "Lap" | "Reset") {
        switch (action) {
            case "Start":
                setRunning(true);
                const startTime = Date.now() - time;
                intervalRef.current = setInterval(() => {
                    const elapsedTime = Date.now() - startTime;
                    setTime(elapsedTime);
                }, 10);
                break;

            case "Stop":
                setRunning(false);
                clearInterval(intervalRef.current);
                break;

            case "Reset":
                setRunning(false);
                clearInterval(intervalRef.current);
                setTime(0);
                setLap([]);
                break;

            case "Lap":
                setLap(value => [...value, time])
                break;
        }
    }

    function deleteLapTime(sno: number) {
        setLap(value => value.filter(ele => laps.indexOf(ele) !== sno - 1));
    }

    return (
        <View style={styles.pageContainer}>
            <View style={styles.timerContainer}>
                <Text style={styles.timer}>
                    {formatTime(time)}
                </Text>
            </View>

            <ButtonContainer running={running} setTimer={setTimer} time={time} />

            <LappedTime laps={laps} deleteLapTime={deleteLapTime} />
        </View>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },
    timerContainer: {
        height: '23%',
        marginTop: 70,
    },
    timer: {
        textAlign: "center",
        fontSize: 50
    }
})