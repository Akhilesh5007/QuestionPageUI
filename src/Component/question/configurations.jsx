 export const inputControls = [
    {
        lbl:"Question",
        name:"queArea",
        tag:"textarea",
        required:true,
        criteria:['Min10Chars','Required'],
        placeholder:'Write Some Text...',
        // value:"Null",
    },
    {
        lbl:"Option 1",
        name:"opt1",
        type:"text",
        tag:"input",
        required:true,
        criteria:['Required','Email'],
        placeholder:'Write Email',
    }, 
    {
        lbl:"Option 2",
        name:"opt2",
        type:"text",
        tag:"input",
        required:false,
        placeholder:'Name',
    },   
    {
        lbl:"Option 3",
        name:"opt3",
        type:"text",
        tag:"input",
        required:true,
        criteria:['Required','Password'],
        placeholder:'Password',
    },
    {
        lbl:"Option 4",
        name:"opt4",
        type:"text",
        tag:"input",
        required:false,
        placeholder:'Location',
        
    },   
    {
        lbl:"Question Type",
        name:"Questype",
        type:"radio",
        options:['Single','Multiple'],
        tag:"input",
        required:true,
        criteria:['Required'],
    }, 
    {
        lbl:"Answer",
        name:"ans",
        options:['A','B','C','D'],
        tag:"select",
        required:false,
        placeholder:'Your Answers',
    }

]