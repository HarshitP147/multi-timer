const formatNumber = (number: number, digits: number) => {
    return number.toString().padStart(digits, '0');
};

const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;

    if (hours === 0) {
        return `${formatNumber(minutes, 2)}:${formatNumber(seconds, 2)}.${formatNumber(milliseconds, 3)}`
    }
    return `${formatNumber(hours, 2)}:${formatNumber(minutes, 2)}:${formatNumber(seconds, 2)}.${formatNumber(milliseconds, 3)}`;
};
export default formatTime;