import React from 'react';
import "./TodoList.css"
import Todo from "./Todo"

export default function TodoList({todos}) {
  return (
	  todos.map((todo, key) => {
		  return <Todo key={key} todo={todo}/>
	  })
  )
}
