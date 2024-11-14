import type { JSX } from "solid-js";

export const AnimateFadeOutRight = ({
	children,
}: { children: JSX.Element }) => {
	return <div class="animate__animated animate__fadeOutRight">{children}</div>;
};
