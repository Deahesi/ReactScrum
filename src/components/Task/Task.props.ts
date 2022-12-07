import {DetailedHTMLProps, HTMLAttributes} from "react";
import {ITask, ITaskList} from "../../interfaces/Project.interface";

export interface TaskProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    task: ITask
}
