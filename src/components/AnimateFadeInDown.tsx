import type { JSX } from "solid-js";

export const AnimateFadeInDown = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__fadeInDown">{children}</div>;
};
