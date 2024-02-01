import { useState } from "react";
import { obtainInstruction } from "../javascript/obtainInstruction.js";
import { reset, setter } from "../javascript/stateChanger.js";

function useBroccoli() {
  const [broccoli, setBroccoli] = useState([]);
  const addItem = setter(setBroccoli)
  const [stepsListed3, setStepsListed3] = useState(false)

  async function getBroccoliInstructions() {
    reset(setBroccoli); // Resets the broccoli state to an empty array
    const food = 'broccoli';

	try{
		const steps = 6
		for (let step = 0; step < steps; step++ ){
			const instruction = await obtainInstruction(food, step)
			addItem(instruction)
			// setStepsListed3(true)
		}
		addItem(`Broccoli is ready!`)
		setStepsListed3(true)
		
		

	}
	catch(err){
		console.log(err)
	}
	




		
		// Don't change the code below this line
	}
  return [broccoli, getBroccoliInstructions,stepsListed3]
}


export default useBroccoli
