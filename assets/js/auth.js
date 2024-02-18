const inputs = document.querySelectorAll("input");
const email_exits = document.getElementById("email-exists");
const users = {
    0: {
        email: "domak@gmail.com"
    },
    1: {
        email: "kyaw@gmail.com"
    }
}
inputs.forEach( input=>{
    input.addEventListener("input", (e)=>{
        if( input.name === "email" ){
            const email_exit = Object.values(users).filter( user => user.email === input.value );
            if( email_exit.length > 0 ){
                email_exits.innerHTML = "Email Already Taken";
            }
            email_exit.innerHTML = "";
        }
        
    })
})