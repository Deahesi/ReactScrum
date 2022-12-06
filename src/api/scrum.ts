import {IProject, ITable} from "../interfaces/Project.interface";
import {projectPlaceholder, stringifyJSON} from "../helpers/helpers";

export const scrum = {
    getProjects(): IProject[] {
        const projects = JSON.parse(localStorage.getItem("projects") || '[]') as IProject[]
        if (!projects.length) {
            localStorage.setItem('projects', stringifyJSON([projectPlaceholder]))
            return JSON.parse(localStorage.getItem("projects") || '[]') as IProject[]
        }
        return projects
    },
    getTables(project_id: number): ITable[] {
        return []
    }
}
