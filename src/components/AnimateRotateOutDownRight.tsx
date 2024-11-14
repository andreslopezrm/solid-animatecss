import type { JSX } from "solid-js";

export const AnimateRotateOutDownRight = ({
	children,
}: { children: JSX.Element }) => {
	return (
		<div class="animate__animated animate__rotateOutDownRight">{children}</div>
	);
};
