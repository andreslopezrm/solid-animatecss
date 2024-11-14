import type { JSX } from "solid-js";

export const AnimateBounceInUp = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__bounceInUp">{children}</div>;
};
