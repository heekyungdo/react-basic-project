import Button from "./Button.jsx";

export default function Sidebar({ onStartAddProject, projects }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold ">Your Proejcts</h2>
            <div>
                <Button onClick={onStartAddProject}>+ Add Project</Button>
            </div>
            <ul>
                {projects?.length > 0 && projects.map((project) => (
                    <li key={project.id}>{project.title}</li>
                ))}
            </ul>
        </aside>
    )
}