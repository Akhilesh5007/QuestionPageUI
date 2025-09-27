 export const inputControls = [
    {
        lbl:"Question",
        name:"queArea",
        tag:"textarea",
        required:true,
        criteria:['Required','Min5Chars',],
        placeholder:'Write Some Text...',
    },
    {
        lbl:"Option 1",
        name:"opt1",
        type:"text",
        tag:"input",
        required:false,
        criteria:['Required','OnlyDigit'],
        placeholder:'Mobile',
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
        required:false,
        criteria:['Required'],
        placeholder:'Anytext',
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
        required:false,
        criteria:['Required'],
    }, 
    {
        lbl:"Answer",
        name:"ans",
        options:['A','B','C','D','AB','AC','AD','BC','BD','CD','ABC','ABD','BCD','ACD','ABCD'],
        tag:"select",
        required:false,
        placeholder:'Your Answers',
    }

]