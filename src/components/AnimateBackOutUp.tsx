import type { JSX } from "solid-js";

export const AnimateBackOutUp = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__backOutUp">{children}</div>;
};
