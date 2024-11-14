import type { JSX } from "solid-js";

export const AnimateSwing = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__swing">{children}</div>;
};
