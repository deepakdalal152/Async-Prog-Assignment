
// <-----get user Data ---->
    
let getUserDetail = document.querySelector('form')

getUserDetail.addEventListener("submit", compareData)

// <----------get storage data for compare------->
    let getStorageData = JSON.parse(localStorage.getItem("userSignupDetails"))

    // <-----------compare details ---------->

        function compareData()
        {   
            // console.log(getStorageData[1].email.value + getStorageData[1].password.value)
            if(getUserDetail.email.value === '' || getUserDetail.password.value === '')
            {
                event.preventDefault();
                alert("Please fill all details")
            }
            else{
                let findEmail = false;
                let findPassword = false;
                for(let i = 0 ; i < getStorageData.length; i++)
                {
                    if(getUserDetail.email.value === getStorageData[i].email && getUserDetail.password.value === getStorageData[i].password)
                    {
                        // console.log("You are in ")
                        findEmail = true;
                        findPassword = true;
                        window.open("index.html")
                        return;
                    }
                }
                if(!(findEmail && findPassword))
                {
                    event.preventDefault();
                    alert("Invalid Credinatial")
                    // console.log( findEmail,findPassword)
                }

            }
    }