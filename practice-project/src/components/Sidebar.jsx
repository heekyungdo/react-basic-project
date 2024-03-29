

function Sidebar({ onHandleAdd, projects, onHandleDetail }) {

    return (
        <div className="w-[35rem] mt-16">
            <div >
                <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-200">YOUR PROJECTS</h1>
                <button onClick={onHandleAdd}>+ Add Project</button>
            </div>
            <ul>
                {projects?.length > 0 && projects.map((project,projectIndex) => (
                    <li key={project.id} onClick={() => onHandleDetail(project.title, projectIndex)}>{project.title}</li>
                ))}
            </ul>
        </div>

    )
}

export default Sidebar;