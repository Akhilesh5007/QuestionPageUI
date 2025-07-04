export const Select=(props)=>{
    const {lbl,name,options}=props;

    return <div>
        <b>{lbl}:</b>
        <select name={name} id="">
            {
                options.map((ele,i)=>{
                    return <option key={"option"+i} value={ele}>{ele}</option>

                })
            }
        </select>
    </div>
}