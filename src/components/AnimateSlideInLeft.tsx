import type { JSX } from "solid-js";

export const AnimateSlideInLeft = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__slideInLeft">{children}</div>;
};
