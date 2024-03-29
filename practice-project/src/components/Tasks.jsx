import { useRef, useState } from "react"

function Tasks({ project, onDeleteProject }) {

    const [taskList, setTaskList] = useState([])
    const task = useRef();

    const handleAddTask = async () => {
        if (!task.current.value) return;
        await setTaskList((prevTask) => [
            ...prevTask,
            {
                id: Date.now(),
                task: task.current.value
            }
        ]);
        task.current.value = '';
    }

    const handleDelete = (taskId) => {
        setTaskList(taskList.filter(task => task.id != taskId))
    }

    return (
        <div>
            <div className="flex">
                <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                <button onClick={() => onDeleteProject(project.id)}>Delete</button>
            </div>
            <p>{project.date}</p>
            <p>{project.description}</p>
            <hr />
            <div className="flex flex-col">
                <label className="text-3xl font-bold text-stone-600 mb-2">Tasks</label>
                <input
                    className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                    type="text"
                    ref={task} />
                <button
                    className="text-stone-700 hover:text-stone-950"
                    onClick={handleAddTask}
                >Add Task
                </button>
            </div>
            {taskList?.length === 0 && <p>This project does not have any tasks yet.</p>}
            {taskList?.length > 0 && taskList.map((task) =>
                <ul
                    key={task.id}
                    className="p-4 mt-8 rounded-md bg-stone-100">
                    <li
                        className="flex justify-between my-4">
                        {task.task}
                        <button onClick={() => handleDelete(task.id)}>Clear</button>
                    </li>
                </ul>
            )
            }

        </div>
    )
}

export default Tasks;