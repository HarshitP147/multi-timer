export default function checkRange(variable: number, start: number, stop: number) {
    if (variable >= start && variable <= stop) {
        return true;
    } else {
        return false;
    }
}