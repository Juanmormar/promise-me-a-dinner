import './App.css';
import axios from 'axios'
import BrusselSprouts from './components/BrusselSprouts.jsx';

import MashedPotatoes from './components/MashedPotatoes.jsx';
import Steak from './components/Steak.jsx';
import Broccoli from './components/broccoli.jsx';

import useBroccoli from './hooks/useBroccoli.js';
import useBrusselSprouts from './hooks/useBrusselSprouts.js';
import useMashedPotatoes from './hooks/useMashedPotatoes.js';
import useSteak from './hooks/useSteak.js';

function App() {
	const [mashedPotatoes, getMashedInstructions,stepsListed] = useMashedPotatoes();
	const [steak, getSteakInstructions, stepsListed2] = useSteak();
	const [broccoli, getBroccoliInstructions,stepsListed3] = useBroccoli();
	const [brusselSprouts, getBrusselSproutsInstructions] = useBrusselSprouts()

	const getData = () => {
		getMashedInstructions();
		getSteakInstructions();
		getBroccoliInstructions();
		getBrusselSproutsInstructions()
	};

	return (
		<div className='App'>
			<button onClick={getData}>Make a Dinner</button>
			<div className='dinner-table'>
				<MashedPotatoes mashedPotatoes={mashedPotatoes} stepsListed={stepsListed} />
				<Steak steak={steak} stepsListed2={stepsListed2} />
				<Broccoli broccoli={broccoli} stepsListed3={stepsListed3} />
				<BrusselSprouts brusselSprouts={brusselSprouts} />
			</div>
		</div>
	);
}

export default App;
