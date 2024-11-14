import type { JSX } from "solid-js";

export const AnimateFadeInLeft = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__fadeInLeft">{children}</div>;
};
