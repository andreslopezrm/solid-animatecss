import type { JSX } from "solid-js";

export const AnimateBounceOut = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__bounceOut">{children}</div>;
};
