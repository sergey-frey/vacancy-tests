import { cn } from "@/shared/utils";
import { ImgHTMLAttributes } from "react";

import "../styles/avatar.css";

type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
	size: "s";
};

export const Avatar = ({ size, ...props }: AvatarProps) => {
	return <img {...props} className={cn("avatar", `avatar_${size}`)} />;
};
