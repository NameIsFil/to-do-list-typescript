// import React, { ChangeEvent, FunctionComponent, useState} from 'react';
import { FunctionComponent, useState} from 'react';
import {
    InputBar,
    InputBox,
    InputButton,
    InputRow,
} from "./AddTaskInput.styled.tsx";
import { Task, TaskArray } from "../index.tsx";


type AddTaskInputProps = {
    tasksArray: TaskArray,
    setTasksArray: any,
    fetchTasks(): Task[];
}

export const AddTaskInput: FunctionComponent<AddTaskInputProps> = (props) => {
    const [inputValue, setInputValue] = useState(null)

    async function addTask() {
        const response = await fetch("http://localhost:3000/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: inputValue,
                status: "ToDo",
            }),
        });
        props.fetchTasks()
        return response.json();
    }

    type InputEvent = React.ChangeEvent<HTMLInputElement>;

    function handleInput(event:InputEvent) {
        setInputValue(event.target.value)
    }



    return (
        <InputBar>
            <InputRow>
                <InputBox name="addTask" onInput={handleInput} type={"text"}/>
                <InputButton onClick={addTask} value="Add" type={"submit"} />
            </InputRow>
        </InputBar>
    )
}

