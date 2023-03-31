import { Button, TextField } from '@mui/material';
import { useContext, useRef } from 'react';
import { TodoContext } from '../../Contexts/TodoContext';
import Action from '../../Models/Action';

export default function TodoInput() {
    const { dispatch } = useContext(TodoContext);
    const inputRef = useRef<HTMLInputElement>(null);

    const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.preventDefault();

        // return if inputRef is empty
        if (
            !inputRef.current ||
            !inputRef.current.value ||
            inputRef.current.value === ''
        ) {
            return;
        }

        const action: Action = {
            type: 'ADD_TODO',
            payload: {
                id: Date.now(),
                label: inputRef.current?.value,
                completed: false,
            },
        };
        dispatch(action);

        inputRef.current.value = '';
    };

    return (
        <div>
            <TextField
                id="standard-basic"
                label="New Todo"
                variant="standard"
                inputRef={inputRef}
            />
            <Button variant="outlined" onClick={onClickHandler}>
                Add Todo
            </Button>
        </div>
    );
}
