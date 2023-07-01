import { View, StyleSheet } from "react-native"

import Button from "./Button"

interface propTypes {
    running: boolean,
    time: number,
    setTimer: (action: "Start" | "Stop" | "Lap" | "Reset") => void
}

export default function ButtonContainer(props: propTypes) {
    const { running, setTimer, time } = props;

    return (
        <View>
            {running ?
                <View style={styles.actionButtonContainer}>
                    <Button buttonStyles={styles.lapButton} onPress={(e) => setTimer("Lap")} >Lap</Button>
                    <Button buttonStyles={styles.stopButton} onPress={(e) => setTimer("Stop")} >Stop</Button>

                </View>
                :
                (time === 0) ?
                    <Button buttonStyles={styles.startButton} onPress={(e) => setTimer("Start")}>Start</Button>
                    :
                    <View style={styles.actionButtonContainer}>
                        <Button buttonStyles={styles.resetButton} onPress={(e) => setTimer("Reset")} >Reset</Button>
                        <Button buttonStyles={styles.resumeButton} onPress={(e) => setTimer("Start")} >Resume</Button>
                    </View>
            }
        </View>
    )
}


const styles = StyleSheet.create({
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
        backgroundColor: "#991b1b",
        width: "40%",
    },
    resumeButton: {
        backgroundColor: "black",
        width: "40%"
    },
    lapButton: {
        backgroundColor: "#15803d",
        width: "40%",
    },
    resetButton: {
        backgroundColor: "#1e40af",
        width: "40%"
    }
});