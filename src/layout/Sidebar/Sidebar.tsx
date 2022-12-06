import styles from './Sidebar.module.css'
import {SidebarProps} from "./Sidebar.props";
import cn from 'classnames'
import {useApi} from "../../hooks/useApi";
import {ApiRoutes} from "../../helpers/helpers";
import {useEffect, useState} from "react";
import {IProject, ITable} from "../../interfaces/Project.interface";
import {fetchedProjects, setCurrentProject, setCurrentTable} from "../../store/action-creators/project";
import SelectProject from "../../components/SelectProject/SelectProject";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import SelectTable from "../../components/SelectTable/SelectTable";

export const Sidebar = ({ loading, projects, className, ...props }: SidebarProps) => {
    const { data: tables, loading: loadingTables, request } = useApi<ITable[]>(ApiRoutes.tables.get, 'post')
    const currentProjectState = useTypedSelector(state => state.project.currentProject)
    const currentTableState = useTypedSelector(state => state.project.currentTable)

    const dispatch = useDispatch()


    const setTable = (table_id: number) => {
        dispatch(setCurrentTable(table_id))
    }

    const setProject = (project_id: number) => {
        dispatch(setCurrentProject(project_id))
        request({
            data: {
                id: project_id
            }
        })
    }
    useEffect(() => {
        if (projects?.length) {
            setProject(projects[0].id)

        }
    }, [projects])



    return projects ? (
            <aside className={cn(styles.sidebar, className)} {...props}>
                {projects && currentProjectState && <SelectProject projects={projects} currentProject={currentProjectState} setCurrentProject={setProject}/>}
                <SelectTable currentTable={currentTableState} loading={loadingTables} tables={tables} setCurrentTable={setTable}/>

            </aside>
    ) : (
        <aside className={cn(styles.sidebar, className)} {...props}>

        </aside>
    )
}
