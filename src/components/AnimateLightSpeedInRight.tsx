import type { JSX } from "solid-js";

export const AnimateLightSpeedInRight = ({
	children,
}: { children: JSX.Element }) => {
	return (
		<div class="animate__animated animate__lightSpeedInRight">{children}</div>
	);
};
