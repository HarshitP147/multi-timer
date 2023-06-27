import React, { useState, useRef } from 'react';

const formatTime = (time) => {
	const hours = Math.floor(time / 3600000);
	const minutes = Math.floor((time % 3600000) / 60000);
	const seconds = Math.floor((time % 60000) / 1000);
	const milliseconds = time % 1000;
	return `${formatNumber(hours, 2)}:${formatNumber(minutes, 2)}:${formatNumber(seconds, 2)}:${formatNumber(milliseconds, 3)}`;
};

const formatNumber = (number, digits) => {
	return number.toString().padStart(digits, '0');
};


function Stopwatch() {
	const [time, setTime] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const intervalRef = useRef();

	const startTimer = () => {
		setIsRunning(true);
		const startTime = Date.now() - time;
		intervalRef.current = setInterval(() => {
			const elapsedTime = Date.now() - startTime;
			setTime(elapsedTime);
		}, 10);
	};

	const stopTimer = () => {
		setIsRunning(false);
		clearInterval(intervalRef.current);
	};

	const resetTimer = () => {
		setIsRunning(false);
		clearInterval(intervalRef.current);
		setTime(0);
	};

	return (
		<div>
			<h1>{formatTime(time)}</h1>
			{!isRunning && <button onClick={startTimer}>Start</button>}
			{isRunning && <button onClick={stopTimer}>Stop</button>}
			<button onClick={resetTimer}>Reset</button>
		</div>
	);
}

export default Stopwatch;
