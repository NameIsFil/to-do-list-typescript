import { useMemo, useState, useEffect } from 'react';
import { Column } from "./Column";
import { AddTaskInput } from "./AddTaskInput";
import {
  DesktopBackground,
  TopBar,
  LogoBar,
  Logo,
  LogoText,
  BottomBar,
  InputField,
  Title,
  TypographyLine,
  ColumnsContainer,
} from './ToDoList.styled.tsx';
import {apiCall} from "../../shared/utils/apiCall.tsx";

export type Task = {
  id: number,
  status: string,
  title: string,
}

export type TaskArray = Task[]

export function ToDoList() {
  const [tasksArray, setTasksArray] = useState<TaskArray>([])

  useEffect(() => {
    fetchTasks()
  }, [])

  const {toDo, doing, done} = useMemo(() => {
    const toDo:TaskArray = [];
    const doing:TaskArray = [];
    const done:TaskArray = [];

    tasksArray.forEach((task:Task) => {
      if(task.status === "ToDo") {
        toDo.push(task)
      }
      if(task.status === "Doing") {
        doing.push(task)
      }
      if(task.status === "Done") {
        done.push(task)
      }
    })
    return {toDo, doing, done}
  }, [tasksArray])

  async function fetchTasks() {
    const postResponse = await apiCall<TaskArray>("http://localhost:3000/tasks", {
      method: "GET",
    });
    setTasksArray(postResponse)
  }

  // async function fetchTasks() {
  //   const postResponse = await fetch(`http://localhost:3000/tasks`);
  //   const tasksData = await postResponse.json();
  //   setTasksArray(tasksData)
  // }

  return (
      <DesktopBackground>
        <TopBar>
          <LogoBar>
            <Logo />
            <div>
              <LogoText>TASKMASTER</LogoText>
            </div>
          </LogoBar>
        </TopBar>
        <BottomBar>
          <InputField>
            <Title>To Do List</Title>
            <TypographyLine></TypographyLine>
            <AddTaskInput tasksArray={tasksArray} setTasksArray={setTasksArray} fetchTasks={fetchTasks}/>
          </InputField>
          <ColumnsContainer>
            <Column fetchTasks={fetchTasks} title="To Do" tasks={toDo}/>
            <Column fetchTasks={fetchTasks} title="Doing" tasks={doing}/>
            <Column fetchTasks={fetchTasks} title="Done" tasks={done}/>
          </ColumnsContainer>
        </BottomBar>
      </DesktopBackground>
  )
}