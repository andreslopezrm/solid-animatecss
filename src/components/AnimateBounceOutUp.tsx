import type { JSX } from "solid-js";

export const AnimateBounceOutUp = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__bounceOutUp">{children}</div>;
};
