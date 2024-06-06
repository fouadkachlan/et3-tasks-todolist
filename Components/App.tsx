import React, { ChangeEvent, useState, FC } from 'react';
import { ITask } from './interfaces/ITask';
import TodoTask from './ToDoTask/ToDoTask';
import CustomDiv from './CustomDiv/CustomDiv';
import CustomButton from './CustomButton/CustomButton';
import CustomInput from './CustomInput/CustomInput';

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName !== taskNameToDelete;
    }));
  };

  return (
    <CustomDiv>
      <CustomDiv style={{ 
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'lightseagreen',
        fontStyle: 'oblique',
        color: 'black',
        fontSize:'50px'
       }}>To Do List Using TypeScript</CustomDiv>
      <CustomDiv style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        fontFamily: 'Arial, Helvetica, sans-serif'
      }}>
        <CustomDiv style={{
          flex: 30,
          backgroundColor: 'tomato',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <CustomDiv style={{ display: 'flex', flexDirection: 'column' }}>
            <CustomInput type="text" name="task" placeholder="Task..." value={task} onChange={handleChange} style={{
              width: '200px',
              height: '40px',
              borderBottomLeftRadius: '8px',
              borderTopLeftRadius: '8px',
              paddingLeft: '10px',
              fontSize: '17px',
              border: '1px solid grey'
            }} />
            <CustomInput type="number" name="deadline" placeholder="Deadline (in Days)..." value={deadline} onChange={handleChange} style={{
              width: '200px',
              height: '40px',
              borderBottomLeftRadius: '8px',
              borderTopLeftRadius: '8px',
              paddingLeft: '10px',
              fontSize: '17px',
              border: '1px solid grey'
            }} />
          </CustomDiv>
          <CustomButton onClick={addTask} style={{
            width: '70px',
            height: '87px',
            border: 'none',
            borderBottomRightRadius: '8px',
            borderTopRightRadius: '8px',
            paddingLeft: '10px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'lightseagreen',
            color: 'white'
          }}>Add Task</CustomButton>
        </CustomDiv>
        <CustomDiv style={{
          flex: 70,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '50px',
          flexDirection: 'column'
        }}>
          {
            todoList.map((task: ITask, key: number) => {
              return <TodoTask task={task} key={key} completeTask={completeTask} />
            })
          }
        </CustomDiv>
      </CustomDiv>
    </CustomDiv>
  );
}

export default App;
