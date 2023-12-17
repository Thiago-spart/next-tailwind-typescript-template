'use client';

import clsx from 'clsx';
import React, { ForwardRefRenderFunction } from 'react';

import { InputProps } from './types';

export const InputBase: ForwardRefRenderFunction<
	HTMLInputElement,
	InputProps
> = (
	{
		id,
		errorMessage,
		labelMessage,
		isFullWidth = false,
		className,
		type,
		hideLabel = false,
		icon,
		...rest
	},
	ref
) => {
	const [showPassword, setShowPassword] = React.useState(false);
	const isCheckbox = type === 'checkbox';

	const classNameSchema = clsx(
		isCheckbox
			? 'checkbox checkbox-primary rounded-full'
			: 'flex px-4 py-2 rounded-xl input input-bordered',
		className,
		icon ? 'rounded-r-xl' : 'rounded-xl',
		type === 'password' && 'pr-10',
		errorMessage && 'input-error',
		isFullWidth && 'w-full'
	);

	return (
		<div
			className={`relative flex items-start gap-2 ${
				isCheckbox
					? 'flex-row-reverse items-center justify-end'
					: 'flex-col justify-start'
			} ${isFullWidth && 'w-full'}`}
		>
			{labelMessage && (
				<label
					className={clsx('text-lg', hideLabel ? 'sr-only' : 'w-full')}
					htmlFor={id}
				>
					{labelMessage}
				</label>
			)}

			<div className="flex w-full items-center justify-center">
				{icon && (
					<span className="flex h-full items-center justify-center rounded-s-xl border border-r-0 border-gray-300 px-[9px] py-3">
						{icon}
					</span>
				)}
				<input
					id={id}
					ref={ref}
					type={showPassword ? 'text' : type}
					className={`${classNameSchema}`}
					{...rest}
				/>
			</div>

			{errorMessage ? (
				<span className=" font-light text-error">
					{String(errorMessage?.message)}
				</span>
			) : null}
		</div>
	);
};

export const Input = React.forwardRef(InputBase);
