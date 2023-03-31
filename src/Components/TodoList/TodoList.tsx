import { List } from '@mui/material';
import { useContext } from 'react';
import { TodoContext } from '../../Contexts/TodoContext';
import TodoInput from '../TodoInput/TodoInput';
import TodoItem from '../TodoItem/TodoItem';
import classes from './TodoList.module.css';

export default function TodoList(): JSX.Element {
    const { state, dispatch } = useContext(TodoContext);

    return (
        <div className={classes.container}>
            <center>
                <h1>Your Simplest Todo List</h1>
            </center>
            <TodoInput />
            <List>
                {state.todos.map(
                    (todo): JSX.Element => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            deleteHandler={() =>
                                dispatch({
                                    type: 'DELETE_TODO',
                                    payload: todo.id,
                                })
                            }
                            toggleHandler={() =>
                                dispatch({
                                    type: 'TOGGLE_TODO',
                                    payload: todo.id,
                                })
                            }
                        />
                    )
                )}
            </List>
        </div>
    );
}
