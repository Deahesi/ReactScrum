import {IProject, ITable} from "./Project.interface";

export enum ProjectActionTypes {
    ADD_PROJECTS = 'FETCH_PROJECTS',
    SET_PROJECT = 'SET_PROJECT',
    SET_TABLE = 'SET_TABLE',
}

export interface ProjectState {
    projects: IProject[]
    currentProject?: IProject
    currentTable?: number
}

export interface AddProjectsAction {
    type: ProjectActionTypes.ADD_PROJECTS
    payload: IProject[]
}

export interface SetCurrentProjectAction {
    type: ProjectActionTypes.SET_PROJECT
    payload: number
}

export interface SetCurrentTableAction {
    type: ProjectActionTypes.SET_TABLE
    payload: number
}

export type ProjectAction = AddProjectsAction | SetCurrentProjectAction | SetCurrentTableAction
