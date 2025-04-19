import "react";

declare module "react" {
	interface CSSProperties {
		[rule: `--${string}`]: string | number | boolean | undefined;
	}
}
