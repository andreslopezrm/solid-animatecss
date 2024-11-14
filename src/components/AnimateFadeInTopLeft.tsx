import type { JSX } from "solid-js";

export const AnimateFadeInTopLeft = ({
	children,
}: { children: JSX.Element }) => {
	return <div class="animate__animated animate__fadeInTopLeft">{children}</div>;
};
