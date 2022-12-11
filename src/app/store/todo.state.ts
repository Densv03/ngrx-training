export interface TodoItem {
    name: string;
    isCompleted: boolean;
    id: number;
}

export interface TodoState {
    todos: TodoItem[];
}

export const initialState: TodoState = {
    todos: [],
};