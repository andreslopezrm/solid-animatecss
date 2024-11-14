import type { JSX } from "solid-js";

export const AnimateJello = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__jello">{children}</div>;
};
