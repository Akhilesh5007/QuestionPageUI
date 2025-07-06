import style from './question.module.css'
import{fnValidate} from './Validations'
import { inputControls } from './configurations'
import {TextArea} from './reuseable/TextArea'
import {Input} from './reuseable/Input'
import {Select} from './reuseable/Select'
import { useState } from 'react'

export const Question=()=>{

    const [input,setInput]=useState(inputControls); //inputcontrol came from configuration.jsx file
    const [isChecked,setIsChecked] = useState(false) ;
    // console.log([...input]);    
    const fnUserinput=(event)=>{
        const {value,name}=event.target;
        const _input=[...input];
        let _inputObj=_input.find((obj)=>name===obj.name); //true //by default arrow function return even if we not write return
        //yha par inputobj me inputControls ka copy nhi balki uska reference ayega aur jo bhi chnage hoga wo original data me reflect hoga.
        
        _inputObj.value=value; //inputControls me ek aur value na ka key:value pair add krdega.
        if(_inputObj.required){
            fnValidate(_inputObj);
            setInput(_input);
        }
    }

    const btnclck=()=>{
        // return;
         const _input=[...input];
         _input.forEach((obj)=>{
            // console.log(obj);
            if (obj.required) {
                console.log('if calleed ')
              fnValidate(obj);  
            }
         })
         const isInvalid= _input.some((obj)=>{obj.errorMsg});//agar errormsg mila to form is invalid
         console.log('isInvalid '+isInvalid);
         if(!isInvalid){
             setInput(_input);
             setIsChecked(false);
            return;
         }   

        // alert('WellDone !!!')
        console.log('clicked')
    }
    const fnCheckChange=(event)=>{
        // console.log('Hi Change '+event.target.value,event.target.id,event.target.name,event.target.checked);
        setIsChecked(event.target.checked);
    }
// --------------------------------------------Rendering Start from here-----------------------------------
    return(<div className={`container-fluid ${style.questioncss}`}>{/* module css ke lie hum style.filename ka use krte hai */}
    <h4 className='text-center'>Im Question</h4>
    {/* <TextArea lbl="Question" name="que" />
    <Input type="text" lbl="Option1" name="opt1"/>
    <Input type="text" lbl="Option2" name="opt2"/>
    <Input type="text" lbl="Option3" name="opt3"/>
    <Input type="text" lbl="Option4" name="opt4"/>
    <Select type="radio" name="select" /> */}
    {
        inputControls.map((eleObj,i)=>{
            const attribute={...eleObj,fnUserinput};// fnGetinput=fnGetinput(Key):fnGetinput(Value); shothand property
            switch(eleObj.tag){
                case 'input':
                    // <Input lbl={} name={} type={}/>
                    return <Input key={'input'+i} {...attribute} />
                case 'textarea':
                    return <TextArea key={'textarea'+i} {...attribute} />
                case 'select':
                    return <Select  key={'select'+i} {...attribute} />
            }
        })
    }
    <div className='row mt-2'>
        <div className='offset-5 col-sm-5'>
            <input type="checkbox" name="checkbxName" id="chckbxId" onChange={fnCheckChange} />
        </div>
        <div className='offset-5 col-sm-5'>
            <button className='btn btn-outline-primary btn-sm ' disabled={!isChecked} onClick={btnclck}>Submit</button> 
            {/* also we can writ -> isChecked ? setIsChecked(false):setIsChecked(true)*/}
        </div>
    </div>
    </div>)
}