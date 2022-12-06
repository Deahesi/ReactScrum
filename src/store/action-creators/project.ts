import {ProjectAction, ProjectActionTypes} from "../../interfaces/ProjectReducer.interface";
import {IProject} from "../../interfaces/Project.interface";

export const fetchedProjects = (data: IProject[]) => ({ type: ProjectActionTypes.ADD_PROJECTS, payload: data })
export const setCurrentProject = (data: number) => ({ type: ProjectActionTypes.SET_PROJECT, payload: data })
export const setCurrentTable = (data: number) => ({ type: ProjectActionTypes.SET_TABLE, payload: data })
