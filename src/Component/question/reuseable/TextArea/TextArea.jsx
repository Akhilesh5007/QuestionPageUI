import './TextArea.css';
export const TextArea=(props)=>{
    const {lbl,name,required,fnUserinput,errorMsg,placeholder}=props
    return<div className='row'>
        <div className='col-sm-5 text-end'>
            <b>{lbl}{required && <span className="text-danger">*</span> }:</b> 
        </div>
        <div className='col-sm-3'>
            <textarea name={name} onChange={fnUserinput} placeholder={placeholder}></textarea>
        </div>
        <div className="col-sm-4 text-start">
            <b className="text-danger">{errorMsg}</b>
        </div>
    </div>
}
// export function TextArea(props){
//     const {lbl,name}=props
//     return<>
//     <b>{lbl}</b>: <textArea name={name}></textArea>
//     </>
// }