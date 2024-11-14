import type { JSX } from "solid-js";

export const AnimateLightSpeedInLeft = ({
	children,
}: { children: JSX.Element }) => {
	return (
		<div class="animate__animated animate__lightSpeedInLeft">{children}</div>
	);
};
