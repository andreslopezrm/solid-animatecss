import type { JSX } from "solid-js";

export const AnimateFadeInTopRight = ({
	children,
}: { children: JSX.Element }) => {
	return (
		<div class="animate__animated animate__fadeInTopRight">{children}</div>
	);
};
