'use client';

import React, { ReactNode } from 'react';

type ErrorBoundaryProps = {
	children: ReactNode;
};

type ErrorBoundaryState = {
	hasError: boolean;
};

class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);

		// Define a state variable to track whether there is an error or not
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		// Update state so the next render will show the fallback UI
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		// You can use your own error logging service here
		console.log({ error, errorInfo });
	}

	render() {
		// Check if an error is thrown
		const { hasError } = this.state;

		if (hasError) {
			// You can render any custom fallback UI
			return (
				<div className="flex h-screen flex-col items-center justify-center gap-4">
					<h2 className="text-xl sm:text-3xl">Oops, Houve um erro!</h2>
					<button
						type="button"
						className="btn btn-primary"
						onClick={() => this.setState({ hasError: false })}
					>
						Tentar novamente?
					</button>
				</div>
			);
		}

		// Return children components in case of no error
		const { children } = this.props;
		return children;
	}
}

export default ErrorBoundary;
