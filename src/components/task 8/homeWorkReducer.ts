type StateType = {
	id: string
	name: string
	age: number
}
type ActionsType = SortPeopleUpType | SortPeopleDownType | GetAdultPeopleType
type SortPeopleUpType = {
	type: 'SORT',
	payload: 'up'
}
type SortPeopleDownType = {
	type: 'SORT'
	payload: 'down'
}
type GetAdultPeopleType = {
	type: 'CHECK'
	payload: 18
}

export const homeWorkReducer = (state: Array<StateType>, action: ActionsType): Array<StateType> => {
	switch (action.type) {
		case "SORT": {
			if (action.payload == 'up') {
				return [...state.sort((a, b): number => {
					if (a.name > b.name) {
						return 1
					}
					if (a.name < b.name) {
						return -1
					}
					return 0
				})]
			}
			if (action.payload === 'down') {
				return [...state.sort((a, b): number => {
					if (a.name < b.name) {
						return 1
					}
					if (a.name > b.name) {
						return -1
					}
					return 0
				})]
			}
			break;
		}
		case "CHECK": {
			return [...state.filter(p => p.age >= 18)]
		}
		default:
			return state
	}
	return []
}

export const sortPeopleUpAC = (payload: 'up'): SortPeopleUpType => {
	return {type: 'SORT', payload}
}
export const sortPeopleDownAC = (payload: 'down'): SortPeopleDownType => {
	return {type: 'SORT', payload}
}
export const getAdultPeopleAC = (payload: 18): GetAdultPeopleType => {
	return {type: 'CHECK', payload}
}