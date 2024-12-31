var s="rahul"
console.log(s)

var n="M"
console.log(n)

console.log(s+n)

//concatenation
var c=s+" "+n
console.log(c)

console.log(n.concat(s))

//comapre
var a="rahul"
console.log(s==a)

var b=new String("rahul")
console.log(a==b)

console.log(typeof(a)==typeof(b))

//string methods
console.log(s.charAt(1))

console.log(s.toLocaleLowerCase())

console.log(s.toUpperCase())

console.log(s.slice(2))
console.log(s.slice(2,4))
console.log(s.slice(-2))

console.log(s.substring(2))//substring is same as slice, but in substring it will not take negative indexes.

var c="   hi    "
console.log(c.trim())



