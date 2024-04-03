import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import Sidebar from "./components/Sidebar.jsx";
import NoSelectedProject from "./components/NoSelectedProject.jsx"

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedId: undefined,
    projects: []
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedId: null
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
        projects: [
          ...prevState.projects,
          newProject
        ]
      }
    })
  }

  console.log(projectsState)

  let content;
  if (projectsState.selectedId === null) {
    content = <NewProject onAdd={handleAddProject} />
  } else {
    content = <NoSelectedProject onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
