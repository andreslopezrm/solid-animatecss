import type { JSX } from "solid-js";

export const AnimateRotateInUpLeft = ({
	children,
}: { children: JSX.Element }) => {
	return (
		<div class="animate__animated animate__rotateInUpLeft">{children}</div>
	);
};
