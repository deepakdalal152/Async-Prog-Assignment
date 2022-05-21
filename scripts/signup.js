// <------gettting form data----------->


let getAllDetails = document.querySelector('form')

getAllDetails.addEventListener("submit",storeData)

// <-----creating function for userData----->

function userInfo(name,number,email,password)
{
    this.name = name;
    this.number = number;
    this.email = email;
    this.password = password;
}

let dataBucket = JSON.parse(localStorage.getItem("userSignupDetails")) || [];

function storeData()
{
    
    let name = getAllDetails.name.value
    let number = getAllDetails.number.value
    let email = getAllDetails.email.value
    let password = getAllDetails.password.value

    if(name === '' || number === '' || email === '' || password === '')
    {
        event.preventDefault()
        alert("Please fill all blanks")
    }
    else
    {
        // event.preventDefault()
        let userDetails = new userInfo(name,number,email,password)
        dataBucket.push(userDetails)
        localStorage.setItem("userSignupDetails",JSON.stringify(dataBucket))
        window.open("login.html")
        return;
    }
    
}