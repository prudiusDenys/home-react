enum ActionType {
	SORT = 'SORT',
	CHECK = 'CHECK'
}

type StateType = {
	id: string
	name: string
	age: number
}
type ActionsType = SortPeopleUpType | GetAdultPeopleType
type SortPeopleUpType = {
	type: typeof ActionType.SORT
	payload: 'up' | 'down'
}
type GetAdultPeopleType = {
	type: typeof ActionType.CHECK
	payload: 18
}

export const homeWorkReducer = (state: Array<StateType>, action: ActionsType): Array<StateType> => {
	switch (action.type) {
		case ActionType.SORT: {
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
		case ActionType.CHECK: {
			return [...state.filter(p => p.age >= 18)]
		}
		default:
			return state
	}
	return []
}

export const sortPeopleAC = (payload: 'up' | 'down'): SortPeopleUpType => {
	return {type: ActionType.SORT, payload}
}
export const getAdultPeopleAC = (payload: 18): GetAdultPeopleType => {
	return {type: ActionType.CHECK, payload}
}