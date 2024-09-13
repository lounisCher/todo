import Todo from "../assets/direct-hit.png";
import TaskCard from "./TaskCard";

const TaskCol = ({ name, img, tasks, status, handleDelete}) => {
  return (
    <section className="border border-slate-800 w-3/4 h-screen m-3 rounded-md shadow-lg flex flex-col">
      <h2 className="flex gap-3 m-4 items-center justify-center text-4xl font-mono font-bold text-slate-700 border rounded-md border-slate-800">
        <img src={img} alt="" className="w-8" />
        {name}
      </h2>

      
      <div className="flex-1 overflow-y-auto px-4 py-2 flex flex-col items-center
      scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-slate-200 scrollbar-thumb-rounded">
        {tasks.map(
          (task, index) =>
            task.status === status && (
              <TaskCard key={index} title={task.task} tags={task.tags} handleDelete={handleDelete} index={index} />
            )
        )}
      </div>
    </section>
  );
};

export default TaskCol;
