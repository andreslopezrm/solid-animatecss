import type { JSX } from "solid-js";

export const AnimateZoomOut = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__zoomOut">{children}</div>;
};