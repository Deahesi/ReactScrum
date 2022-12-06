import {useContext} from "react";
import {AppContext} from "../context/app.context";
import {TaskList} from "../components/TaskList/TaskList";

export default function Scrum() {
    const {projects, setProjects} = useContext(AppContext)

    return (
        <>
            {/*<TaskList list={projects[0].tables[0]}/>*/}
        </>
    )
}
