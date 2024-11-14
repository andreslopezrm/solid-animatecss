import type { JSX } from "solid-js";

export const AnimateZoomInDown = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__zoomInDown">{children}</div>;
};
