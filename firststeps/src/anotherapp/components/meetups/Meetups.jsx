import classes from './meetups.module.css';

function Meetups(props) {
	return (
		<li className={classes.item}>
			<div className={classes.image}><img src={props.name.img} alt=""/></div>
			<div>
				<h3>{props.name.title}</h3>
				<address>{props.name.address}</address>
				<p>{props.name.description}</p>
			</div>
			<div className={classes.actions}>
				<button> To Favorites</button>
			</div>
		</li>
	);
}

export default Meetups;