import type { JSX } from "solid-js";

export const AnimateBackInRight = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__backInRight">{children}</div>;
};
