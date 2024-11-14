import type { JSX } from "solid-js";

export const AnimateHeartBeat = ({ children }: { children: JSX.Element }) => {
	return <div class="animate__animated animate__heartBeat">{children}</div>;
};
