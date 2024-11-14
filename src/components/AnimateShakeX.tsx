import type { JSX } from "solid-js";

export const AnimateShakeX = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__shakeX">{children}</div>;
};
