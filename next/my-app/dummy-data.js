const DUMMY_EVENTS = [
	{
		id: 'e1',
		title: 'Programming for everyone',
		description: 'Everyone can learn to code! yes..., Everyone can learn to code! yes..., Everyone can learn to code! yes..., Everyone can learn to code! yes... , Everyone can learn to code! yes...',
		location: 'Everyone can learn to code! yes..., Everyone can learn to code! yes..., Everyone can learn to code! yes..., Everyone can learn to code! yes... , Everyone can learn to code! yes...',
		date: '2022-05-12',
		image: 'images/chris.jpeg',
		isFeatured: false
	},
	{
		id: 'e2',
		title: 'w for everyone',
		description: 'Everyone can learn to code! yes..., Everyone can learn to code! yes..., Everyone can learn to code! yes..., Everyone can learn to code! yes... , Everyone can learn to code! yes..., Everyone can learn to code! yes..., Everyone can learn to code! yes..., Everyone can learn to code! yes...',
		location: 'Everyone can learn to code! yes..., Everyone can learn to code! yes..., Everyone can learn to code! yes..., Everyone can learn to code! yes... , Everyone can learn to code! yes..., Everyone can learn to code! yes..., Everyone can learn to code! yes..., Everyone can learn to code! yes...',
		date: '2022-05-12',
		image: 'images/w.jpeg',
		isFeatured: true
	},
	{
		id: 'e3',
		title: 'something else for everyone',
		description: 'Everyone can learn to code! yes..., Everyone can learn to code! yes..., Everyone can learn to code! yes..., Everyone can learn to code! yes... , Everyone can learn to code! yes...',
		location: 'Everyone can learn to code! yes..., Everyone can learn to code! yes..., Everyone can learn to code! yes..., Everyone can learn to code! yes... , Everyone can learn to code! yes...',
		date: '2022-05-12',
		image: 'images/te.jpeg',
		isFeatured: false
	},
	{
		id: 'e4',
		title: 'colors for everyone',
		description: 'Everyone can learn to code! yes..., Everyone can learn to code! yes..., Everyone can learn to code! yes..., Everyone can learn to code! yes... , Everyone can learn to code! yes...',
		location: 'Everyone can learn to code! yes..., Everyone can learn to code! yes..., Everyone can learn to code! yes..., Everyone can learn to code! yes... , Everyone can learn to code! yes...',
		date: '2022-05-12',
		image: 'images/sit.jpeg',
		isFeatured: true
	}
];

export function getFeatureEvents(){
	return DUMMY_EVENTS.filter((event)=> event.isFeatured);
}

export function getAllEvents(){
	return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter){
	const {year, month} = dateFilter;

	let filteredEvents = DUMMY_EVENTS.filter((event) => {
		const eventDate = new Date(event.date);
		return eventDate.getFullYear() == year && eventDate.getMonth() === month - 1;
	});
}