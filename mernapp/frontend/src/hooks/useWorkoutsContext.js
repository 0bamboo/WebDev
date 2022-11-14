import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {

	const context = useContext(WorkoutsContext) // WorkoutsContext returns the value we gave it 
												// (inside the provider component)

	if (!context){
		throw Error('useWorkoutsContext must be used inside an  WorkoutsContextProvider')
	}
	return context
}