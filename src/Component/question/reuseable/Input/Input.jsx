import { Fragment } from "react";

export const Input=(props)=>{
    const {lbl,name,type, options}=props;
     const fnGetInputcntrol=()=>{

        switch(type){
            case 'text':
                return <input type={type}  name={name} />
            case 'radio':
                return <>{
                    options.map((opt,indx)=>{
                    return  < Fragment key={"frag"+indx}>
                    <input type={type} name={name} />
                    <span>{opt}</span>
                    </Fragment>
                    
                })

                }
                
                
                </>
        }
    }
    return<>
    <b>{lbl}:</b>
    {fnGetInputcntrol()}
    </>
}