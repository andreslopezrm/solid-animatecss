import type { JSX } from "solid-js";

export const AnimateFlipOutY = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__flipOutY">{children}</div>;
};
