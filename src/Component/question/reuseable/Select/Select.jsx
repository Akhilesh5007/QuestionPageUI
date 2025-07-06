export const Select=(props)=>{
    const {lbl,name,options,required,fnUserinput,errorMsg}=props;

    return <div className="row">

        <div className="col-sm-5 text-end">
            <b>{lbl} {required && <span className="text-danger">*</span> }:</b>
        </div>

        <div className="col-sm-3">
        <select name={name} onChange={fnUserinput} id="selects">
            <option value="" >Please Select</option>
            {
                options.map((ele,i)=>{
                    return <option key={"option"+i}  value={ele} >{ele}</option>

                })
            }
        </select>
        </div>
        <div className="col-sm-4 text-start">
            <b className="text-danger">{errorMsg}</b>
        </div>
    </div>
}