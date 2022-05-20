import react, { useState, useRef, useEffect } from "react";
import './homepage.module.css';
import { React, ReactTable, Tailwind, Redux, Router, Firebase, Node, Mongodb, Fontawesome, Javascript } from "../../assets";
import { Modal, Footer } from "../../components";
import Data from "../../data";
import "./homepage.module.css";
import lottie from "lottie-web";
import 'animate.css';
import { useSelector, useDispatch } from "react-redux";
import { detailPortofolio } from "../../redux/actions/modal";

export default function Homepage() {
	const [modal, setModal] = useState(false);
	const [data, setData] = useState([""]);
	const [dataPortofolios, setDataPortofolios] = useState(null)

	const dispatch = useDispatch();

	const { dataPortofolio } = useSelector((state) => state.ModalReducers || {})

	const containers = useRef(null);

	useEffect(() => {
		setData(Data);
	}, [data]);

	useEffect(() => {
		lottie.loadAnimation({
			container: containers.current,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: require('./line.json')
		})
	}, [])

	const Close = () => {
		setModal(false)
	}

	console.log('data:', data)

	const modalData = (data) => {
		setModal(true)
		dispatch(detailPortofolio(data))
		console.log('data', dataPortofolio)
	}

	useEffect(() => {
		if(dataPortofolio) {
			setDataPortofolios(dataPortofolio)
		}
	}, [dispatch, dataPortofolio])


	return (
		<>
			{
				modal && (
					<Modal Close={Close} data={dataPortofolios} />
				)
			}
			<div className="w-[100vw] h-[100vh] overflow-x-hidden">
				<div className="relative w-[100vw] h-[60vh] sm:h-[70vh] text-center flex flex-col items-center justify-center before:absolute overflow-hidden before:block before:w-[100%] before:h-[100%] before:bg-black before:opacity-[0.7]">
					<iframe src="https://embed.lottiefiles.com/animation/103083" className="animate__animated animate__fadeInUp absolute bottom-[30px] left-0 z-[-1] scale-[1.6] lg:block hidden"></iframe>
					<iframe src="https://embed.lottiefiles.com/animation/103154" className="animate__animated animate__fadeInUp absolute bottom-[30px] right-0 z-[-1] scale-[1.8] lg:block hidden"></iframe>
					<iframe src="https://embed.lottiefiles.com/animation/102151" className="animate__animated animate__fadeInUp absolute top-[0px] left-[20%] z-[-1] scale-[1] lg:block hidden"></iframe>
					<iframe src="https://embed.lottiefiles.com/animation/102151" className="animate__animated animate__fadeInUp absolute top-[0px] sm:top-[50px] sm:right-[20%] z-[-1] scale-[3] lg:scale-[0.9]"></iframe>
					<h1 className="w-max z-[30] text-white text-center mt-12 sm:mt-0 font-bold text-[34px] sm:text-[60px] lg:text-[90px] relative top-[0px] lg:ml-0 leading-losee title__sidebar">
						coding knowledge
					</h1>
					<p className="text-[12px] sm:text-[14px] lg:text-[16px] z-[30] text-white w-[82%] lg:w-[60%] leading-normal mt-3 sm:mt-7 lg:mt-7">
						Website yang dijadikan tempat berkumpulnya berbagai kode dengan fungsi kerja nya 
						masing masing yang disesuaikan dengan kebutuhan seorang developer
					</p>
				</div>
				<div className="w-[92vw] mx-auto mt-2 justify-between lg:justify-start relative pt-[20px] pb-[20px] flex flex-wrap">
					{
						data ? (
							data.map((portofolio) => {
								return (
									<div onClick={() => modalData(portofolio)} className="animate__animated animate__fadeInUp hover:p-1 duration-100 rounded-lg cursor-pointer m-3 hover:brightness-90 duration-90 w-[93%] sm:w-[30%] lg:w-[23%] h-[30vh] relative overflow-hidden bg-black shadow-lg">
										<img src={
											portofolio.type === "React" ? React :
											portofolio.type === "ReactTable" ? ReactTable :
											portofolio.type === "Redux" ? Redux :
											portofolio.type === "Tailwind" ? Tailwind :
											portofolio.type === "Node" ? Node :
											portofolio.type === "Firebase" ? Firebase :
											portofolio.type === "Mongodb" ? Mongodb :
											portofolio.type === "Javascript" ? Javascript :
											portofolio.type === "Fontawesome" ? Fontawesome :
											Router
										} 
											alt="icon language" 
											className="w-[60px] absolute bottom-6 right-4" 
										/>
										<h2 className="font-bold text-[26px] w-[70%] ml-4 mt-2 opacity-[0.8] text-white">{portofolio.title}</h2>
									</div>	
								)
							})
						):
						<h1 className="text-[34px] mt-[50px] mx-auto text-center relative text-white font-bold before:absolute before:bottom-[-14px] before:bg-white before:w-[200px] before:h-[6px] before:rounded-full before:shadow-lg before:block before:left-0">Belum ada portofolio</h1>
					}
					<div className="flex justify-center items-center animate__animated animate__fadeInUp hover:p-2 duration-100 rounded-lg cursor-pointer m-3 hover:brightness-90 duration-90 w-[23%] h-[30vh] relative overflow-hidden bg-white shadow-lg">
						<div className="w-[60px] h-[60px] flex justify-center items-center border-[1px] border-dashed border-black rounded-full cursor-pointer hover:scale-[0.96] duration-100">
							<i className="las la-plus-circle text-black scale-[3]"></i>
						</div>
					</div>	
				</div>

				<Footer />
			</div>			
		</>
	);
}