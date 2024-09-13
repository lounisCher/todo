import deleteIcon from "../assets/delete.png";
import Tags from "./tag";


const TaskCard=({title, tags, handleDelete, index})=>{
    return(
        <article className="text-center w-3/4 shadow-md">
            <h1 className="text-slate-700 text-xl font-serif font-bold m-4">{title}</h1>
            <div className="flex justify-between items-center p-4">
                <div className="grid grid-cols-2 gap-3">
                    {tags.map((tag, index)=>(
                        <Tags key={index} Tagname={tag} selected/>
                    ))}
                </div>
                <div onClick={()=>handleDelete(index)}>
                     <img className="w-5 h-6 opacity-50 
                     hover:opacity-15
                     " src={deleteIcon} alt='' /> 
                     </div>
            </div>
        </article>
    )
}
export default TaskCard;