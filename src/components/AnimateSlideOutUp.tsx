import type { JSX } from "solid-js";

export const AnimateSlideOutUp = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__slideOutUp">{children}</div>;
};
