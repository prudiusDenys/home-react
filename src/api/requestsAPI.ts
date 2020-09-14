import axios from "axios";

export type ResponseTypeData = {
	errorText: string
	info: string
	yourBody: { success: boolean }
	yourQuery: {}
}

export const requestsAPI = {
	createRequestAPI(CheckboxValue: boolean) {
		return axios.post<ResponseTypeData>('https://neko-cafe-back.herokuapp.com/auth/test',{success: CheckboxValue})
	}
}