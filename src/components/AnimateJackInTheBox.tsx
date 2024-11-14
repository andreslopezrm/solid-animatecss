import type { JSX } from "solid-js";

export const AnimateJackInTheBox = ({
	children,
}: { children: JSX.Element }) => {
	return <div class="animate__animated animate__jackInTheBox">{children}</div>;
};
