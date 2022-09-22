import { useEffect, useState } from "react";

const useIsMobile = (recievedWidth) => {
	const minimumWidth = recievedWidth ? recievedWidth : 768;
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const addWindowResize = () => {
		window.addEventListener("resize", () => {
			setWindowWidth(window.innerWidth);
		});
	};
	const removeWindowResize = () => {
		window.removeEventListener("resize", () => {
			setWindowWidth(window.innerWidth);
		});
	};
	useEffect(() => {
		addWindowResize();
		return () => removeWindowResize();
	});
	return windowWidth <= minimumWidth;
};

export default useIsMobile;
