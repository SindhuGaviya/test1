function strCount(str,num){
      let count=0
      for(i=0;i<str.length;i++){
          if(str[i]==num){
              count=count+1
          }
      }
      return count
}

console.log(strCount('hello','o'))//1
console.log(strCount('hello','l'))//2
console.log(strCount('hello','z'))//0