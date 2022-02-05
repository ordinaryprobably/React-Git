import { Accordion, AccordionDetails, AccordionSummary, Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import EditForm from "./EditForm";

export default function Todo(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [expand, setExpand] = useState(false);
  const { todo, edit, deleteTodo, checkComplete } = props;

  const toggleEditForm = () => {
    setExpand((prev) => !prev);
    setIsEditing(!isEditing);
  }

  const handleEditSubmit = () => {
    setExpand(false);
  }

  return (
    <Accordion expanded={expand} >
      <AccordionSummary>
        <ListItem>
          <Checkbox checked={todo.completed} onChange={() => checkComplete(todo.id, todo.completed)}/>
          <ListItemText>{todo.task}</ListItemText>
          <IconButton  aria-label="Edit" onClick={toggleEditForm}>
            <EditIcon />
          </IconButton>
          <IconButton edge='end' aria-label="Delete" onClick={() => deleteTodo(todo.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      </AccordionSummary>
      <AccordionDetails>
        <ListItem>
          <EditForm id={todo.id} edit={edit} foldAccordion={handleEditSubmit}/>
        </ListItem>
      </AccordionDetails>
    </Accordion>
  )
}

{/* <Accordion>
<AccordionSummary>
  <ListItem>
    <Checkbox checked={todo.completed} onChange={() => checkComplete(todo.id, todo.completed)}/>
    <ListItemText style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.task}
    </ListItemText>
    <ListItemSecondaryAction>
      <IconButton aria-label="Edit" onClick={toggleEditForm}  >
        <EditIcon />
      </IconButton>
      <IconButton aria-label="Delete" onClick={() => deleteTodo(todo.id)}>
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
</AccordionSummary>
<AccordionDetails>
  <EditForm id={todo.id} edit={edit} toggleEditForm={toggleEditForm}/>
</AccordionDetails>
</Accordion> */}