import { FunctionComponent } from "react";
import { Task, TaskArray } from "../index.tsx";
import { TaskCard } from "../TaskCard";
import {
    ColumnTile,
    ColumnTitleContainer,
    ColumnTitle,
    TasksColumn,
    TypographyLineColumn,
} from "./Column.styled.tsx";

export type ColumnProps = {
    title: string,
    tasks: TaskArray,
    fetchTasks(): Promise<void>,
}

export const Column: FunctionComponent<ColumnProps> = ({title, tasks, fetchTasks}) => {

    return (
        <ColumnTile>
            <ColumnTitleContainer>
                <ColumnTitle>{title}</ColumnTitle>
            </ColumnTitleContainer>
            <TypographyLineColumn></TypographyLineColumn>
            <TasksColumn>
                {
                    tasks.map((task:Task) => <TaskCard task={task} fetchTasks={fetchTasks} />
                )}
            </TasksColumn>
        </ColumnTile>
    )
}