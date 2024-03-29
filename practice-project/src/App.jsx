import { useState, useRef } from "react";
import AddProjectForm from "./components/AddProjectForm";
import Sidebar from "./components/Sidebar";
import NoProject from "./components/NoProject";
import Tasks from "./components/Tasks";

function App() {
  const [openProjectForm, setOpenProjectForm] = useState(false)
  const [project, setProject] = useState([])
  const [showDetail, setShowDetail] = useState(false)
  const [currentProject, setCurrentProject] = useState({})

  const refs = {
    title: useRef(),
    description: useRef(),
    date: useRef()
  };

  const handleSave = async () => {
    if (!refs.title.current.value) return;
    if (!refs.description.current.value) return;
    if (!refs.date.current.value) return;

    await setProject(prevProject => [
      ...prevProject,
      {
        id: Date.now(),
        title: refs.title.current.value,
        description: refs.description.current.value,
        date: refs.date.current.value
      }
    ])
    setOpenProjectForm(false);
    setShowDetail(false);
  }
  console.log(project)
  const handleProjectAdd = () => {
    setOpenProjectForm(true);
  }

  const handleProjectDetail = (title, index) => {

    if (project[index].title === title) {
      setShowDetail(true);
      setCurrentProject(project[index])
    }
    setOpenProjectForm(false);
  }

  const handleProjectDelete = async (projectId) => {
    await setProject(project.filter(eachProject => eachProject.id != projectId))
    setShowDetail(false);

  }

  return (
    <div style={{ display: 'flex', padding: '50px 70px' }}>
      <Sidebar
        projects={project}
        onHandleAdd={handleProjectAdd}
        onHandleDetail={handleProjectDetail} />
      {!openProjectForm && !showDetail &&
        <NoProject onHandleAdd={handleProjectAdd} />}
      {openProjectForm &&
        <AddProjectForm
          ref={refs}
          onSave={handleSave} />
      }
      {!openProjectForm && showDetail &&
        <Tasks
          onDeleteProject={handleProjectDelete}
          project={currentProject} />
      }
    </div>
  );
}

export default App;
