import { Accordion, AccordionDetails, AccordionSummary, Checkbox, IconButton, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useContext, useState, memo } from "react";
import EditForm from "./EditForm";
import { DispatchContext } from "./contexts/todos.context";

function Todo(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [expand, setExpand] = useState(false);
  const { todo } = props;
  const dispatch = useContext(DispatchContext);
  
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
          <Checkbox checked={todo.completed} onChange={() => dispatch({ type: 'TOGGLE', id: todo.id, state: todo.completed})}/>
          <ListItemText>{todo.task}</ListItemText>
          <IconButton aria-label="Edit" onClick={toggleEditForm}>
            <EditIcon />
          </IconButton>
          <IconButton edge='end' aria-label="Delete" onClick={() => dispatch({ type: 'REMOVE', id: todo.id})}>
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


export default memo(Todo);