import type { JSX } from "solid-js";

export const AnimateBackInLeft = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__backInLeft">{children}</div>;
};
