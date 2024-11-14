import type { JSX } from "solid-js";

export const AnimateRotateInUpRight = ({
	children,
}: { children: JSX.Element }) => {
	return (
		<div class="animate__animated animate__rotateInUpRight">{children}</div>
	);
};
