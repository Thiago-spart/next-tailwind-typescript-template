'use client';

import { useRouter } from 'next/navigation';

export default function Custom404() {
	const router = useRouter();

	const handleGoBack = () => {
		router.back();
	};

	return (
		<section className="flex min-h-[100dvh] items-center justify-center bg-white">
			<div className="mx-auto max-w-7xl px-4 py-8 lg:px-6 lg:py-16">
				<div className="mx-auto max-w-screen-sm text-center">
					<h1 className="mb-4 text-7xl font-extrabold tracking-tight text-primary lg:text-9xl">
						404
					</h1>
					<p className="mb-4 text-3xl font-bold tracking-tight text-gray-800 md:text-4xl">
						Página não encontrada
					</p>
					<p className="mb-4 text-lg font-light text-gray-500">
						Desculpa, página não encontrada, por favor tente novamente ou volte.
					</p>

					<button
						type="button"
						className="btn btn-primary rounded-xl"
						onClick={handleGoBack}
					>
						Voltar
					</button>
				</div>
			</div>
		</section>
	);
}
