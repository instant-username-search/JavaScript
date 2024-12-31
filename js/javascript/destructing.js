//old method to access the array
var arr=[1,2,3,4,5]
console.log(arr)
var num1=arr[0]
console.log(num1)


//new mwthod or destructing
var arr1=[1,2,3,4,5]
var[num1,num2,...rest]=arr
console.log(num1+num2);
console.log(rest)

//for object
var student={
    name:"rahul",
    age:"21"
}
var{name,age}=student
console.log(name+" "+age)