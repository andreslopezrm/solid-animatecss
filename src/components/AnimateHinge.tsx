import type { JSX } from "solid-js";

export const AnimateHinge = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__hinge">{children}</div>;
};
