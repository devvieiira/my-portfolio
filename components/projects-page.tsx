import project from "@/public/king-food.png";
import wallpaper from "@/public/wallpaper.png";
import Image from "next/image";
import { Separator } from "./ui/separator";

const ProjectsPage = () => {
	return (
		<>
			<div className="w-4/5 bg-foregroundsecundary rounded-3xl mt-10 py-3 px-5 shadow-md">
				{/* IMAGEM */}
				<div className="relative w-full h-[226px] mt-2">
					<Image
						className="rounded-tr-3xl rounded-tl-3xl"
						src={wallpaper}
						alt="Projeto"
						fill
					/>
				</div>
				{/* LOGO PROJETO */}
				<div className="flex items-center justify-between text-center px-2 py-6">
					<div className="relative w-[120px] h-[34px]">
						<Image src={project} alt="Logo do projeto." fill />
					</div>
				</div>
				{/* TEXTO */}
				<div className="py-6">
					<p className="text-xs text-justify text-muted-foreground">
						Um app web com base no layout do iFood,feito com algumas
						funcionalidades. No momento sua responsividade não está completa,
						funcionando com maior clareza no modo mobile .
					</p>
				</div>
				<div className="py-4">
					<Separator className="bg-muted-foreground opacity-50" />
				</div>
				<div className="flex items-center justify-center p-2">
					<span className="text-sm text-[#C9C9C9] hover:border-b-[#C9C9C9] hover:border-b">
						Ir para o projeto
					</span>
				</div>
			</div>

			<div className="w-4/5 bg-foregroundsecundary rounded-3xl mt-10 py-3 px-5 shadow-md">
				{/* IMAGEM */}
				<div className="w-full h-[226px] mt-2 bg-muted rounded-tr-3xl rounded-tl-3xl flex items-center justify-center">
					{/* <Image
						className="rounded-tr-3xl rounded-tl-3xl"
						src={wallpaper}
						alt="Projeto"
						fill
					/> */}
					<span className="font-bold text">EM BREVE!!</span>
				</div>
				{/* LOGO PROJETO */}
				<div className="flex items-center justify-between text-center px-2 py-6">
					{/* <div className="relative w-[120px] h-[34px]">
						<Image src={project} alt="Logo do projeto." fill />
					</div> */}
					<span className="font-bold text-primary">EM BREVE</span>
				</div>
				{/* TEXTO */}
				<div className="py-6">
					<p className="text-xs text-justify text-muted-foreground">
						Em breve...
					</p>
				</div>
				<div className="py-4">
					<Separator className="bg-muted-foreground opacity-50" />
				</div>
				<div className="flex items-center justify-center p-2">
					<span className="text-sm text-[#C9C9C9] hover:border-b-[#C9C9C9] hover:border-b">
						Ir para o projeto
					</span>
				</div>
			</div>

			<div className="w-4/5 bg-foregroundsecundary rounded-3xl mt-10 py-3 px-5 shadow-md">
				{/* IMAGEM */}
				<div className="w-full h-[226px] mt-2 bg-muted rounded-tr-3xl rounded-tl-3xl flex items-center justify-center">
					{/* <Image
						className="rounded-tr-3xl rounded-tl-3xl"
						src={wallpaper}
						alt="Projeto"
						fill
					/> */}
					<span className="font-bold text">EM BREVE!!</span>
				</div>
				{/* LOGO PROJETO */}
				<div className="flex items-center justify-between text-center px-2 py-6">
					{/* <div className="relative w-[120px] h-[34px]">
						<Image src={project} alt="Logo do projeto." fill />
					</div> */}
					<span className="font-bold text-primary">EM BREVE</span>
				</div>
				{/* TEXTO */}
				<div className="py-6">
					<p className="text-xs text-justify text-muted-foreground">
						Em breve...
					</p>
				</div>
				<div className="py-4">
					<Separator className="bg-muted-foreground opacity-50" />
				</div>
				<div className="flex items-center justify-center p-2">
					<span className="text-sm text-[#C9C9C9] hover:border-b-[#C9C9C9] hover:border-b">
						Ir para o projeto
					</span>
				</div>
			</div>

			<div className="w-4/5 bg-foregroundsecundary rounded-3xl mt-10 py-3 px-5 shadow-md">
				{/* IMAGEM */}
				<div className="w-full h-[226px] mt-2 bg-muted rounded-tr-3xl rounded-tl-3xl flex items-center justify-center">
					{/* <Image
						className="rounded-tr-3xl rounded-tl-3xl"
						src={wallpaper}
						alt="Projeto"
						fill
					/> */}
					<span className="font-bold text">EM BREVE!!</span>
				</div>
				{/* LOGO PROJETO */}
				<div className="flex items-center justify-between text-center px-2 py-6">
					{/* <div className="relative w-[120px] h-[34px]">
						<Image src={project} alt="Logo do projeto." fill />
					</div> */}
					<span className="font-bold text-primary">EM BREVE</span>
				</div>
				{/* TEXTO */}
				<div className="py-6">
					<p className="text-xs text-justify text-muted-foreground">
						Em breve...
					</p>
				</div>
				<div className="py-4">
					<Separator className="bg-muted-foreground opacity-50" />
				</div>
				<div className="flex items-center justify-center p-2">
					<span className="text-sm text-[#C9C9C9] hover:border-b-[#C9C9C9] hover:border-b">
						Ir para o projeto
					</span>
				</div>
			</div>

			<div className="w-4/5 bg-foregroundsecundary rounded-3xl mt-10 py-3 px-5 shadow-md">
				{/* IMAGEM */}
				<div className="w-full h-[226px] mt-2 bg-muted rounded-tr-3xl rounded-tl-3xl flex items-center justify-center">
					{/* <Image
						className="rounded-tr-3xl rounded-tl-3xl"
						src={wallpaper}
						alt="Projeto"
						fill
					/> */}
					<span className="font-bold text">EM BREVE!!</span>
				</div>
				{/* LOGO PROJETO */}
				<div className="flex items-center justify-between text-center px-2 py-6">
					{/* <div className="relative w-[120px] h-[34px]">
						<Image src={project} alt="Logo do projeto." fill />
					</div> */}
					<span className="font-bold text-primary">EM BREVE</span>
				</div>
				{/* TEXTO */}
				<div className="py-6">
					<p className="text-xs text-justify text-muted-foreground">
						Em breve...
					</p>
				</div>
				<div className="py-4">
					<Separator className="bg-muted-foreground opacity-50" />
				</div>
				<div className="flex items-center justify-center p-2">
					<span className="text-sm text-[#C9C9C9] hover:border-b-[#C9C9C9] hover:border-b">
						Ir para o projeto
					</span>
				</div>
			</div>

			<div className="w-4/5 bg-foregroundsecundary rounded-3xl mt-10 py-3 px-5 shadow-md">
				{/* IMAGEM */}
				<div className="w-full h-[226px] mt-2 bg-muted rounded-tr-3xl rounded-tl-3xl flex items-center justify-center">
					{/* <Image
						className="rounded-tr-3xl rounded-tl-3xl"
						src={wallpaper}
						alt="Projeto"
						fill
					/> */}
					<span className="font-bold text">EM BREVE!!</span>
				</div>
				{/* LOGO PROJETO */}
				<div className="flex items-center justify-between text-center px-2 py-6">
					{/* <div className="relative w-[120px] h-[34px]">
						<Image src={project} alt="Logo do projeto." fill />
					</div> */}
					<span className="font-bold text-primary">EM BREVE</span>
				</div>
				{/* TEXTO */}
				<div className="py-6">
					<p className="text-xs text-justify text-muted-foreground">
						Em breve...
					</p>
				</div>
				<div className="py-4">
					<Separator className="bg-muted-foreground opacity-50" />
				</div>
				<div className="flex items-center justify-center p-2">
					<span className="text-sm text-[#C9C9C9] hover:border-b-[#C9C9C9] hover:border-b">
						Ir para o projeto
					</span>
				</div>
			</div>
		</>
	);
};

export default ProjectsPage;
