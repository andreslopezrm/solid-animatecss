import type { JSX } from "solid-js";

export const AnimateFadeOutLeftBig = ({
	children,
}: { children: JSX.Element }) => {
	return (
		<div class="animate__animated animate__fadeOutLeftBig">{children}</div>
	);
};
