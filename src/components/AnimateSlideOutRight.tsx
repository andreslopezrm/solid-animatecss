import type { JSX } from "solid-js";

export const AnimateSlideOutRight = ({
	children,
}: { children: JSX.Element }) => {
	return <div class="animate__animated animate__slideOutRight">{children}</div>;
};
