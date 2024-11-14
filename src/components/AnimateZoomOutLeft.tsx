import type { JSX } from "solid-js";

export const AnimateZoomOutLeft = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__zoomOutLeft">{children}</div>;
};
