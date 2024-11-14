import type { JSX } from "solid-js";

export const AnimateZoomOutDown = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__zoomOutDown">{children}</div>;
};
