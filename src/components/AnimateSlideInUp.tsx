import type { JSX } from "solid-js";

export const AnimateSlideInUp = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__slideInUp">{children}</div>;
};
