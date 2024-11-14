import type { JSX } from "solid-js";

export const AnimateFlipOutX = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__flipOutX">{children}</div>;
};
