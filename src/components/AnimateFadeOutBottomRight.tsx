import type { JSX } from "solid-js";

export const AnimateFadeOutBottomRight = ({
	children,
}: { children: JSX.Element }) => {
	return (
		<div class="animate__animated animate__fadeOutBottomRight">{children}</div>
	);
};
