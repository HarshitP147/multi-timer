import { useState, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";

import Button from "../components/Button";

import formatTime from "../util/format";

type actionType = "Start" | "Stop" | "Lap" | "Reset";

export default function Stopwatch() {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const intervalRef = useRef<NodeJS.Timer>();

    function setTimer(action: actionType) {
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
                break;
        }
    }

    return (
        <View style={styles.pageContainer}>
            <View style={styles.timerContainer}>
                <Text style={styles.timer}>
                    {formatTime(time)}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                {running ?
                    <View style={styles.actionButtonContainer}>
                        <Button buttonStyles={styles.stopButton} onPress={(e) => setTimer("Stop")} >Stop</Button>
                        <Button buttonStyles={styles.lapButton} onPress={(e) => setTimer("Lap")} >Lap</Button>

                    </View>
                    :
                    (time === 0) ?
                        <Button buttonStyles={styles.startButton} onPress={(e) => setTimer("Start")}>Start</Button>
                        :
                        <View style={styles.actionButtonContainer}>
                            <Button buttonStyles={styles.resumeButton} onPress={(e) => setTimer("Start")} >Resume</Button>
                            <Button buttonStyles={styles.resetButton} onPress={(e) => setTimer("Reset")} >Reset</Button>
                        </View>
                }
            </View>
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
        fontSize: 45
    },
    buttonContainer: {
        marginTop: 20,
    },
    actionButtonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly"
    },
    startButton: {
        backgroundColor: "black",
        color: "white",
    },
    stopButton: {
        backgroundColor: "red",
        width: "40%",
    },
    resumeButton: {
        backgroundColor: "blue",
        width: "40%"
    },
    lapButton: {
        backgroundColor: "green",
        width: "40%",
    },
    resetButton: {
        backgroundColor: "orange",
        width: "40%"
    }
})