import { useState } from "react";
import { obtainInstruction } from "../javascript/obtainInstruction.js";
import { reset } from "../javascript/stateChanger.js";

function useBrusselSprouts(){
  const [brusselSprouts, setBrusselSprouts] = useState([]);

	function getBrusselSproutsInstructions() {
		reset(setBrusselSprouts)
		const food = 'brusselsSprouts';
		// Don't change the code above this line
		
		const steps = 6
		const stepPromises=[]

		for (let step=0; step < steps; step++){
			stepPromises.push(obtainInstruction(food,step).then((instruction)=>{
				return instruction
			}))
		}

		Promise.all(stepPromises)
		.then((instructions)=>{
			const allInstructions = [...instructions, 'Brussels sprouts are ready!']
			setBrusselSprouts(allInstructions)
		
		})
		.catch((err)=>console.log(err))

	
		// Don't change the code below this line
	}

  return [brusselSprouts, getBrusselSproutsInstructions]
}

export default useBrusselSprouts