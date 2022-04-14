import React, { useEffect, useState } from "react";
const IsMobile = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const windowResize = () => {
		window.onresize = () => {
			setWindowWidth(window.innerWidth);
		};
	};
	useEffect(() => {
		windowResize();
		return () => windowResize;
	});
	return windowWidth <= 768;
};

export { IsMobile as isMobile };
