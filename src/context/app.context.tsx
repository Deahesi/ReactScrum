import {createContext, PropsWithChildren, ReactNode, useEffect, useState} from "react";
import {IProject, ITable} from "../interfaces/Project.interface";

export interface IAppContext {
    projects: IProject[],
    tables: ITable[],
    setProjects?: (p: IProject[]) => void,
    setTables?: (p: ITable[]) => void,
}

export const AppContext = createContext<IAppContext>({ projects: [], tables: [] })

export const AppContextProvider = ({ projects, tables, children }: PropsWithChildren<IAppContext>): JSX.Element => {
    const [projectsState, setProjectsState] = useState<IProject[]>(projects)
    const [tablesState, setTablesState] = useState<ITable[]>(tables)

    const setProjects = (newProjects: IProject[]) => {
        setProjectsState(newProjects)
    }


    const setTables = (newTables: ITable[]) => {
        setTablesState(newTables)
    }

    return <AppContext.Provider value={{ projects, tables, setProjects, setTables }}>
        {children}
    </AppContext.Provider>
}
