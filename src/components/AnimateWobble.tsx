import type { JSX } from "solid-js";

export const AnimateWobble = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__wobble">{children}</div>;
};
