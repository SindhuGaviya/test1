function swapCase(str){
    let result=''
    for(i=0;i<str.length;i++){
        if(str[i]==str[i].toLowerCase()){
            result=result+str[i].toUpperCase()
        }else{
            result=result+str[i].toLowerCase()
        }
    }
    return result

}

console.log(swapCase('jAvAsCrIpT'))//JaVaScRiPt