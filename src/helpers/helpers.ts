import {IProject} from "../interfaces/Project.interface";

export const projectPlaceholder: IProject = {
    name: 'First',
    id: 1
}

export const stringifyJSON: any = (data: any) => {
    if (data === undefined)
        return undefined
    else if (data === null)
        return 'null'
    else if (data.constructor === String)
        return '"' + data.replace(/"/g, '\\"') + '"'
    else if (data.constructor === Number)
        return String(data)
    else if (data.constructor === Boolean)
        return data ? 'true' : 'false'
    else if (data.constructor === Array)
        return '[ ' + data.reduce((acc, v) => {
            if (v === undefined)
                return [...acc, 'null']
            else
                return [...acc, stringifyJSON(v)]
        }, []).join(', ') + ' ]'
    else if (data.constructor === Object)
        return '{ ' + Object.keys(data).reduce((acc: any, k: string) => {
            if (data[k] === undefined)
                return acc
            else
                return [...acc, stringifyJSON(k) + ':' + stringifyJSON(data[k])]
        }, []).join(', ') + ' }'
    else
        return '{}'
}

export const ApiRoutes = {
    projects: {
        get: process.env.REACT_APP_SERVER + '/projects'
    },
    tables: {
        get: process.env.REACT_APP_SERVER + '/tables',
        get_list: process.env.REACT_APP_SERVER + '/tables/lists',
    }
}
