import DeleteIcon from '@mui/icons-material/Delete';
import { Checkbox, IconButton, ListItem, ListItemButton } from '@mui/material';
import Todo from '../../Models/Todo';
import classes from './TodoItem.module.css';

type TodoItemProps = {
    todo: Todo;
    deleteHandler: () => void;
    toggleHandler: () => void;
};

export default function TodoItem({
    todo,
    toggleHandler,
    deleteHandler,
}: TodoItemProps): JSX.Element {
    const { label, completed } = todo;
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
            <ListItemButton onClick={toggleHandler}>
                <Checkbox edge="start" checked={completed} />
                <div
                    className={
                        completed
                            ? classes.strikThrough
                            : classes.noStrikThrough
                    }
                >
                    {label}
                </div>
            </ListItemButton>
        </ListItem>
    );
}
