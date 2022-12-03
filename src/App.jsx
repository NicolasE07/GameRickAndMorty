import './App.css';
import { Route, Routes } from 'react-router-dom';

import { Home } from './Components/Home';
import { Game } from './Components/Game';

function App() {
	return (
		<div className="App"> 
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/start-game" element={<Game />} />
			</Routes>
		</div>
	);
}

export default App;
