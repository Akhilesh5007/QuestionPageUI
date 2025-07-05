import { Fragment } from "react";

export const Input=(props)=>{
    const { lbl, name, type, options,required,fnUserinput,errorMsg,placeholder} = props;
    const fnGetInputcntrol = () => {
        switch (type) {
            case 'text':
                return <input type={type} name={name} onChange={fnUserinput} placeholder={placeholder}/>
            case 'radio':
                return <>{
                    options.map((opt, indx) => {
                        return < Fragment key={"frag" + indx}>
                            <input type={type} name={name} value={opt} onChange={fnUserinput} />
                            <span>{opt}</span>
                        </Fragment>
                    })}</>
        }
    }
    return<>
    <div className="row mt-1">
        <div className="col-sm-5 text-end">
             
            <b>{lbl} {required && <span className="text-danger">*</span> } :</b>
        </div>
        <div className="col-sm-3">
            {fnGetInputcntrol()}
        </div>
        <div className="col-sm-4 text-start">
            <b className="text-danger">{errorMsg}</b>
        </div>     
    </div>
   
    
    </>
}