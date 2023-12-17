/* eslint-disable jsx-a11y/label-has-associated-control */
import { RxHamburgerMenu } from 'react-icons/rx';

export const Header = () => {
	return (
		<header className="flex w-full items-center justify-center bg-primary">
			<div className="flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-8 md:py-6">
				<h1 className="text-2xl font-bold text-primary-content md:text-4xl">
					Site Title
				</h1>

				<label
					className="btn btn-ghost rounded-xl text-white md:hidden"
					title="Abrir menu"
					aria-label="Abrir menu"
					htmlFor="drawer-nav-menu"
				>
					<RxHamburgerMenu className="text-3xl" />
				</label>

				<div className="hidden items-center gap-4 text-primary-content md:flex">
					<button type="button" className="btn btn-ghost  rounded-xl">
						Entrar
					</button>
					<button type="button" className="btn btn-ghost rounded-xl">
						Criar conta
					</button>
				</div>
			</div>
		</header>
	);
};
