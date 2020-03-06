import React from 'react';
import Sidebar from '../layout/Sidebaar';
import Bar from '../layout/Bar';
import FormTasks from '../tasks/FormTasks';
import TasksList from '../tasks/TasksList';

const Projects = () => {
    return ( 
        <div className="contenedor-app">
            <Sidebar/>
            <div className="seccion-principal">
                <Bar/>
                <main>
                    <FormTasks/>
                    <div className="contenedor-tareas">
                        <TasksList/>
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Projects;