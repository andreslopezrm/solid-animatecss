import type { JSX } from "solid-js";

export const AnimateBounceInRight = ({
	children,
}: { children: JSX.Element }) => {
	return <div class="animate__animated animate__bounceInRight">{children}</div>;
};
