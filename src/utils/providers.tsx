'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import { ToastContainer } from 'react-toastify';

import ErrorBoundary from '@/components/ErrorBoundary';

function Providers({ children }: React.PropsWithChildren) {
	const [client] = React.useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					staleTime: 100 * 60 * 60 * 4, // 4 hours
					refetchOnWindowFocus: false,
					refetchOnReconnect: false,
					refetchOnMount: false,
				},
			},
		})
	);

	return (
		<QueryClientProvider client={client}>
			<ErrorBoundary>{children}</ErrorBoundary>
			<ReactQueryDevtools initialIsOpen={false} />
			<ToastContainer />
		</QueryClientProvider>
	);
}

export default Providers;
