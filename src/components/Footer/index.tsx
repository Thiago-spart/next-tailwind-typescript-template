'use client';

export const Footer = () => {
	return (
		<footer className="mt-auto flex w-full items-center justify-center py-6 text-center">
			<span>
				&copy; {new Date().getFullYear()} Site title. Todos os direitos
				reservados.
			</span>
		</footer>
	);
};
