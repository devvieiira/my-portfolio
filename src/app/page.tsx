import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import jsIcon from "@/public/js-icon.png";
import nodeIcon from "@/public/node-icon.png";
import reactIcon from "@/public/react-icon.png";
import tsIcon from "@/public/ts-icon.png";
import { Briefcase, ChevronRightIcon, Home, Phone } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
	return (
		<main className="flex min-h-screen flex-col items-center bg-backgroundsecundary">
			{/* HEADER */}
			<Header />
			{/* NAVBAR */}
			<div className="w-4/5 h-14 bg-foregroundsecundary rounded-full flex justify-between items-center px-8 mt-10">
				<Button className="rounded-full hover:opacity-80" size="icon">
					<Home />
				</Button>
				<Button className="rounded-full hover:opacity-80" size="icon">
					<Briefcase />
				</Button>
				<Button className="rounded-full hover:opacity-80" size="icon">
					<Phone />
				</Button>
			</div>
			{/* CARDS - 1 HOMEPAGE (PADRAO),  2 PROJECTS, 3 CONTACTS */}
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
		</main>
	);
}
