export const DETAIL_PORTOFOLIO = "DETAIL_PORTOFOLIO";

export const detailPortofolio = (data) => {
	return (dispatch) => {
		dispatch({
			type: DETAIL_PORTOFOLIO,
			payload: {
				data: data				
			}
		})
	}
}