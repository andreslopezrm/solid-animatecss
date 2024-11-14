import type { JSX } from "solid-js";

export const AnimateFadeIn = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__fadeIn">{children}</div>;
};
