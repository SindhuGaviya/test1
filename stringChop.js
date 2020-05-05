function stringChop(str,chop){
    let result=[]
    if(chop){
    for(i=0;i<str.length;i+=chop){
        const chopped=str.slice(i,i+chop)
        // console.log(chopped)
        result.push(chopped)
        console.log(result)
    }
}else{
    result.push(str)
}
         return result
}

console.log(stringChop('resource',2))//['re', 'so' , 'ur', 'ce']
console.log(stringChop('resource'))//[ 'resource' ]
console.log(stringChop('resource',3))//[ 'res' , 'our' , 'ce' ]
