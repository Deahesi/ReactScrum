import {DetailedHTMLProps, HTMLAttributes} from "react";
import {IProject, ITaskList} from "../../interfaces/Project.interface";

export interface SelectProjectProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    projects: IProject[],
    currentProject: IProject,
    setCurrentProject: (project: number) => void
}
