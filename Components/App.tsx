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
    <CustomDiv width="100%" height="100%"  display="flex"  justifyContent="center" alignItems="center"  style={{ backgroundColor: '#f0f0f0'}}>
      <CustomDiv display="flex" justifyContent="center" alignItems="center" width="" height=""
       style={{
          backgroundColor: 'lightseagreen',
          fontStyle: 'oblique',
          color: 'black',
          fontSize: '4vw',
          margin: '2% 0',
          padding: '1%',
          width: '100%'
        }}

       >To Do List Using TypeScript</CustomDiv>
      <CustomDiv width="100%" height="80%" display="flex" alignItems="center" justifyContent="center"
      style={{
          flexDirection: 'column',
          fontFamily: 'Arial, Helvetica, sans-serif',
          backgroundColor: '#fff',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          borderRadius: '10px',
          padding: '2%'
        }
      }>
        <CustomDiv width="100%" height="80%" display="flex" alignItems="center" justifyContent="center"
        style={
            {
            backgroundColor: 'tomato',
            width: '100%',
            marginBottom: '2%',
            borderRadius: '5%',
            padding: '1%'}
          }
          
        >
          <CustomDiv width="100%" height="80%" display="flex" alignItems="center" justifyContent="center"
           style={{ flexDirection: 'column'}}>
            <CustomInput type="text" name="task" placeholder="Task..." value={task} onChange={handleChange} style={{
              width: '100%',
              height: '40px',
              borderRadius: '5%',
              paddingLeft: '10px',
              fontSize: '1.5vw',
              border: '1px solid grey',
              marginBottom: '5%'
            }} />
            <CustomInput type="number" name="deadline" placeholder="Deadline (in Days)..." value={deadline} onChange={handleChange} style={{
              width: '100%',
              height: '40px',
              borderRadius: '5%',
              paddingLeft: '10px',
              fontSize: '1.5vw',
              border: '1px solid grey'
            }} />
          </CustomDiv>
          <CustomButton onClick={addTask} style={{
              width: '100%',
              height: '45%',
              border: 'none',
              borderRadius: '5%',
              cursor: 'pointer',
              backgroundColor: 'lightseagreen',
              color: 'white',
              fontSize: '1.5vw',
              marginTop: '2%',
              marginLeft: '3%',
              marginBottom: '2%'
          }}
          >Add Task</CustomButton>
        </CustomDiv>
        <CustomDiv width="100%" height="" display="flex" alignItems="center" justifyContent="center"
        style={{
          flex: 70,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '2%',
          flexDirection: 'column',
          overflowY: 'auto'
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
