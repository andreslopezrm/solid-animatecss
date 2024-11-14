import type { JSX } from "solid-js";

export const AnimateSlideOutDown = ({
	children,
}: { children: JSX.Element }) => {
	return <div class="animate__animated animate__slideOutDown">{children}</div>;
};
