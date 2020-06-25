import React from 'react';
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";

export type dialogsDataType = {
	id: number,
	name: string,
	text: string
}

function App(props: any) {

	const dialogsData: Array<dialogsDataType> = [
		{id: 1, name: 'Denis', text: 'npm start нажимал ?'},
		{id: 2, name: 'Andrey', text: 'Да, нажал!'},
		{id: 3, name: 'Ivan', text: 'Что такое npm ?'}
	]
	return (
		<div>
			<div className="App">
				<Dialogs dialogsData={dialogsData}/>
			</div>
		</div>

	);
}

export default App;
