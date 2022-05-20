import React, { useState } from "react";
import "./create.module.css";

export default function Create() {
	const [title, setTitle] = useState("");
	const [link, setTLink] = useState("");
	const [type, setType] = useState("");
	const [deskripsi, setDeskripsi] = useState("");

	return (
		<div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
			<div className="w-[80vw] h-[80vh] flex bg-white overflow-hidden shadow p-3 mx-auto relative rounded-lg">
				<div className="w-[50%] h-[100%] relative overflow-hidden before:absolute before:block before:w-[100%] before:h-[100%] before:z-20 opacity-[0.8]">
					<iframe src="https://embed.lottiefiles.com/animation/104710" className="scale-[2] rotate-[190deg] absolute top-0 right-7"></iframe>
					<iframe src="https://embed.lottiefiles.com/animation/104710" className="scale-[2] rotate-[30deg] absolute bottom-0 left-7"></iframe>
				</div>
				<div className="w-[50%] h-[100%] pt-3 pl-5">
					<form onSubmit={null}>
						<div className="w-full mt-4">
							<label for="title">Title portofolio</label>
							<input 
								id="title"
								type="text" 
								name="title" 
								placeholder="Title portofolio" 
								value={title} 
								onChange={(e) => setTitle(e.target.value)} 
								className="w-[80%] mt-[10px] border-0 outline-0 rounded-full h-[40px] shadow pl-2"
							/>
						</div>

						<div className="w-full mt-4">
							<label for="title">Title portofolio</label>
							<input 
								id="title"
								type="text" 
								name="title" 
								placeholder="Title portofolio" 
								value={title} 
								onChange={(e) => setTitle(e.target.value)} 
								className="w-[80%] mt-[10px] border-0 outline-0 rounded-full h-[40px] shadow pl-2"
							/>
						</div>

						<div className="w-full mt-4">
							<label for="title">Title portofolio</label>
							<input 
								id="title"
								type="text" 
								name="title" 
								placeholder="Title portofolio" 
								value={title} 
								onChange={(e) => setTitle(e.target.value)} 
								className="w-[80%] mt-[10px] border-0 outline-0 rounded-full h-[40px] shadow pl-2"
							/>
						</div>

						<div className="w-full mt-4">
							<label for="title">Title portofolio</label>
							<div className="flex w-full flex-wrap mt-3">
								<div className="rounded-full text-center hover:brightness-90 duration-100 bg-black shadow mr-2 mb-3 w-[100px] h-[40px] flex items-center justify-center cursor-pointer p-1">
									<p className="text-white">React</p>
								</div>
								<div className="rounded-full text-center hover:brightness-90 duration-100 bg-black shadow mr-2 mb-3 w-[100px] h-[40px] flex items-center justify-center cursor-pointer p-1">
									<p className="text-white">React</p>
								</div>
								<div className="rounded-full text-center hover:brightness-90 duration-100 bg-black shadow mr-2 mb-3 w-[100px] h-[40px] flex items-center justify-center cursor-pointer p-1">
									<p className="text-white">React</p>
								</div>
								<div className="rounded-full text-center hover:brightness-90 duration-100 bg-black shadow mr-2 mb-3 w-[100px] h-[40px] flex items-center justify-center cursor-pointer p-1">
									<p className="text-white">React</p>
								</div>
								<div className="rounded-full text-center hover:brightness-90 duration-100 bg-black shadow mr-2 mb-3 w-[100px] h-[40px] flex items-center justify-center cursor-pointer p-1">
									<p className="text-white">React</p>
								</div>
								<div className="rounded-full text-center hover:brightness-90 duration-100 bg-black shadow mr-2 mb-3 w-[100px] h-[40px] flex items-center justify-center cursor-pointer p-1">
									<p className="text-white">React</p>
								</div>
								<div className="rounded-full text-center hover:brightness-90 duration-100 bg-black shadow mr-2 mb-3 w-[100px] h-[40px] flex items-center justify-center cursor-pointer p-1">
									<p className="text-white">React</p>
								</div>
								<div className="rounded-full text-center hover:brightness-90 duration-100 bg-black shadow mr-2 mb-3 w-[100px] h-[40px] flex items-center justify-center cursor-pointer p-1">
									<p className="text-white">React</p>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}