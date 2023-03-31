import React, { createContext, useEffect, useReducer } from 'react';
import Action from '../Models/Action';
import State from '../Models/State';

export const TodoContext = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>;
}>({ state: { todos: [] }, dispatch: () => null });

// load from localStorage
const initialState: State = {
    todos: JSON.parse(localStorage.getItem('todos') || '[]'),
};

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                ),
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        default:
            return state;
    }
};

interface TodoProviderProps {
    children: React.ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        // save to local Storage
        localStorage.setItem('todos', JSON.stringify(state.todos));
    }, [state]);

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};
