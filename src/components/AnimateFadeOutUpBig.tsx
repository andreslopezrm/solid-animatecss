import type { JSX } from "solid-js";

export const AnimateFadeOutUpBig = ({
	children,
}: { children: JSX.Element }) => {
	return <div class="animate__animated animate__fadeOutUpBig">{children}</div>;
};
