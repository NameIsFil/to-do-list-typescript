import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AddIcon from '@mui/icons-material/Add';
import { grey } from '@mui/material/colors';
import { Link } from "react-router-dom";
import { FunctionComponent } from "react";
import { Task } from "../index.tsx";
import {
    TaskCardContainer,
    TopBar,
    TypographyLineLonger,
    ButtonBar,
    ButtonPreview,
    TaskText
} from "./TaskCard.styled.tsx";

type TaskCardProps = {
    task: Task,
    fetchTasks(): Promise<void>;
}

export const TaskCard: FunctionComponent<TaskCardProps> = (props) => {
    const task = props.task

    async function removeTask(task:Task) {
        const postResponse = await fetch(`http://localhost:3000/tasks/${task.id}`, {
            method: 'DELETE'
        });
        await props.fetchTasks()
        return postResponse;
    }

    async function changeTaskStatus(task:Task, taskStatus:string) {
        const postResponse = await fetch(`http://localhost:3000/tasks/${task.id}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({
                status: taskStatus,
            }),
        });
        await props.fetchTasks()
        return postResponse;
    }

    function moveRight(task:Task) {
        if(task.status === "ToDo") {
            task.status = "Doing";
            changeTaskStatus(task, task.status)
            return;
        }
        if(task.status === "Doing") {
            task.status = "Done";
            changeTaskStatus(task, task.status);
            return;
        }
        if(task.status === "Done") {
            return;
        }
    }

    function moveLeft(task:Task) {
        if(task.status === "ToDo") {
            return;
        }
        if(task.status === "Doing") {
            task.status = "ToDo";
            changeTaskStatus(task, task.status);
            return;
        }
        if(task.status === "Done") {
            task.status = "Doing";
            changeTaskStatus(task, task.status);
            return;
        }
    }

    return (
        <TaskCardContainer key={task.id}>
            <TopBar>
                <TaskText>{task.title}</TaskText>
                <Link to={`/details/${task.id}`}>
                    <AddIcon sx={{ color: grey[100] }} />
                </Link>
            </TopBar>
            <TypographyLineLonger />
            <ButtonBar>
                <ButtonPreview onClick={() => moveLeft(task)}>
                    <ArrowLeftIcon sx={{ color: grey[100] }} />
                </ButtonPreview>
                <ButtonPreview onClick={() => removeTask(task)}>
                    <HighlightOffIcon sx={{ color: grey[100] }} />
                </ButtonPreview>
                <ButtonPreview onClick={() => moveRight(task)}>
                    <ArrowRightIcon sx={{ color: grey[100] }} />
                </ButtonPreview>
            </ButtonBar>
        </TaskCardContainer>
    )
}