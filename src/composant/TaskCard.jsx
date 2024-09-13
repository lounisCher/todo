import { useState } from "react";
import deleteIcon from "../assets/delete.png";
import Tags from "./tag";
import { CiPen } from "react-icons/ci";

const TaskCard = ({ title, tags, handleDelete, index, editTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        setNewTitle(e.target.value);
    };

    const handleSave = () => {
        editTask(index, newTitle);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setNewTitle(title); 
        setIsEditing(false);
    };

    return (
        <article className="text-center w-3/4 shadow-md">
            {isEditing ? (
                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        value={newTitle}
                        onChange={handleChange}
                        className="w-full h-6 p-4 border-blue-300 border-2 outline-none"
                    />
                    <div className="flex gap-4 justify-center m-8">
                    <button onClick={handleSave} className="w-16 h-8 text-center rounded-md bg-green-400  shadow
                    ring-green-500 ring-2 text-white">Save</button>
                    <button onClick={handleCancel} className="w-16 h-8 text-center rounded-md bg-red-400 ring-2 ring-red-500 shadow text-white">Cancel</button>
                    </div>
                </div>
            ) : (
                <div>
                    <h1 className="text-slate-700 text-xl font-serif font-bold m-4">{title}</h1>
                    <div className="flex justify-between items-center p-4">
                        <div className="grid grid-cols-2 gap-3">
                            {tags.map((tag, index) => (
                                <Tags key={index} Tagname={tag} selected />
                            ))}
                        </div>
                        <div onClick={() => handleDelete(index)}>
                            <img
                                className="w-5 h-6 opacity-50 hover:opacity-15"
                                src={deleteIcon}
                                alt=""
                            />
                        </div>
                        <button onClick={handleEditClick}>
                            <CiPen size={26} />
                        </button>
                    </div>
                </div>
            )}
        </article>
    );
};

export default TaskCard;
