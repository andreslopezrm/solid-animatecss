import type { JSX } from "solid-js";

export const AnimateTada = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__tada">{children}</div>;
};
