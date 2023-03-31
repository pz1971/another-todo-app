export default interface Action {
    type: 'ADD_TODO' | 'TOGGLE_TODO' | 'DELETE_TODO';
    payload: any;
}
