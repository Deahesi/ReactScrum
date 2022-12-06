import {DetailedHTMLProps, HTMLAttributes} from "react";
import {ITaskList} from "../../interfaces/Project.interface";

export interface TaskListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    list: ITaskList
}
