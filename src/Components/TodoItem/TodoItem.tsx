import DeleteIcon from '@mui/icons-material/Delete';
import { Checkbox, IconButton, ListItem, ListItemButton } from '@mui/material';
import { useState } from 'react';
import classes from './TodoItem.module.css';

type propType = {
    label: string;
    completed?: boolean;
};

export default function TodoItem({ label, completed }: propType) {
    const [isDone, setIsDone] = useState<boolean>(completed || false);

    const checkBoxChangeHandler = () => {
        setIsDone(!isDone);
    };

    const deleteHandler = () => {};

    return (
        <ListItem
            secondaryAction={
                <IconButton
                    edge="end"
                    aria-label="Delete"
                    onClick={deleteHandler}
                >
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton onClick={checkBoxChangeHandler}>
                <Checkbox edge="start" checked={isDone} />
                <div
                    className={
                        isDone ? classes.strikThrough : classes.noStrikThrough
                    }
                >
                    {label}
                </div>
            </ListItemButton>
        </ListItem>
    );
}
