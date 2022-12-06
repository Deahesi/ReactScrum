export interface ITask {
    description: string
}

export interface ITaskList {
    name: string
    id: number
    tasks: ITask[]
    table_id: number
}

export interface ITable {
    name: string
    id: number
    project_id: number
}

export interface IProject {
    name: string
    id: number
}
