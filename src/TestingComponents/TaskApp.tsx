import {useState} from "react";

export function TaskApp() {

    const initialTasks = [
        {id: 0, text: 'Visit Kafka Museum', done: true},
        {id: 1, text: 'Watch a puppet show', done: false},
        {id: 2, text: 'Lennon Wall pic', done: false},
    ];
    const [tasks, setTasks] = useState(initialTasks);
    let nextId= tasks.length;


    function handleAddTask(text){

        setTasks(
            [
                ...tasks,
                {
                    id: nextId,
                    text: text,
                    done: false,
                },
            ]
        );
    }

    function handleDeleteTask(taskId){
        setTasks(tasks.filter(task => task.id !== taskId));
    }

    // function handleChangeTask(task){
    //     setTasks(
    //         tasks.map((t) => {
    //             if (t.id === task.id) {
    //                 return task;
    //             } else {
    //                 return t;
    //             }
    //         })
    //     );
    // }
    //
    //
    // function handleDeleteTask(taskId){
    //     setTasks(tasks.filter((t) => t.id !== taskId));
    // }

    return (
        <div className='w-full h-[600px] bg-slate-200 flex flex-col items-center justify-center gap-[30px]'>
            <h1>My Task List</h1>
            <AddTask onAddTask={handleAddTask}/>
            <TaskList tasks={tasks} onDeleteTask={handleDeleteTask}></TaskList>
        </div>
    );
}

export function AddTask({onAddTask}){

    const [text, setText] = useState('');
    function handleOnChange(e) {
        setText(
            e.target.value
        )
    }

    return (
        <div className='flex flex-row gap-5'>
            <input type="text" className='w-[250px] p-2 text-blue-800'
                    onChange={(e)=>handleOnChange(e)}/>
            <button className='bg-violet-300 shadow-lg rounded hover:bg-violet-400 p-2'
                    onClick={()=>onAddTask(text)}>Add Task</button>
        </div>
    );
}

export function TaskList({tasks,onDeleteTask}){
    // const tasksList = tasks.map((t) => {})
    return (
        <div className='flex flex-col gap-5'>

            {tasks.map((task,i) => {

                return (
                    <div className='flex flex-row gap-5'>
                        <input type={'checkbox'} className='w-[50px] p-2 text-blue-800'/>
                        {task.id}{' --------  '}{task.text}
                        <button className='bg-green-400 shadow-lg rounded hover:bg-green-600 p-2'
                            >Edit</button>
                        <button className='bg-green-400 shadow-lg rounded hover:bg-green-600 p-2'
                            onClick={()=>onDeleteTask(task.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    );
}