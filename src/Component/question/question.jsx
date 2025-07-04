import style from './question.module.css'
import { inputControls } from './configurations'
import {TextArea} from './reuseable/TextArea'
import {Input} from './reuseable/Input'
import {Select} from './reuseable/Select'
import { useState } from 'react'

export const Question=()=>{
    const [input,setInput]=useState(inputControls);
    return(<div className={style.questioncss}>
    <h4 >Im Question</h4>
    {/* <TextArea lbl="Question" name="que" />
    <Input type="text" lbl="Option1" name="opt1"/>
    <Input type="text" lbl="Option2" name="opt2"/>
    <Input type="text" lbl="Option3" name="opt3"/>
    <Input type="text" lbl="Option4" name="opt4"/>
    <Select/> */}

    {
        inputControls.map((eleObj,i)=>{
            switch(eleObj.tag){
                case 'input':
                    // <Input lbl={} name={} type={}/>
                    return <Input key={'input'+i} {...eleObj}/>
                case 'textarea':
                    return <TextArea key={'textarea'+i} {...eleObj} />
                case 'select':
                    return <Select  key={'select'+i}{...eleObj} />
            }
        })
    }
    
    </div>)
}