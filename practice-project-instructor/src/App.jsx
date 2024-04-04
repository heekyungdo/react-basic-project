import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import Sidebar from "./components/Sidebar.jsx";
import NoSelectedProject from "./components/NoSelectedProject.jsx"
import SelectedProject from "./components/SelectedProject.jsx";

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedId: undefined,
    projects: []
  });

  function handleSelectProejct(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedId: id
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedId: null
      };
    });
  }

  function handleCancleAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedId: undefined
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Date.now()
      };

      return {
        ...prevState,
        selectedId: undefined,
        projects: [
          ...prevState.projects,
          newProject
        ]
      }
    })
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedId: undefined,
        projects: prevState.projects.filter(project => project.id !== prevState.selectedId)
      };
    });
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedId);

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />;

  if (projectsState.selectedId === null) {
    content = <NewProject onAdd={handleAddProject} onCancle={handleCancleAddProject} />
  } else if (projectsState.selectedId === undefined) {
    content = <NoSelectedProject onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProejct}
        selectedProjectId={projectsState.selectedId} />
      {content}
    </main>
  );
}

export default App;
