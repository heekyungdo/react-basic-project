import { useRef } from "react";

const NewToDo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
    const todoText = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoText.current!.value;

        if (enteredText.trim().length === 0) {
            // throw error
            return;
        }

        props.onAddTodo(enteredText);
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="text">Todo Text</label>
            <input type="text" id="text" ref={todoText} />
            <button>Add Todo</button>
        </form>
    )
}

export default NewToDo;