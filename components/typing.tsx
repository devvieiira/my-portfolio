"use client";
import { useEffect, useState } from "react";

const TypingEffect = () => {
	const [text, setText] = useState("");
	const [index, setIndex] = useState(0);
	const targetText = "<devvieiira />";

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const intervalId = setInterval(() => {
			setText(targetText.substring(0, index + 1));
			setIndex(index + 1);
			if (index >= targetText.length) {
				clearInterval(intervalId);
			}
		}, 300); // adjust the speed of the typing effect here
		return () => clearInterval(intervalId);
	}, [index, targetText]);

	return (
		<span className="font-bold text-2xl text-white">
			{text}
			<span className="cursor" />
		</span>
	);
};

export default TypingEffect;
