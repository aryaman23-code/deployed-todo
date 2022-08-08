import React,{useState} from 'react'
import "./Todo.css"
import db from "./firebase"

import {Button,List,ListItem,ListItemText,ListItemAvatar} from '@material-ui/core'
function Todo(props) {

  return (
    
   
    <List>
        <ListItem className="todo__list">
        <ListItemAvatar>
        </ListItemAvatar>
            <ListItemText primary= "TODO ⏰" secondary={props.todo.todo} >
            </ListItemText>
        
        </ListItem>
        
        <Button onClick={event =>db.collection("todos").doc(props.todo.id).delete()}>❌Delete Me</Button>
       
    </List>
    
  )
}

export default Todo;