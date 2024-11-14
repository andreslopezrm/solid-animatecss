import type { JSX } from "solid-js";

export const AnimateFadeInRight = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__fadeInRight">{children}</div>;
};
