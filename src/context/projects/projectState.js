import React, { useReducer } from 'react';
import uuid from 'uuid';


import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {
    FORM_PROJECT,
    FIND_PROJECT,
    ADD_PROJECT,
    ERROR_FORM,
    ACTUAL_PROJECT,
    DELETE_PROJECT
} from '../../types';


const ProjectState = props => {

    const projects = [
        { id: 1, name: 'tienda virtual' },
        { id: 2, name: 'intranet' },
        { id: 3, name: 'sitio web' },
        { id: 4, name: 'MERN' }
    ]

    const initialState = {
        projects: [],
        newProject: false,
        errorForm: false,
        project: null
    }

    const [state, dispatch] = useReducer(projectReducer, initialState)

    const showForm = () => {
        dispatch({
            type: FORM_PROJECT
        })
    }

    const findProjects = () => {
        dispatch({
            type: FIND_PROJECT,
            payload: projects
        })
    }

    const addProject = project => {
        project.id = uuid.v4();
        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
    }

    const showError = () => {
        dispatch({
            type: ERROR_FORM
        })
    }

    const actualProject = projectID => {
        dispatch({
            type: ACTUAL_PROJECT,
            payload: projectID 
        })
    }

    const deleteProject = projectID => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectID
        })
    }





    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                newProject: state.newProject,
                errorForm : state.errorForm,
                project : state.project,
                showForm,
                findProjects,
                addProject,
                showError,
                actualProject,
                deleteProject

            }}

        >
            {props.children}
        </projectContext.Provider>
    )
}
export default ProjectState;