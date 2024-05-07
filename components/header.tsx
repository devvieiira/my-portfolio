import logo from "@/public/my-logo.png";
import Image from "next/image";

const Header = () => {
	return (
		<div className="flex flex-col justify-center space-y-4 pt-6">
			<div className="relative h-[150px] w-[150px] ml-2">
				<Image src={logo} alt="Foto do portfólio" fill />
			</div>
			<div>
				<h1 className="text-3xl">Kauã Vieira</h1>
				<h2 className="text-sm">
					Desenvolvendor <span className="text-[#AC4CCE]">Junior</span>
				</h2>
			</div>
		</div>
	);
};

export default Header;
