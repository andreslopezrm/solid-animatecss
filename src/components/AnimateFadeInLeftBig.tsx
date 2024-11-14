import type { JSX } from "solid-js";

export const AnimateFadeInLeftBig = ({
	children,
}: { children: JSX.Element }) => {
	return <div class="animate__animated animate__fadeInLeftBig">{children}</div>;
};
