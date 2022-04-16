import React, { useEffect, useState } from "react";
const IsMobile = () => {
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
	return windowWidth <= 768;
};

export { IsMobile as isMobile };
