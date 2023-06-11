import { useState, useEffect } from "react";

import checkRange from "../util/checkRange";

function getFormattedTime(date: Date, military: boolean) {
    const hours = military ? date.getHours() - 12 : date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hourString = checkRange(hours, 0, 9) ? `0${hours}` : `${hours}`;
    const minString = checkRange(minutes, 0, 9) ? `0${minutes}` : `${minutes}`;
    const secString = checkRange(seconds, 0, 9) ? `0${seconds}` : `${seconds}`;

    return `${hourString}:${minString}:${secString}`
}

export default function useTime(military: boolean) {
    const [time, setTime] = useState(getFormattedTime(new Date(), military));

    useEffect(() => {
        setInterval(() => {
            setTime(getFormattedTime(new Date(), military));
        }, 1000)
    }, [time, military]);

    return time;
}