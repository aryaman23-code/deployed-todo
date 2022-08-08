import React, { useState ,useEffect} from 'react';
import './App.css';
import Todo from "./Todo.js"
import {  Button,FormControl,Input,InputLabel} from '@material-ui/core';
import db from "./firebase"
import firebase from "firebase"

function App() {
 
  const [todos, setTodos] = useState([]);
  const[input,setInput] = useState("")

  useEffect(() => {
    db.collection('todos').orderBy('timestamp',"desc").onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo})))
    })
  }, []);

  const addTodo = (event) =>{
    event.preventDefault();
    db.collection("todos").add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
      //this is the timestamp fo the server 

    })

  
    setInput("") //clear the input on submission
  }
  return (
    <div className="App">
        <h1>  Hey Aryaman This Is Your ToDo List For Today</h1>
  <form>
    <FormControl>
      <InputLabel>😍write a todo</InputLabel>
      <Input value={input} onChange={(e) => setInput(e.target.value)} />
      
    </FormControl>
    <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo}>
         Add Todo
      </Button>
    </form>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        )
        )}
      </ul>
    </div>
  );
}
export default App;
