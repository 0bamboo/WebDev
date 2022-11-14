import { useWorkoutsContext } from "../hooks/useWorkoutsContext"


const WorkoutDetails = ({workout}) => {

	const {dispatch} = useWorkoutsContext()

	const handleClick = async () => {
		const response = await fetch('/api/workouts/' + workout._id,{
			method: 'DELETE'
		})
		const json = await response.json()

		if (response.ok) {
			dispatch({type: 'DELETE_WORKOUT', payload: json})
			console.log("Workout deleted !!")
		}

	}

	return (
		<div className="workout-details">
			<h4>{workout.title}</h4>
			<p><strong>Load (kg) : </strong>{workout.load}</p>
			<p><strong>Reps : </strong>{workout.reps}</p>
			<p>{workout.createdAt}</p>
			<span onClick={handleClick} style={{width:"16px", height: "16px", borderRadius: '50px'}}>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#e7195a"  viewBox="0 0 16 16">
  					<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
				</svg>
			</span>
		</div>
	)
}

export default WorkoutDetails