var i;
var j;
var n=5;
var a="";
if (n){
for (var i=1; i<n; i++){
  a="";
  for (var j=-3; j<=n; j++){
    if (j==i+4){
      a+="*";
    }else if ((i+j)==(n+1)){
      a+="*";
    } else if (4-i==-j){
      a+="*";
    } else {
a += "   ";
    }
    }
    console.log(a)
  }
   }  
 else {
   console.log("INPUT CORRECT NUMBER FOR n :")
 }
 if (n){
for (var i=1; i<=5; i++){
  a="";
  for (var j=1; j<=9; j++){
    if (j==i+4){
      a+="*";
    }else if ((i+j)==(n+1)){
      a+="*";
    }else {
a += "   ";
    }
    }
    console.log(a)
  }
   }
 else {
   console.log("INPUT CORRECT NUMBER FOR n :")
 }
 