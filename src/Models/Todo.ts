export default interface Todo {
    [key: string]: number | string | boolean | undefined;
    id: number;
    label: string;
    completed?: boolean;
}
