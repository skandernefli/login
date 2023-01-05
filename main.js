document.addEventListener("DOMContentLoaded",()=>{
    const loginForm=document.querySelector("#login");
    const createAccountForm=document.querySelector("#createAccount");
    document.querySelector("#linkLogin").addEventListener("click",()=>{
        createAccountForm.classList.add("form--hidden");
        loginForm.classList.remove("form--hidden")
    });
    document.querySelector("#linkCreateAccount").addEventListener("click",()=>{
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden")
    });
})