import Meetups from '../components/meetups/Meetups'
let DUMMY_DATA = [
	{
		id: 'm1',
		title: 'This is a first meetup',
		img:
		  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
		address: 'Meetupstreet 5, 12345 Meetup City',
		description:
		  'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
	  },
	  {
		id: 'm2',
		title: 'This is a second meetup',
		img:
		  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
		address: 'Meetupstreet 5, 12345 Meetup City',
		description:
		  'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
	  },
];

function AllMeetupsPage() {
	return (
		<div>
			<h1>All Meetups :</h1>
			<ul>
				{DUMMY_DATA.map((meetup) => {
					return (
						<Meetups name={meetup}/>
					);
				})}
			</ul>
		</div>
	);
};

export default AllMeetupsPage;