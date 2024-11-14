import type { JSX } from "solid-js";

export const AnimateBounceIn = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__bounceIn">{children}</div>;
};
