import type { JSX } from "solid-js";

export const AnimateBackInDown = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__backInDown">{children}</div>;
};
