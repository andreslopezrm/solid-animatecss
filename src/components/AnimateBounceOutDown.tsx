import type { JSX } from "solid-js";

export const AnimateBounceOutDown = ({
	children,
}: { children: JSX.Element }) => {
	return <div class="animate__animated animate__bounceOutDown">{children}</div>;
};
