import {createContext, useEffect, useState} from 'react'

export const TaskContext = createContext()

export default function TaskContextProvider(props) {
    const [themecolor, setthemecolor] = useState('light');


    const [tasks, setTasks] = useState([])

    const createTask = (title, description)=>{
    let id = tasks.length;
    setTasks([...tasks, {
        id, title, description
    }]);

    }

    const deleteTask = (id)=>{
    setTasks(tasks.filter(t=>t.id !== id));
    }

    useEffect(() => {
        setTasks(data)
    }, [])
    
    return (
        <TaskContext.Provider value={{
            tasks, deleteTask, createTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}
//TO USE IT import TaskContextProvider from './context/TaskContext'
 //<TaskContextProvider></TaskContextProvider>