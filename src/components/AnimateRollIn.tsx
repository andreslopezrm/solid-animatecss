import type { JSX } from "solid-js";

export const AnimateRollIn = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__rollIn">{children}</div>;
};
