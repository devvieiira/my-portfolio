"use client";
import Header from "@/components/header";
import InitialPage from "@/components/initial-page";
import ProjectsPage from "@/components/projects-page";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Briefcase, ChevronRightIcon, Home, Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function HomePage() {
	const [page, setPage] = useState<number>(1);

	const handleClick = (n: number) => {
		setPage(n);
	};
	return (
		<main className="flex min-h-screen flex-col items-center bg-backgroundsecundary">
			{/* HEADER */}
			<Header />
			{/* NAVBAR */}
			<div className="w-4/5 h-14 bg-foregroundsecundary rounded-full flex justify-between items-center px-8 mt-10">
				<Button
					className="rounded-full hover:opacity-80"
					variant={page === 1 ? "default" : "ghost"}
					size="icon"
					onClick={() => handleClick(1)}
				>
					<Home />
				</Button>
				<Button
					className="rounded-full hover:opacity-80"
					variant={page === 2 ? "default" : "ghost"}
					size="icon"
					onClick={() => handleClick(2)}
				>
					<Briefcase />
				</Button>
				<Button
					className="rounded-full hover:opacity-80"
					variant={page === 3 ? "default" : "ghost"}
					size="icon"
					onClick={() => handleClick(3)}
				>
					<Phone />
				</Button>
			</div>
			{/* CARDS - 1 HOMEPAGE (PADRAO),  2 PROJECTS, 3 CONTACTS */}
			{page === 1 && <InitialPage />}
			{page === 2 && <ProjectsPage />}
		</main>
	);
}
