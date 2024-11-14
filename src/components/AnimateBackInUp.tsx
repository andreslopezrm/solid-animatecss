import type { JSX } from "solid-js";

export const AnimateBackInUp = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__backInUp">{children}</div>;
};
