import { List } from '@mui/material';
import { useContext } from 'react';
import { TodoContext } from '../../Contexts/TodoContext';
import TodoItem from '../TodoItem/TodoItem';

export default function TodoList() {
    const { state, dispatch } = useContext(TodoContext);

    return (
        <List>
            {state.todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteHandler={() =>
                        dispatch({ type: 'DELETE_TODO', payload: todo.id })
                    }
                    toggleHandler={() =>
                        dispatch({ type: 'TOGGLE_TODO', payload: todo.id })
                    }
                />
            ))}
        </List>
    );
}
