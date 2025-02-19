import { useState } from "react";
import { getInstruction } from "../javascript/getInstruction.js";
import { reset, setter } from "../javascript/stateChanger.js";


function useMashedPotatoes() {
  const [mashedPotatoes, setMashedPotatoes] = useState([]);
  const [stepsListed, setStepsListed] = useState(false);

  const addItem = setter(setMashedPotatoes)

	function getMashedInstructions() {
		reset(setMashedPotatoes)
		// Don't change the code above this line

		// This will print in the wrong order.
		// We added it as an example and to test that the arrays from data.js are loaded
		// 🚨🚨🚨 Comment out the below code before you start working on the code

		// Out of sync

		getInstruction('mashedPotatoes', 0, (step0) => {
			addItem(step0);
			getInstruction('mashedPotatoes', 1,(step1)=>{
				addItem(step1)
				getInstruction('mashedPotatoes',2,(step2)=>{
					addItem(step2)
					getInstruction('mashedPotatoes',3,(step3)=>{
						addItem(step3)
						getInstruction('mashedPotatoes',4,(step4)=>{
							addItem(step4)
							addItem('Mashed potatoes are ready!')
							setStepsListed(true)
						}, (error)=>console.log(error))
					}, (error)=>console.log(error))
				}, (error)=>console.log(error))
			}, (error)=>console.log(error))
		}, (error)=>console.log(error))



		/* getInstruction(
			'mashedPotatoes',
			0,
			(step1) => {
				addItem(step1);
			},
			(error) => console.log(error)
		);

		getInstruction(
			'mashedPotatoes',
			1,
			(step2) => {
				addItem(step2);
			},
			(error) => console.log(error)
		);

		getInstruction(
			'mashedPotatoes',
			2,
			(step3) => {
				addItem(step3);
			},
			(error) => console.log(error)
		);

		getInstruction(
			'mashedPotatoes',
			3,
			(step4) => {
				addItem(step4);
			},
			(error) => console.log(error)
		);

		getInstruction(
			'mashedPotatoes',
			4,
			(step5) => {
				addItem(step5);
			},
			(error) => console.log(error)
		);
		 */
		// Don't change the code below this line
		
	}

  return [mashedPotatoes, getMashedInstructions, stepsListed]
  
}

export default useMashedPotatoes