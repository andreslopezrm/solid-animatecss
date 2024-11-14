import type { JSX } from "solid-js";

export const AnimateSlideInDown = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__slideInDown">{children}</div>;
};
