import type { JSX } from "solid-js";

export const AnimateaShakeY = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__shakeY">{children}</div>;
};
