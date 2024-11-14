import type { JSX } from "solid-js";

export const AnimateSlideOutLeft = ({
	children,
}: { children: JSX.Element }) => {
	return <div class="animate__animated animate__slideOutLeft">{children}</div>;
};
