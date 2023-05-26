'use client';

import Button from "../Button";

import { MdArrowUpward } from "react-icons/md"; 

export const Footer = () => {
	const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
	
	return (
		<footer className="flex items-center justify-between w-full">
			<div className="flex flex-col justify-between w-full lg:flex-row text-xs lg:text-sm">
					<span>Company name - Todos os direitos reservados</span>

					<span>Company name &copy; {new Date().getFullYear()}</span>
				</div>
				
				<Button
					title="Ir para início da página" 
					type="button" 
					aria-label="Ir para início da página"
					onClick={scrollToTop}
					className="ml-9 btn-sm lg:btn-md"
				>
					<span className="sr-only">Ir para início da página</span>
					
					<MdArrowUpward className="w-6 h-6" />
				</Button>
		</footer>
	)
}