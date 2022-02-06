import { Accordion, AccordionDetails, AccordionSummary, Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useContext, useState } from "react";
import EditForm from "./EditForm";
import { TodosContext } from "./contexts/todos.context";

export default function Todo(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [expand, setExpand] = useState(false);
  const { todo } = props;
  const { deleteTodo, toggleComplete } = useContext(TodosContext);

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
          <Checkbox checked={todo.completed} onChange={() => toggleComplete(todo.id, todo.completed)}/>
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
          <EditForm id={todo.id} foldAccordion={handleEditSubmit}/>
        </ListItem>
      </AccordionDetails>
    </Accordion>
  )
}