import {DetailedHTMLProps, HTMLAttributes} from "react";
import {IProject, ITable, ITaskList} from "../../interfaces/Project.interface";

export interface SelectTableProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    tables?: ITable[],
    loading: boolean,
    currentTable?: number,
    setCurrentTable: (table_id: number) => void
}
