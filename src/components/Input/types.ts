/* eslint-disable @typescript-eslint/no-explicit-any */
import type { InputHTMLAttributes } from 'react';
import React from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	errorMessage?:
		| FieldError
		| Partial<{
				type: string | number;
				message: string;
		  }>
		| Merge<FieldError, FieldErrorsImpl<any>>;
	labelMessage?: string;
	isFullWidth?: boolean;
	hideLabel?: boolean;
	icon?: React.ReactNode;
}
