import type { JSX } from "solid-js";

export const AnimateBounceInDown = ({
	children,
}: { children: JSX.Element }) => {
	return <div class="animate__animated animate__bounceInDown">{children}</div>;
};
