export interface TodoItem {
    name: string;
    isCompleted: boolean;
    id: number;
}

export interface TodoState {
    todos: TodoItem[];
    activeTodo: TodoItem | null;
}

export const initialState: TodoState = {
    todos: [],
    activeTodo: null,
};