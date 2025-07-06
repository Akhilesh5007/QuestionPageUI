const validationsregexpression = {
    Required:{
        regexpression:/./,
        errorMsg:"Please enter Values",
    },
    Min5Chars :{
        regexpression:/.{5,}/,
        errorMsg:"Should Min 5 Character",
    },
    Exact10Digit:{
        regexpression:/^[0-9]{10}$/,
        errorMsg:"10 digit only",
    },
    OnlyAlpha:{
        regexpression:/^[a-zA-Z]+$/,
        errorMsg:"Alphabets Only",
    },
    Email:{
        regexpression:/^[a-zA-Z][a-zA-Z0-9]*@[a-zA-Z]{2,5}\.[a-z]{2,3}$/,
        errorMsg:"Should be in Email Form", 
    },
    OnlyDigit:{
        regexpression: /^[0-9]+$/,
        errorMsg:"Enter Digits only",
    },
    SpecialCharacterNotAllowed:{
        regexpression:/^[a-zA-Z0-9]+$/,
        errorMsg:"Special Char only",
    },
    ShouldNotAllowedSpace:{
        regexpression:/^\s*$/,
        errorMsg:"Space not allowed",
    },
    Password:{
        regexpression:/(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!= ])/,
        errorMsg:"Min 8 chars[low+Upr+Special+Dgt]",
    }

};

export const fnValidate=(inputObj)=>{
    inputObj.errorMsg='';
    const {value,criteria}=inputObj;
    for (let i = 0; i < criteria.length; i++) {
        // const regObj = validationsregexpression[criteria[i]];
        const {regexpression,errorMsg} = validationsregexpression[criteria[i]];
        if(!regexpression.test(value ||'')){
            // console.log(regexpression.test(value));
            inputObj.errorMsg=errorMsg;
            break;
         }       
    }
    // console.log("inputobj lvl "+ inputObj.lbl);
    // console.log("inputobj name "+ inputObj.name);
    // console.log("inputobj type "+ inputObj.type);
    // console.log("inputobj tag "+ inputObj.tag);
    // console.log("inputobj req "+ inputObj.required);
    // console.log("inputobj errormsg "+ inputObj.errorMsg);
    // console.log("inputobj value "+ inputObj.value);
    // return inputObj;
};