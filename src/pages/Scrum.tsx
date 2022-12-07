import {AppContext} from "../context/app.context";
import {TaskList} from "../components/TaskList/TaskList";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useApi} from "../hooks/useApi";
import {IProject, ITaskList} from "../interfaces/Project.interface";
import {ApiRoutes} from "../helpers/helpers";
import {useEffectOnce} from "../hooks/useEffectOnce";
import {useEffect} from "react";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";

export default function Scrum() {
    const table = useTypedSelector(state => state.project.currentTable)
    const { data: lists, request, loading } = useApi<ITaskList[]>(ApiRoutes.tables.get_list, 'post')
    useEffectOnce(() => {
        console.log(table)
        request({
            data: { id: table }
        })
    })
    useEffect(() => {
        console.log(table)
        request({
            data: { id: table }
        })
    }, [table])

    return (
        loading || !lists ? <div>Loading...</div> :
        <div>
            <DndProvider backend={HTML5Backend}>
                <TaskList list={lists}/>
            </DndProvider>
        </div>
    )
}
