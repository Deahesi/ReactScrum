import {DetailedHTMLProps, HTMLAttributes} from "react";
import {IProject} from "../../interfaces/Project.interface";

export interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    loading: boolean
    projects?: IProject[]
}
