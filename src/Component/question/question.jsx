import style from './question.module.css'
import{fnValidate} from './Validations'
import { inputControls } from './configurations'
import {TextArea} from './reuseable/TextArea'
import {Input} from './reuseable/Input'
import {Select} from './reuseable/Select'
import { useState } from 'react'
import {ServerCall} from '../../includes/common/ServerCall'
export const Question=()=>{

    const [input,setInput]=useState(inputControls); //inputcontrol came from configuration.jsx file
    const [isChecked,setIsChecked] = useState(false) ;
    const fnUserinput=(event)=>{
        const {value,name}=event.target;
        const _input=[...input];  //copied input data into _input.
        let _inputObj=_input.find((obj)=>name===obj.name); //true //by default arrow function return, even if we not write return
        //yha par inputobj me inputControls ka copy nhi balki uska reference ayega aur jo bhi chnage hoga wo original data me reflect hoga.
        
        _inputObj.value=value; //inputControls me ek aur 'value' naam  ka key:value pair add krdega.
        if(_inputObj.required){
            fnValidate(_inputObj);
            setInput(_input);
        }
    }

    const btnclck=()=>
        {
         const _input=[...input]; //copied input into _input; but here will be original reference of input
         const ObjVal={};
         _input.forEach((obj)=>
            {
            ObjVal[obj.name]=obj.value;
            if (obj.required) 
                {fnValidate(obj);}
            })


            const isInvalid= _input.some((obj)=>{obj.errorMsg});//agar errormsg mila to form is invalid
         console.log('is valid? ',isInvalid);
         if(isInvalid){
             setInput(_input);
             setIsChecked(true);
             ServerCall.sendPost({ "data":ObjVal})
             .then((res)=>{
                const {acknowledged,insertedId}=res.data;
                if(acknowledged && insertedId)
                {
                    alert('Success');
                }
                else{
                    alert('Fail');
                    
                }
                
             })
             .catch((res)=>{
                // alert('Somehing wrong'); 
                console.log('error in network')})
            return;
         }
         
    }
    const fnCheckChange=(event)=>{
        // console.log('Hi Change '+event.target.value,event.target.id,event.target.name,event.target.checked);
        setIsChecked(event.target.checked);
    }
// --------------------------------------------Rendering Start from here---------------------------------------------------------------


    return(<div className={`container-fluid ${style.questioncss}`}>{/* module css ke lie hum style.filename ka use krte hai */}
    <h4 className='text-center'>Im Question Component</h4>
    {
        inputControls.map((eleObj,i)=>{
            const attribute={...eleObj,fnUserinput};// fnGetinput<=fnGetinput(Key):fnGetinput(Value); shothand property
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