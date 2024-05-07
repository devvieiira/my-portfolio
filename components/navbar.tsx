import { Briefcase, Home, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
	return (
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
	);
};

export default Navbar;
