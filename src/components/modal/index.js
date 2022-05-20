import react, { useEffect, useState } from "react";
import "./modal.module.css";
import { useSelector } from "react-redux";
import { React, ReactTable, Tailwind, Redux, Router, Firebase, Fontawesome, Node, Mongodb, Javascript, Jwt } from "../../assets";

export default function Modal({Close, data}) {
	return (
		<>
			<div className="absolute w-[100vw] h-[100vh] bg-white opacity-[0.7] z-40"></div>
			<div className="fixed top-[40px] left-[50%] translate-x-[-50%] duration-[3s] ease-in translate-y-[5%] bg-black overflow-hidden w-[80vw] flex rounded-lg h-[80vh] bg-white shadow z-50">
				<div className="w-[40%] h-[100%] relative p-5 bg-black flex justify-center items-center">
					<img src={
						data.type === "React" ? React :
						data.type === "ReactTable" ? ReactTable :
						data.type === "Redux" ? Redux :
						data.type === "Tailwind" ? Tailwind :
						data.type === "Node" ? Node :
						data.type === "Firebase" ? Firebase :
						data.type === "Mongodb" ? Mongodb :
						data.type === "Javascript" ? Javascript :
						data.type === "Fontawesome" ? Fontawesome :
						data.type === "Jwt" ? Jwt :
						Router
					}
						alt="icon language"
						className="w-[90%]"
					/> 
				</div>
				<div className="w-[60%] h-[100%] py-5 pl-10 relative bg-black flex justify-center flex-col">
					<div onClick={() => Close()} className="w-[50px] h-[50px] bg-white flex justify-center hover:brightness-90 active:scale-[0.96] duration-100 items-center font-bold text-white cursor-pointer absolute top- right-0">
						<i className="las la-reply text-black scale-[1.6]"></i>
					</div>
					<h2 className="text-white font-bold text-[26px]">{data.title}</h2>
					<p className="text-[15px] text-white mt-3 leading-normal w-[85%]">{data.deskripsi}</p>
					<a href={data.link} target="__blink">
						<button className="w-[210px] rounded-full h-[44px] mt-5 text-[13px] active:scale-[0.98] font-bold shadow cursor-pointer hover:brightness-90 duration-100 border-0 outline-0 shadow bg-white">
							Kunjungi stackblitz nya
						</button>
					</a>
				</div>
			</div>
		</>
	);
}