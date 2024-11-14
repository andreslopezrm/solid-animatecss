import type { JSX } from "solid-js";

export const AnimateZoomInLeft = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__zoomInLeft">{children}</div>;
};
