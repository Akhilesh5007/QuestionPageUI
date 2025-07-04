import './TextArea.css';
export const TextArea=(props)=>{
    const {lbl,name}=props
    return<>
    <b>{lbl}</b>: <textarea className="textar" name={name}></textarea>
    </>
}
// export function TextArea(props){
//     const {lbl,name}=props
//     return<>
//     <b>{lbl}</b>: <textArea name={name}></textArea>
//     </>
// }