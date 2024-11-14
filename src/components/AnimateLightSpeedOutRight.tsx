import type { JSX } from "solid-js";

export const AnimateLightSpeedOutRight = ({
	children,
}: { children: JSX.Element }) => {
	return (
		<div class="animate__animated animate__lightSpeedOutRight">{children}</div>
	);
};
