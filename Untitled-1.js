let emailhelp = "Your email must be in format: 'xyz@gmail.com'";
let namehelp = "Your name must be in format: 'First-name second-name'";
let phonehelp = "Your Phone number must be in format: '+923177594882'";

const regexp=(email) =>{
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
const regphone =(phone)=>{
    const regex= /^(\+92|0|92)[0-9]{10}$/;
      return regex.test(phone);
}



document.getElementById("name").onclick= ()=>{
document.getElementById("help").textContent=namehelp
}
document.getElementById("email").onclick= ()=>{
 document.getElementById("help").textContent=emailhelp
}
document.getElementById("phone").onclick= ()=>{
 document.getElementById("help").textContent=phonehelp
}

const n =(id)=>{
    let nameinfo1 = document.getElementById(id)
    let nameinfo2 = nameinfo1.value;
    return nameinfo2;
}



  const btn=document.getElementById("submitbtn");
btn.addEventListener("click",function(event){
    event.preventDefault();
      val1 = "name"
      val2 = "email"
      val3 = "phone"

const info = n(val1);
 document.getElementById("nameinfo").textContent+=`${info}  `;

const info1 = n(val2);
if(regexp(info1) == true)
{
 document.getElementById("emailinfo").textContent+=`${info1}  `;
}
else{
    alert("Invalid Email. Please enter a valid email to continue.")
}


const info2 = n(val3);
if(regphone(info2) == true)
{
 document.getElementById("phoneinfo").textContent+=`${info2}  `;
}
else{
    alert("Invalid Phone Number. Please enter a valid Phone Number to continue.")
}
}
)

const formstyle=document.getElementById("form1");
formstyle.style.display="flex";
formstyle.style.flexDirection='column';
formstyle.style.alignItems='center';
formstyle.style.margin='2em 5em';

const formstyle1=document.getElementsByClassName("data")[0];
formstyle1.style.display="flex";
formstyle1.style.flexDirection='column';
formstyle1.style.alignItems='center';


const bodystyle = document.querySelector("body")
bodystyle.style.backgroundColor = "lightyellow"

const btnn = document.getElementById("resetbtn")
btnn.style.padding = "0.3em 2.2em"
const btnn1 = document.getElementById("submitbtn")
btnn1.style.padding = "0.3em 2em"