import { View, Pressable, Text, StyleSheet, GestureResponderEvent } from "react-native";

interface propTypes {
    children: string,
    buttonStyles?: object | object[],
    textColor?: string,
    onPress: (event: GestureResponderEvent) => void
}

export default function Button({ textColor = "white", ...props }: propTypes) {
    return (
        <View style={[props.buttonStyles, styles.container]}>
            <Pressable android_ripple={{ borderless: true }} onPress={props.onPress}>
                <Text style={[styles.text, { color: textColor }]}>{props.children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 9,
        elevation: 20,
        marginHorizontal: 10,
        minWidth: "25%"
    },
    text: {
        textAlign: "center",
        paddingVertical: 9,
        paddingHorizontal: 12,
        fontSize: 22,
    }
})