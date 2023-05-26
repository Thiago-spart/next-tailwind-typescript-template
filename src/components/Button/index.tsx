'use client';

import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { ButtonProps } from "./types";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      href,
      shape,
      size,
      variant,
      color,
      startIcon,
      endIcon,
      wide,
      fullWidth,
      responsive,
      animation = true,
      loading,
      active,
      disabled,
      dataTheme,
      className,
      style,
      ...props
    },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      "btn",
			"rounded-md",
      className,
      clsx(((startIcon && !loading) || endIcon) && "gap-2", {
        "btn-lg": size === "lg",
        "btn-md": size === "md",
        "btn-sm": size === "sm",
        "btn-xs": size === "xs",
        "btn-circle": shape === "circle",
        "btn-square": shape === "square",
        "btn-outline": variant === "outline",
        "btn-link": variant === "link",
        "btn-primary": color === "primary",
        "btn-secondary": color === "secondary",
        "btn-accent": color === "accent",
        "btn-info": color === "info",
        "btn-success": color === "success",
        "btn-warning": color === "warning",
        "btn-error": color === "error",
        "btn-ghost": color === "ghost",
        "btn-wide": wide,
        "btn-block": fullWidth,
        "btn-xs md:btn-sm lg:btn-md xl:btn-lg": responsive,
        "no-animation": !animation,
        "btn-active": active,
        "btn-disabled": disabled,
        loading: loading,
      })
    );

    if (href) {
      return (
        <a className={classes} style={style} href={href}>
          {startIcon && startIcon}
          {children}
          {endIcon && endIcon}
        </a>
      );
    }
		
		return (
			<button
				{...props}
				ref={ref}
				data-theme={dataTheme}
				className={classes}
				style={style}
				disabled={disabled}
			>
				{startIcon && !loading && startIcon}
				{children}
				{endIcon && endIcon}
			</button>
		);
    
  }
);

Button.displayName = "Button";

export default Button;
