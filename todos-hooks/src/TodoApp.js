import { AppBar, Grid, Paper, Toolbar, Typography } from "@mui/material";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { TodosProvider } from "./contexts/todos.context";

const styles = {
  padding: 0,
  margin:0,
  height: '100vh',
  backgroundColor: '#fafafa'
}

export default function TodoApp() {
  return (
    <Paper style={styles} elevation={0}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography>TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent='center'>
        <Grid item lg={4} md={8} xs={12}>
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  )
}