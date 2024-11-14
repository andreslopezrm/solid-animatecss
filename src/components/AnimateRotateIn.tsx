import type { JSX } from "solid-js";

export const AnimateRotateIn = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__rotateIn">{children}</div>;
};
