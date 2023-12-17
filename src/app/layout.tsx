/* eslint-disable jsx-a11y/label-has-associated-control */
import './globals.css';

import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';

import { MobileNavMenu } from '@/components';
import Providers from '@/utils/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Assistente de redação',
	description: 'Tire dúvidas sobre criação de redação e português',
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
};

// export const viewport: Viewport = {
// 	colorScheme: 'light',
// 	themeColor: '#ffffff',
// 	width: 'device-width',
// 	initialScale: 1,
// };

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-br" data-theme="light">
			<body className={inter.className}>
				<Providers>
					<div className="drawer">
						<input
							id="drawer-nav-menu"
							type="checkbox"
							className="drawer-toggle"
						/>
						<div className="drawer-content">{children}</div>
						<div className="drawer-side">
							<label htmlFor="drawer-nav-menu" className="drawer-overlay" />

							<MobileNavMenu />
						</div>
					</div>
				</Providers>
			</body>
		</html>
	);
}
