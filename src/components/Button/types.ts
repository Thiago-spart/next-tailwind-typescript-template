import {
	ComponentBaseProps,
	ComponentColorProps,
	ComponentShapeProps,
	ComponentSizeProps,
} from "@/types/types";

export type ButtonProps = Omit<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	"color"
> &
	ComponentBaseProps & {
		href?: string;
		shape?: ComponentShapeProps;
		size?: ComponentSizeProps;
		variant?: "outline" | "link";
		color?: ComponentColorProps;
		wide?: boolean;
		fullWidth?: boolean;
		responsive?: boolean;
		animation?: boolean;
		loading?: boolean;
		active?: boolean;
		startIcon?: React.ReactNode;
		endIcon?: React.ReactNode;
	};
