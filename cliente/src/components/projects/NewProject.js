import React, { Fragment, useState, useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const NewProject = () => {

    // state  from constext
    const projectsContext = useContext(projectContext);
    const { newProject, errorForm, showForm, addProject, showError } = projectsContext;

    //state
    const [project, setProject] = useState({
        name: ""
    });

    const { name } = project;

    const onChangeProject = e => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        });
    };

    const onSubmitProject = e => {
        e.preventDefault();

        if (name === '') {
            showError();
            return;
        }

        addProject(project);

        setProject({
            name: ''
        })

    };

    const onClick_newProject = () => {
        showForm();
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-primario btn-block"
                onClick={onClick_newProject}

            >Nuevo Proyecto</button>

            {newProject ? (
                <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProject}>
                    <input
                        type="text"
                        name="name"
                        className="input-text"
                        placeholder="nombre del proyecto"
                        value={name}
                        onChange={onChangeProject}
                    />
                    <input
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Agregar proyecto"
                    />
                </form>
            ) : null

            }
            {errorForm ? <p className="mensaje error">Escriba un nombre para el preoyecto</p> : null}


        </Fragment>
    );
};

export default NewProject;
