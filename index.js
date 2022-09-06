const error = document.querySelectorAll(".error-info")

const input = document.querySelectorAll(".input")
const email = document.querySelector(".emailAd")
const error_info = document.querySelector(".er")  
const btn = document.querySelector(".button")

btn.addEventListener("click",function(){
 input.forEach(function(item){
   
   // console.log(item.classList[1])
   error.forEach(function(value){

    if (item.value===""){
    if (item.classList[1]===value.classList[1]){
     value.classList.remove("hidden")
    }
   }
   else{
    if (item.classList[1]===value.classList[1]){
     value.classList.add("hidden")
   }
  }})
  }
  
)

 var validRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if (email.value.match(validRegex)){
 error_info.classList.add("hidden")
}
else{
 console.log(email.value)
 error_info.classList.remove("hidden")
 console.log(error_info.classList)
}
let c = 0
input.forEach(function(item)
{

 if (item.value!==""){
   console.log(item.value)
  c++
}})

console.log(c)
console.log(email.classList)
if (error_info.classList[3]){
 console.log("adada")
 c++
}
if(c===5){
 console.log("haha")
 input.forEach(function(item)
 {
  
  item.value=""
 })

}
c=0
})