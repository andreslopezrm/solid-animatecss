import type { JSX } from "solid-js";

export const AnimateFlipInX = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__flipInX">{children}</div>;
};
