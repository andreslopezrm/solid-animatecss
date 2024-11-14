import type { JSX } from "solid-js";

export const AnimateRotateOutUpLeft = ({
	children,
}: { children: JSX.Element }) => {
	return (
		<div class="animate__animated animate__rotateOutUpLeft">{children}</div>
	);
};