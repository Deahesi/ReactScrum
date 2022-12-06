import {LayoutProps} from "./Layout.props";
import React, {FunctionComponent, useEffect, useState} from "react";
import {Sidebar} from "./Sidebar/Sidebar";
import {Header} from "./Header/Header";
import styles from "./Layout.module.css";
import {fetchedProjects} from "../store/action-creators/project";
import {useApi} from "../hooks/useApi";
import {IProject} from "../interfaces/Project.interface";
import {ApiRoutes} from "../helpers/helpers";
import {useLocation} from "react-router";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useEffectOnce} from "../hooks/useEffectOnce";

export default function Layout({children}: LayoutProps) {
    const dispatch = useDispatch()
    const projectState = useTypedSelector(state => state.project.projects)
    const { data: projects, request, loading } = useApi<IProject[]>(ApiRoutes.projects.get, 'post')
    useEffectOnce(() => {
        if (!projectState.length) {
            request()
        }

    })
    useEffect(() => {
        if (projects) {
            dispatch(fetchedProjects(projects))
        }
    }, [projects])

    return (
        <div className={styles.layout}>
            <Header className={styles.header}/>
            <Sidebar projects={projectState} loading={loading} className={styles.sidebar}/>
            {children}
        </div>
    )
}
