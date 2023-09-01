import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../shared/components/Layout/Header";
import { Link } from "react-router-dom";
import {
    // BackButton,
    ButtonBar,
    Container,
    Divider,
    TaskCard,
    TaskCardContent,
    TaskCardTitle,
    TaskTitle,
    Paragraph
} from "./TaskView.styled.tsx";
import { Background } from "./TaskView.styled.tsx";
import { apiCall } from "../../shared/utils/apiCall.tsx";
import { Task } from "../ToDoList";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import BackspaceIcon from '@mui/icons-material/Backspace';

export function TaskDetails() {
    const [taskDetails, setTaskDetails] = useState({}) // add circular progress from mui (if detail = null, return circular progress)
    const { taskId } = useParams();

    useEffect(() => {
        fetchTask()
    })

    async function removeTask() {
        await apiCall<Task>(`http://localhost:3000/tasks/${taskId}`, {
            method: 'DELETE'
        });
    }

    async function fetchTask() {
        const postResponse = await apiCall<Task>(`http://localhost:3000/tasks/${taskId}`, {
                method: "GET",
            });
        setTaskDetails(postResponse)
    }

    return (
        <Background>
            <Header />
            <Container>
                <TaskCard>
                    <TaskCardTitle>
                        <TaskTitle>TASK</TaskTitle>
                    </TaskCardTitle>
                    <Divider />
                    <TaskCardContent>
                        <Paragraph><b>Detail:</b>  {taskDetails.title}</Paragraph>
                        <Paragraph><b>Status:</b>  {taskDetails.status}</Paragraph>
                    </TaskCardContent>
                    <Divider />
                    <ButtonBar>
                        <Button color="secondary" variant="contained" startIcon={<EditIcon />}>
                            Edit
                        </Button>
                        <Link to={'/'}>
                            <Button onClick={() => removeTask()} color="secondary" variant="contained" startIcon={<DeleteIcon />}>
                                Delete
                            </Button>
                        </Link>
                        <Link to={'/'}>
                            <Button color="secondary" variant="contained" startIcon={<BackspaceIcon />}>
                                Back
                            </Button>
                        </Link>
                    </ButtonBar>
                </TaskCard>
            </Container>
        </Background>
    )
}