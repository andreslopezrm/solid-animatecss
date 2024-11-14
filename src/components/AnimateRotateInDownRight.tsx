import type { JSX } from "solid-js";

export const AnimateRotateInDownRight = ({
	children,
}: { children: JSX.Element }) => {
	return (
		<div class="animate__animated animate__rotateInDownRight">{children}</div>
	);
};
