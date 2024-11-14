import type { JSX } from "solid-js";

export const AnimateFadeInDownBig = ({
	children,
}: { children: JSX.Element }) => {
	return <div class="animate__animated animate__fadeInDownBig">{children}</div>;
};
