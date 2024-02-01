import { useState } from 'react';
import { obtainInstruction } from '../javascript/obtainInstruction.js';
import { reset, setter } from '../javascript/stateChanger.js';
import { getInstruction } from '../javascript/getInstruction.js';


function useSteak() {
	const [steak, setSteak] = useState([]);
	const addItem = setter(setSteak);
	const [stepsListed2, setStepsListed2] = useState(false);

	function getSteakInstructions() {
		reset(setSteak);
		const food = 'steak';
		// Don't change the code above this line
		obtainInstruction(food,0).then((step0)=>{
			addItem(step0)
			return obtainInstruction(food,1)
		}).then((step1)=>{addItem(step1)
		return obtainInstruction(food,2)
		}).then((step2)=>{addItem(step2)
		return obtainInstruction(food,3)
		}).then((step3)=>{addItem(step3)
		return obtainInstruction(food,4)
		}).then((step4)=>{addItem(step4)
		return obtainInstruction(food,5)
		}).then((step5)=>{addItem(step5)
		return obtainInstruction(food,6) 
		}).then((step6)=>{addItem(step6)
		return obtainInstruction(food,7)
		}).then((step7)=>{addItem(step7)
		addItem(`Steak is ready!`)
		setStepsListed2(true)
		

	}).catch((err)=>{console.log(err)})
}
	
	return [steak, getSteakInstructions, stepsListed2];
}

export default useSteak;
