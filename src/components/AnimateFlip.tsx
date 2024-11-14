import type { JSX } from "solid-js";

export const AnimateFlip = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__flip">{children}</div>;
};
