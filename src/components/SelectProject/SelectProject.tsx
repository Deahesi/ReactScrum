import React, {useState} from 'react';
import {SelectProjectProps} from "./SelectProject.props";
import styles from "./SelectProject.module.css";
import SelectProjectIcon from '../../assets/triangleselect.svg'
import {Link, NavLink} from "react-router-dom";

const SelectProject = ({setCurrentProject, projects, currentProject}: SelectProjectProps) => {
    const [open, setOpen] = useState<boolean>(false)

    const handleSetProject = (id: number) => {
        setOpen(false)
        setCurrentProject(id)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.selectProject} onClick={() => setOpen(!open)}>
                <div className={styles.projectName}>{currentProject.name}</div>
                <img className={styles.arrow} src={SelectProjectIcon}/>
            </div>
            {open && <div className={styles.selectProjectModal}>
                {projects.filter((p) => p.id !== currentProject.id).map((project) => (
                    <a onClick={() => handleSetProject(project.id)} className={styles.selectProjectLink} key={project.id}>
                        {project.name}
                    </a>
                ))}
            </div>}
        </div>

    );
};

export default SelectProject;
