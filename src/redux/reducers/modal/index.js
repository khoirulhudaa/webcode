import { DETAIL_PORTOFOLIO } from "../../actions/modal";

const initialState = {
	dataPortofolio : [""]
}

const Modal = (state = initialState, action) => {
	switch(action.type) {
		case DETAIL_PORTOFOLIO :
			return {
				...state,
				dataPortofolio: action.payload.data
			}
		default :
			return state
	}
}

export default Modal;