import type { JSX } from "solid-js";

export const AnimateBackOutDown = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__backOutDown">{children}</div>;
};
