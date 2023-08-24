import { ChangeEvent, FunctionComponent, useState } from 'react';
import { TaskArray, Task } from "../index.tsx";
import {
    InputBar,
    InputBox,
    InputButton,
    InputRow,
} from "./AddTaskInput.styled.tsx";
import { apiCall } from "../../../shared/utils/apiCall.tsx";

type AddTaskInputProps = {
    tasksArray: TaskArray,
    setTasksArray: (tasksArray: TaskArray) => void,
    fetchTasks: () => Promise<void>,
}

export const AddTaskInput: FunctionComponent<AddTaskInputProps> = (props) => {
    const [inputValue, setInputValue] = useState<string>()

    async function addTask() {
        await apiCall<Task>("http://localhost:3000/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: inputValue,
                status: "ToDo",
            }),
        });
        await props.fetchTasks()
    }

    type InputEvent = ChangeEvent<HTMLInputElement>;

    function handleInput(event:InputEvent) {
        setInputValue(event.target.value)
    }

    return (
        <InputBar>
            <InputRow>
                <InputBox name="addTask" onInput={handleInput} type={"text"}/>
                <InputButton onClick={() => {addTask()}} value="Add" type={"submit"} />
            </InputRow>
        </InputBar>
    )
}

