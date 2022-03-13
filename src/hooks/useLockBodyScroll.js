import { useLayoutEffect } from "react";

const useLockBodyScroll = (locked) => {
	useLayoutEffect(() => {
		const overflowY = locked ? "hidden" : "scroll";

		document.body.style.overflowY = overflowY;
	}, [locked]);
};

export default useLockBodyScroll;
