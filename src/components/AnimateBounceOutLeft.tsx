import type { JSX } from "solid-js";

export const AnimateBounceOutLeft = ({
	children,
}: { children: JSX.Element }) => {
	return <div class="animate__animated animate__bounceOutLeft">{children}</div>;
};
