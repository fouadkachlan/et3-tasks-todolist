import React from 'react';
import { ITask } from '../interfaces/ITask';
import CustomeDiv from '../CustomDiv/CustomDiv';
import CustomButton from '../CustomButton/CustomButton';
import CustomSpan from '../CustomSpan/CustomSpan';


interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask: React.FC<Props> = ({ task, completeTask }) => {
  return (
    
    <CustomeDiv style={{
      width: '500px',
      height: '50px',
      display: 'flex',
      color: 'white',
      margin: '15px'
    }}>
      <CustomeDiv style={{
        flex: 80,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <CustomSpan style={{
          display: 'grid',
          placeItems: 'center',
          border: '1px solid white',
          width: '100%',
          height: '100%',
          fontSize: '18px',
          borderRight: 'none',
          backgroundColor: 'tomato'
        }}>{task.taskName}</CustomSpan>
        <CustomSpan style={{
          display: 'grid',
          placeItems: 'center',
          border: '1px solid white',
          width: '100%',
          height: '100%',
          fontSize: '18px',
          borderRight: 'none',
          backgroundColor: 'tomato'
        }}>{task.deadline}</CustomSpan>
      </CustomeDiv>
      <CustomButton onClick={() => completeTask(task.taskName)} style={{
        flex: 20,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height: '100%',
        border: 'none',
        backgroundColor: 'lightseagreen',
        borderTopRightRadius: '8px',
        borderBottomRightRadius: '8px',
        color: 'white',
        cursor: 'pointer'
      }}>X</CustomButton>
    </CustomeDiv>
  );
}

export default TodoTask;
