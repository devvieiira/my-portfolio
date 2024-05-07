"use client";
import jsIcon from "@/public/js-icon.png";
import nodeIcon from "@/public/node-icon.png";
import reactIcon from "@/public/react-icon.png";
import tsIcon from "@/public/ts-icon.png";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
import { Separator } from "./ui/separator";

const InitialPage = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<div className="w-4/5 bg-foregroundsecundary rounded-3xl mt-10 py-3 px-5">
				<div className="space-y-2">
					<div className="flex items-center">
						<h2 className="font-semibold text-sm text-muted-foreground">
							Linguagens que tenho conhecimento
						</h2>
						<Button
							className="hover:bg-transparent"
							size="icon"
							variant="ghost"
							onClick={() => setIsOpen(true)}
						>
							<ChevronRightIcon className="text-primary" size={16} />
						</Button>
					</div>
					<div className="flex items-center justify-between px-4 py-4">
						<div className="w-10 h-10 relative rounded-full">
							<Image src={tsIcon} alt="Icone Typescript" fill />
						</div>
						<div className="w-10 h-10 relative rounded-full">
							<Image src={jsIcon} alt="Icone Javascript" fill />
						</div>
						<div className="w-10 h-10 relative rounded-full">
							<Image src={reactIcon} alt="Icone React" fill />
						</div>
						<div className="w-10 h-10 relative rounded-full">
							<Image src={nodeIcon} alt="Icone Node" fill />
						</div>
					</div>
					<div className="py-4">
						<Separator className="bg-muted-foreground opacity-50" />
					</div>
					<div>
						<h2 className="font-semibold text-sm text-muted-foreground">
							Sobre mim
						</h2>
						<div className="py-3">
							<p className="text-sm text-[#C9C9C9] text-justify">
								Olá, meu nome é Kauã tenho 18 anos, estou envolvido na área a 3
								anos, acho o desenvolvimento web algo muito satisfátorio e cada
								dia que passa creio que conquisto mais conhecimento. Cada vez
								que início meu ambiente de trabalho, acho coisas que me fascinam
								e fazem querer mais e mais estudar sobre. Atualmente estou no 4
								ano técnico no IFRS-Campus Feliz cursando Técnico em
								Informática. Lá foi onde me dediquei e me dedico cada vez mais
								para ampliar meus conhecimentos, atualmente ainda não trabalho
								na área de desenvolvimento mas estou buscando a primeira
								oportunidade para demonstrar meus conhecimentos.
							</p>
						</div>
					</div>
				</div>
			</div>

			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent className="border-none bg-backgroundsecundary w-4/5 rounded-lg">
					<DialogHeader>
						<DialogTitle className="text-left text-base">
							Linguagens que tenho conhecimento
						</DialogTitle>
					</DialogHeader>
					<div className="flex flex-col justify-center items-center space-y-12 py-4">
						{/* TYPESCRIPT */}
						<div className="w-full flex items-center justify-around">
							<div className="w-10 h-10 relative rounded-full">
								<Image src={tsIcon} alt="Icone Typescript" fill />
							</div>

							<div className="bg-[#201F1F] w-[250px] h-[30px] rounded-full">
								<div className="flex items-center justify-between fixed">
									<span className="absolute top-[2px] text-[#C9C9C9]">1</span>
									<span className="absolute left-[120px] top-[2px] text-[#C9C9C9]">
										2
									</span>
									<span className="absolute left-60 top-[2px] text-[#C9C9C9]">
										3
									</span>
								</div>
								<div className="bg-primary h-[30px] w-[130px] rounded-full " />
							</div>
						</div>
						{/* JAVASCRIPT */}
						<div className="w-full flex items-center justify-around">
							<div className="w-10 h-10 relative rounded-full">
								<Image src={jsIcon} alt="Icone Typescript" fill />
							</div>

							<div className="bg-[#201F1F] w-[250px] h-[30px] rounded-full">
								<div className="flex items-center justify-between fixed">
									<span className="absolute top-[2px] text-[#C9C9C9]">1</span>
									<span className="absolute left-[120px] top-[2px] text-[#C9C9C9]">
										2
									</span>
									<span className="absolute left-60 top-[2px] text-[#C9C9C9]">
										3
									</span>
								</div>
								<div className="bg-primary h-[30px] w-[130px] rounded-full " />
							</div>
						</div>
						{/* REACT */}
						<div className="w-full flex items-center justify-around">
							<div className="w-10 h-10 relative rounded-full">
								<Image src={reactIcon} alt="Icone Typescript" fill />
							</div>

							<div className="bg-[#201F1F] w-[250px] h-[30px] rounded-full">
								<div className="flex items-center justify-between fixed">
									<span className="absolute top-[2px] text-[#C9C9C9]">1</span>
									<span className="absolute left-[120px] top-[2px] text-[#C9C9C9]">
										2
									</span>
									<span className="absolute left-60 top-[2px] text-[#C9C9C9]">
										3
									</span>
								</div>
								<div className="bg-primary h-[30px] w-[130px] rounded-full " />
							</div>
						</div>
						{/* NODE */}
						<div className="w-full flex items-center justify-around">
							<div className="w-10 h-10 relative rounded-full">
								<Image src={nodeIcon} alt="Icone Typescript" fill />
							</div>

							<div className="bg-[#201F1F] w-[250px] h-[30px] rounded-full">
								<div className="flex items-center justify-between fixed">
									<span className="absolute top-[2px] text-[#C9C9C9]">1</span>
									<span className="absolute left-[120px] top-[2px] text-[#C9C9C9]">
										2
									</span>
									<span className="absolute left-60 top-[2px] text-[#C9C9C9]">
										3
									</span>
								</div>
								<div className="bg-primary h-[30px] w-[50px] rounded-full " />
							</div>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default InitialPage;
