import {TaskListProps} from "./TaskList.props";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider, DragSourceMonitor, DropTargetMonitor, useDrop} from "react-dnd";
import {Task} from "../Task/Task";
import {inspect} from "util";
import styles from './TaskList.module.css'
import {useEffect, useState} from "react";
import {ITask, ITaskList} from "../../interfaces/Project.interface";
import {useDispatch} from "react-redux";

export const TaskBoard = ({tasks, move}: {tasks: ITaskList, move: (item: any, to: number) => void}) => {
    const [{isOver}, drop] = useDrop(() => ({
        accept: 'task',
        drop: (item) => moveTaskToBoard(item),
        collect: (monitor: DropTargetMonitor) => ({
            isOver: monitor.isOver()
        })
    }))

    const moveTaskToBoard = (item: any) => {
        move(item, tasks.id)
    }

    return (
        <div ref={drop} key={tasks.id} className={styles.taskList}>
            <h3>{tasks.name}</h3>
            <div className={styles.tasks}>
                {tasks.tasks.map((task: ITask) => (
                    <Task key={task.id} task={task}/>
                ))}
            </div>
        </div>
    )
}

export const TaskList = ({list, moveTask, className, ...props}: TaskListProps) => {
    const [computedList, setComputedList] = useState<ITaskList[]>(JSON.parse(JSON.stringify(list)))

    const moveTaskToBoard = ({task}: any, to: number) => {

        //TODO: Бред какой-то написал, доделать DND перестановку задач
        const fromIdx = computedList.findIndex((l) => l.id === task.list_id)
        const toIdx = computedList.findIndex((l) => l.id === to)
        const newFromTasks = computedList[fromIdx].tasks.filter((t) => t.id !== task.id)
        const newToTasks = [...computedList[toIdx].tasks, Object.assign(task, {list_id: computedList[toIdx].id})]
        const newList = JSON.parse(JSON.stringify([...computedList]))
        console.log(computedList[toIdx].tasks)
        newList[fromIdx] = JSON.parse(JSON.stringify({...computedList[fromIdx], tasks: newFromTasks}))
        newList[toIdx] = JSON.parse(JSON.stringify({...computedList[toIdx], tasks: newToTasks}))
        console.log(newToTasks)
        setComputedList((prev: ITaskList[]) => {

            return newList
        })
    }

    return (
        <>
            {computedList.map((tasks) => (
                <TaskBoard key={tasks.id} tasks={tasks} move={moveTaskToBoard}/>
            ))}
        </>
    )
}
