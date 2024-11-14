import type { JSX } from "solid-js";

export const AnimateBackOutRight = ({
	children,
}: { children: JSX.Element }) => {
	return <div class="animate__animated animate__backOutRight">{children}</div>;
};
