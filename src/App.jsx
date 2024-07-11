import { useState } from 'react';
import ProjectsSidebar from './components/ProjectsSidebar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';

const App = () => {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleStartAddProjects = () => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  };

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProjects} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProjects} />
      {content}
    </main>
  );
};

export default App;
