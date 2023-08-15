import {TaskCard} from "../TaskCard";
import {
    ColumnTile,
    ColumnTitleContainer,
    ColumnTitle,
    TasksColumn,
    TypographyLineColumn,
} from "./Column.styled.tsx";
import {FunctionComponent} from "react";
import {Task, TaskArray} from "../index.tsx";

export type ColumnProps = {
    title: string,
    tasksArray: TaskArray;
    tasks: TaskArray;
    fetchTasks(): object;
}

export const Column: FunctionComponent<ColumnProps> = (props) => {
    const title = props.title;
    const fetchTasks = props.fetchTasks;

    return (
        <ColumnTile>
            <ColumnTitleContainer>
                <ColumnTitle>{title}</ColumnTitle>
            </ColumnTitleContainer>
            <TypographyLineColumn></TypographyLineColumn>
            <TasksColumn>
                {props.tasks.map((task:Task) => {
                    return (
                        <TaskCard task={task} fetchTasks={fetchTasks} />
                        // <p>{task.title}</p>
                    )
                })}
            </TasksColumn>
        </ColumnTile>
    )
}