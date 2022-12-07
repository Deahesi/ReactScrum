import styles from './Task.module.css'
import {TaskProps} from "./Task.props";
import cn from 'classnames'
import {inspect} from "util";
import {DragSourceMonitor, useDrag} from "react-dnd";

export const Task = ({ task, className, ...props }: TaskProps) => {

    const [{isDragging}, drag] = useDrag(() => ({
        type: 'task',
        item: {
            task
        },
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: monitor.isDragging()
        })
    }))

    return (
        <div ref={drag} className={cn(styles.task, {[styles.drag]: isDragging})} >
            {task.description}
        </div>
    )
}
