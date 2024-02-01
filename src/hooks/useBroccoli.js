import { useState } from "react";
import { obtainInstruction } from "../javascript/obtainInstruction.js";
import { reset, setter } from "../javascript/stateChanger.js";

function useBroccoli() {
  const [broccoli, setBroccoli] = useState([]);
  const addItem = setter(setBroccoli)

	async function getBroccoliInstructions() {
		reset(setBroccoli)
		const food = 'broccoli';
		// Don't change the code above this line
		try{
			const steps = 6
			for (let step = 0; step < steps; step++ ){
				const instruction = await obtainInstruction(food, step)
				addItem(instruction)
			}
			addItem(`Broccoli is ready!`)

		}
		catch(err){
			console.log(err)
		}
		


		
		// Don't change the code below this line
	}
  return [broccoli, getBroccoliInstructions]
}


export default useBroccoli