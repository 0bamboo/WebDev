import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import api from "../apis/posts";

// npx json-server -p 3500 -w data/db.json  for running json server

const Fetch = () => {
	const [users, setUsers] = useState([]);
	const [posts, setPosts] = useState([]);
	const [notposts, setNotPosts] = useState([]);
	const [isPending, setIsPending] = useState(true)

	useEffect(() => {
		// the reason why useEffect called twice is that we are in the StricMode
		// StrictMode renders components twice (on dev but not production) in order to detect
		// any problems with your code and warn you about them (which can be quite useful).
		// setTimeout(() => {
		// const test = async () => {
		// 	const obj = await axios.get(
		// 		"https://jsonplaceholder.typicode.com/users"
		// 	);
		// 	setUsers(obj.data);
		// 	console.log(obj.data);
		// };
		// test();

		// const fetchposts = async () => {
		// 	try {
		// 		const resp = await api.get("/posts");
		// 		setPosts(resp.data);
		// 		setIsPending(false)
		// 		console.log(resp.status)
		// 	} catch (error) {
		// 		console.log("Posts api error : ", error);
		// 	}
		// };
		// fetchposts();

		// const fetchNotPosts = async () => {
		// 	try {
		// 		const response = await api.get("/notposts");
		// 		setNotPosts(response.data);
		// 	} catch (err) {
		// 		console.log(`error: ${err}`);
		// 	}
		// };
		// fetchNotPosts();},500)

		// Best practice : !!!!!!!!!!!!!!!!!
		const fetchAll = async () => {
			try {
				const postsResp = await api.get("/posts")
				const usersResp = await axios.get("https://jsonplaceholder.typicode.com/users")
				const notPostsResp = await api.get("/notposts");

				setUsers(usersResp.data)
				setPosts(postsResp.data)
				setNotPosts(notPostsResp.data)
				setIsPending(false)

			}catch(err)
			{
				console.log(`error: ${err}`)
			}
		}

		fetchAll();


		console.log("rendering...");
	}, []);

	// users.map((user)=>{
	// 	console.log("username: --->  ", user.name)
	// })

	// console.log(users.length)

	// Promises and Async/Await:
	// const asyncFunct = async () => 'Hola Async'
	// const promiseFunct = () => new Promise((resolve, reject) => {
	// 	resolve("Hola Promise")
	// })

	// promiseFunct().then((result) => console.log(result))
	// asyncFunct().then((result) => console.log(result))

	return (
		<div style={{ fontSize: "40px" }}>
			{isPending && <div style={{fontSize: '200px'}}>
					{`PENDING`}
				</div>}
			{posts &&
				posts.map(post => {
					return (
						<div key={post.id}>
							{`${post.name} : ${post.title}`}
						</div>
					);
				})}
			<hr />
			{notposts &&
				notposts.map(post => {
					return (
						<div key={post.id}>
							{`${post.name} : ${post.title}`}
						</div>
					);
				})}
		</div>
	);
};

export default Fetch;
