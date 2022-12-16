
const para = document.createElement("p");
function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email
        }),
    })
    .then(resp => resp.json())
    .then((user) => {
        console.log(user);
        para.textContent = user.id;
        document.body.appendChild(para);
    })
    .catch(e =>{
        alert("Error!!");
        para.textContent = e.message;
        document.body.appendChild(para);
    })
} 

submitData("mary", "mary@mary.com") 