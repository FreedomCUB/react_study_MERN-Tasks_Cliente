import React, { useContext, useEffect} from "react";
import Sidebar from "../layout/Sidebaar";
import Bar from "../layout/Bar";
import FormTasks from "../tasks/FormTasks";
import TasksList from "../tasks/TasksList";

import AuthContext from "../../context/auth/authContext";

const Projects = () => {
  //info auth
  const authContext = useContext(AuthContext);
  const { authUser } = authContext;

  useEffect(() => {
     authUser();
  }, [])



  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <Bar />
        <main>
          <FormTasks />
          <div className="contenedor-tareas">
            <TasksList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
