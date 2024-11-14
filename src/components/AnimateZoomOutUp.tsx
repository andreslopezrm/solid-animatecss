import type { JSX } from "solid-js";

export const AnimateZoomOutUp = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__zoomOutUp">{children}</div>;
};
