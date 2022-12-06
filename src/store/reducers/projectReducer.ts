import {ProjectAction, ProjectActionTypes, ProjectState} from "../../interfaces/ProjectReducer.interface";
import {stat} from "fs";



const initialState: ProjectState = {
    projects: [],
    currentProject: undefined,
    currentTable: undefined
}

export const projectReducer = (state = initialState, action: ProjectAction): ProjectState => {
    switch (action.type) {
        case ProjectActionTypes.ADD_PROJECTS:
            return {projects: [ ...state.projects, ...action.payload ], currentProject: state.currentProject}
        case ProjectActionTypes.SET_PROJECT:
            return {projects: state.projects, currentProject: {...(state.projects.find((p) => p.id === action.payload) ?? state.projects[0])}, currentTable: undefined}
        case ProjectActionTypes.SET_TABLE:
            return {projects: state.projects, currentProject: state.currentProject, currentTable: action.payload}
        default:
            return state
    }
}
