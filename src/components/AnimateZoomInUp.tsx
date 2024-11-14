import type { JSX } from "solid-js";

export const AnimateZoomInUp = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__zoomInUp">{children}</div>;
};
