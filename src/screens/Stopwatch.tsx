import { useState, useReducer, useEffect } from "react";
import { View, Text, StyleSheet, GestureResponderEvent } from "react-native";

import Button from "../components/Button";


export default function Stopwatch() {
    const [milli, setMilli] = useState(0);
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let secInterval: NodeJS.Timer, milliInterval: NodeJS.Timer, minInterval: NodeJS.Timer;
        if (running) {
            
        }

        return () => {
            clearInterval(secInterval);
            clearInterval(milliInterval);
        }
    }, [running, sec, milli])

    function setTimer(e: GestureResponderEvent, action: "Start" | "Stop" | "Lap" | "Reset") {
        switch (action) {
            case "Start":
                setRunning(true);
                break;
            case "Stop":
                setRunning(false);
                break;
            case "Lap":
                console.log("Time lap");
                break;
            case "Reset":
                setRunning(false);
                setMilli(0);
                setSec(0);
                setMin(0);
                break;
        }
    }

    return (
        <View style={styles.pageContainer}>
            <View style={styles.timerContainer}>
                <Text style={styles.timer}>
                    {sec}.{milli}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                {running ?
                    <View style={styles.actionButtonContainer}>
                        <Button buttonStyles={styles.stopButton} onPress={(e) => setTimer(e, "Stop")} >Stop</Button>
                        <Button buttonStyles={styles.lapButton} onPress={(e) => setTimer(e, "Lap")} >Lap</Button>

                    </View>
                    :
                    (milli == 0 && sec == 0 && min == 0) ?
                        <Button buttonStyles={styles.startButton} onPress={(e) => setTimer(e, "Start")}>Start</Button>
                        :
                        <View style={styles.actionButtonContainer}>
                            <Button buttonStyles={styles.resumeButton} onPress={(e) => setTimer(e, "Start")} >Resume</Button>
                            <Button buttonStyles={styles.resetButton} onPress={(e) => setTimer(e, "Reset")} >Reset</Button>
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