import { Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Contact = () => {
	return (
		<div className="w-4/5 bg-foregroundsecundary rounded-3xl mt-10 py-3 px-5">
			{/* BUTTONS */}
			<div className="flex flex-col items-center justify-center space-y-10 py-16">
				<Button
					className="text-xl rounded-full w-4/5 h-[51px] bg-[#04B4FF] hover:opacity-80 hover:bg-[#04B4FF]"
					asChild
				>
					<Link
						href="https://www.linkedin.com/in/kau%C3%A3-vieira-7a546a293/"
						target="_blank"
					>
						Linkedin
					</Link>
				</Button>
				<Button
					className="text-xl rounded-full w-4/5 h-[51px] bg-[#25FF01] hover:opacity-80 hover:bg-[#25FF01]"
					asChild
				>
					<Link href="https://wa.me/qr/5RWGLAFRDAYDP1" target="_blank">
						Whatsapp
					</Link>
				</Button>
				<Button className="text-xl rounded-full w-4/5 h-[51px] bg-[#202020] hover:opacity-80 hover:bg-[#202020]">
					<Link href="https://github.com/devvieiira" target="_blank">
						GitHub
					</Link>
				</Button>
			</div>
		</div>
	);
};

export default Contact;
