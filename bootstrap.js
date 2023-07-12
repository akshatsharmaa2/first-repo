
//var submit=document.getElementById("float")
function submithandler() {
    //var email=document.getElementById("float").value
   
   // console.log(name);
}

var submit=document.getElementById("submit")

function clickhandler(e) {
    console.log();
}

submit.addEventListener("keyup",clickhandler())
localStorage.clear()
function onsubmit(e) {
    e.preventDefault()
    var email=document.getElementById("float").value
   // console.log(email);
    var password=document.getElementById("floatingPassword").value
   // console.log(password);
   let obj={
    "email":email,
    "pass":password
   }
   
  // console.log(obj);
   localStorage.setItem(email,JSON.stringify(obj))


   var ul=document.createElement("ul")
   var li=document.createElement("li")
   li.innerHTML=`${email}-${localStorage.getItem(email)}`

   var del=document.createElement("button")
   del.innerHTML="Delete"


  

   li.append(del);


  

  

   ul.append(li)
   //document.write(ul)
   var div=document.getElementById("div")
   div.append(ul) 

   function deletenode() {
    li.remove();
    localStorage.removeItem(email)
   }

   del.addEventListener("click",deletenode)
    
}



//submit.addEventListener("click",detail)

var form=document.getElementById("form")
submit.addEventListener("click",onsubmit)







/*let myArr = [
    {
     studenName: "jack",
     studenClass: 6,
     studenSection: "a"
    },
    {
     studenName: "tom",
     studenClass: 6,
     studenSection: "a"
    }
];

//console.log(myArr[1]);
class hello{
    submit(){
        console.log(this.name+"form submitted");
    }
    cancel(){
        console.log("form cancel");
    }
    personname(name){
        this.name=name
    }
}
let user= new hello();
//user.personname("rohan")
//user.submit();
//user.cancel()



let nums=[
{
    name:"asksh",
    salary:77
},

{
    name:"krish",
    salary:45
}
]

let arr=[4,5,3,2,6,8,1,0]

function compare(a,b) {
    return a-b
}
//console.log(arr.sort(compare));

class users{
    
constructor(name,email,pass){
    this.name=name
    this.email=email
    this.pass=pass
}
password(){
    console.log(this.pass);
}
}

class member extends users{
    constructor(name,email,pass,address){
        super(name,email,pass)
       this.address=address
    }

     addres(){
        console.log(this.address);
     }
    
}

let aksh=new member("aksh","njn,jn","jdj","elk")
//aksh.password()
//aksh.addres()

let dt=new Date()
//console.log(dt.toDateString());
//console.log(document);*/








