import type { JSX } from "solid-js";

export const AnimateRotateOutDownLeft = ({
	children,
}: { children: JSX.Element }) => {
	return (
		<div class="animate__animated animate__rotateOutDownLeft">{children}</div>
	);
};
