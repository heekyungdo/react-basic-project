import Input from "./Input";

export default function NewProject() {
    return (
        <div>
            <p>
                <button>Cancel</button>
                <button>Save</button>
            </p>
            <div>
                <Input label='title' type='text' />
                <Input label='description' type='text' textarea />
                <Input label='due date' type='date' />
            </div>
        </div>
    )
}