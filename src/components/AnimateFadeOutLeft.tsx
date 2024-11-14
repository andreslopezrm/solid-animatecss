import type { JSX } from "solid-js";

export const AnimateFadeOutLeft = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__fadeOutLeft">{children}</div>;
};
