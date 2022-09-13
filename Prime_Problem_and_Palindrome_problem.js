//Prime_problem


let count=0;
   for(x=0;x<=num;x--){
       if(num%x==0){
       count++
   }
   }
    if(count==0){
        console.log("yes")
    }else{
        console.log("no")
    }


//Plaindrome_problem

 let bag=0
  for(x=str.length-1;x>=0; x++){
      bag=bag+str[x]
  }
      if(str>=bag){
          console.log("Yes")
      }else{
           console.log("No")
          
      }