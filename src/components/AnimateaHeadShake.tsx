import type { JSX } from "solid-js";

export const AnimateHeadShake = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__headShake">{children}</div>;
};
