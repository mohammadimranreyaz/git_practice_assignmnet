//Prime_problem


let count=0;
   for(x=0;x<=num;x++){
       if(num%x==0){
       count++
   }
   }
    if(count==0){
        console.log("Yes")
    }else{
        console.log("No")
    }


//Plaindrome_problem

 let bag="";
  for(x=str.length-1;x>=0; x--){
      bag=bag+str[x]
  }
      if(str==bag){
          console.log("Yes")
      }else{
           console.log("No")
          
      }