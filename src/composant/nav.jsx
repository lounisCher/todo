import { useState } from "react";
import Tags from "./tag";

const Nav=({setTaskData})=>{
    const [tasks, setTask] = useState({
        task: "",
        status: "To do",
        tags: [],
    });

    const checkTag=(tag)=>{
        return tasks.tags.some(item=>item===tag);
    };
    const selectTag=(tag)=>{
        if(tasks.tags.some(item=>item===tag)){
           const filterTags = tasks.tags.filter(item=>item!==tag);
           setTask(prev=>{
            return {...prev, tags:filterTags}
           });
        }else{
            setTask(prev=>{
                return{...prev, tags: [...prev.tags,tag]}
            });
        };
    };


    const handleChange=(e)=>{
            const {name, value} = e.target;
            setTask((prev)=>{
                return {...prev, [name]: value}
            });

    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(tasks.task==="") return;
        setTaskData(prev=>{
            return [...prev, tasks];
        });
        setTask({
            task: "",
            status: "To do",
            tags: [],
        });
    }
    

    return(
        <div>
        <header className="m-10">
            <form onSubmit={handleSubmit}>
             <div className="flex justify-center items-center gap-3">
                <input type="text" name="task"
                value={tasks.task}
                placeholder="Enter your task"
                className="w-2/4 h-6 p-4 border-blue-300 border-2 outline-none "
                onChange={handleChange}
                />
                <div className="w-1/4">
                <select
                name="status"
                value={tasks.status}
                 className="w-full h-9 rounded-md p-2 bg-slate-700 border border-slate-800 text-white font-serif font-bold shadow-md  hover:ring-slate-700 hover:ring-1"
                 onChange={handleChange}
                 >
                    <option value="todo">To do </option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                </select>
                </div>
                <button className="w-1/4 h-9 bg-blue-500 rounded-md hover:bg-blue-400 
                hover:ring-1 ring-blue-300 shadow-md
                " type="submit">
                    <p className="text-white font-serif font size-auto font-bold
                    ">ADD</p>
                </button>
                </div> 
                <div className="flex gap-2 m-8 max-md:grid max-md:grid-cols-3">
                <Tags Tagname="Work" selectTag={selectTag} selected={checkTag("Work")}/>
                <Tags Tagname="Personal" selectTag={selectTag} selected={checkTag("Personal")}/>
                <Tags Tagname="Studies" selectTag={selectTag} selected={checkTag("Studies")}/>
                <Tags Tagname="Health" selectTag={selectTag} selected={checkTag("Health")}/>
                <Tags Tagname="Finance"selectTag={selectTag} selected={checkTag("Finance")}/>
                </div>
            </form>
           
            
        </header>
        </div>
    )
}

export default Nav;