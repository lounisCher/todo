

const Tags=({Tagname, selectTag, selected})=>{

    const tagsColors = {
        Work: {backgroundColor:"#1E3A8A"},      
        Personal: {backgroundColor:"#F97316"},  
        Studies: {backgroundColor:"#7C3AED"},   
        Health: {backgroundColor:"#10B981"},
        Finance: {backgroundColor : "#FACC15"},
        DefaultCol: { backgroundColor: "#374151" }, 
      };
      

    return(
        <div>
            <button type="button" className=" w-16 h-8 text-center rounded-md border border-slate-300 shadow"
            onClick={()=>{
                selectTag(Tagname);
            }}
            style={selected? tagsColors[Tagname] : tagsColors.DefaultCol}
            >
               <p className="font-bold font-mono text-white text-xs">{Tagname}</p>
            </button>
        </div>
    )
}
export default Tags;