import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import useInput from "./hooks/useInput";

const useStyles = makeStyles({
  button: {
    margin: '5px 0',
    marginLeft: 'auto',
    width: '8rem',
    height: '3rem'
  },
  buttonWrap: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
})

export default function EditForm(props) {
  const [value, handleChange, reset] = useInput('');
  const { id, edit, foldAccordion } = props;
  const classes = useStyles();

  const submitEdit = (event) => {
    event.preventDefault();

    edit(id, value);
    reset();
    foldAccordion();
  }

  return (
    <form onSubmit={submitEdit} style={{ width: '100%', border: 'none' }}>
      <TextField value={value} onChange={handleChange} autoFocus style={{ width: '100%', border: 'none' }}/>
      <div className={classes.buttonWrap}>
      <button className={classes.button}>submit</button>
      </div>
    </form>
  )
}