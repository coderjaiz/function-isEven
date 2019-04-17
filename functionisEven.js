function isEven(num){
	if(num>0){
	if(num==0)
		return true;
	else if(num==1)
		return false;
	else
		return isEven(num-2);
	}
	else{
	if(num==0)
		return true;
	else if(num==1)
		return false;
	else
		return isEven(num+2);
	}		
};
let n=Number(prompt(`Enter a number`));
let result=isEven(n);
if(result==true)
	document.write(`\n ${n} is an even number`);
else 
	document.write(`\n ${n} is an not even number`);