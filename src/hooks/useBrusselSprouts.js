import { useState } from "react";
import { obtainInstruction } from "../javascript/obtainInstruction.js";
import { reset } from "../javascript/stateChanger.js";

function useBrusselSprouts(){
  const [brusselSprouts, setBrusselSprouts] = useState([]);

	function getBrusselSproutsInstructions() {
		reset(setBrusselSprouts)
		const food = 'brusselsSprouts';
		// Don't change the code above this line
		
	
	
		// Don't change the code below this line
	}

  return [brusselSprouts, getBrusselSproutsInstructions]
}

export default useBrusselSprouts