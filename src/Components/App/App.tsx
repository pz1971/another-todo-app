import { TodoProvider } from '../../Contexts/TodoContext';
import TodoList from '../TodoList/TodoList';
import './App.css';

function App(): JSX.Element {
    return (
        <TodoProvider>
            <TodoList />
        </TodoProvider>
    );
}

export default App;
