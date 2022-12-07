import {DetailedHTMLProps, HTMLAttributes} from "react";
import {ITaskList} from "../../interfaces/Project.interface";

export interface TaskListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    list: ITaskList[],
    moveTask?: (task_id: number, from: number, to: number) => void
}
