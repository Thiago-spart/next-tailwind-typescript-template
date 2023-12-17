/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import { AiOutlineClose } from 'react-icons/ai';

export const MobileNavMenu = () => {
	return (
		<nav className="menu relative min-h-full w-[90%] bg-gray-200 px-6 py-4 text-base-content xs:w-80 sm:px-8 sm:py-6">
			<label
				htmlFor="drawer-nav-menu"
				className="btn btn-circle absolute right-4 top-4 bg-white"
			>
				<AiOutlineClose className="text-xl" />
			</label>

			<h2 className="mb-4 text-2xl font-bold">Assistente</h2>

			<li>
				<label htmlFor="login-dialog">Entrar</label>
			</li>
			<li>
				<label htmlFor="create-account-dialog">Criar conta</label>
			</li>
			<div className="divider" />
			<li>
				<button
					type="button"
					className="btn btn-ghost btn-sm rounded-xl !bg-transparent"
				>
					Sair
				</button>
			</li>
		</nav>
	);
};
