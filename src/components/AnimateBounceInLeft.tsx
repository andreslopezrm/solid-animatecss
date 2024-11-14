import type { JSX } from "solid-js";

export const AnimateBounceInLeft = ({
	children,
}: { children: JSX.Element }) => {
	return <div class="animate__animated animate__bounceInLeft">{children}</div>;
};
