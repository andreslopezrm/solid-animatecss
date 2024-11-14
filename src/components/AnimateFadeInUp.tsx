import type { JSX } from "solid-js";

export const AnimateFadeInUp = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__fadeInUp">{children}</div>;
};
