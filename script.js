document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#credsForm");
    //const phoneRegEx = /^\+?\d{1,3}?[-.\s]?\d{1,4}?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    const emailRegEx = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegEx = /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;


    function showErrors(selctor, errMsg)
    {
        const err = document.getElementById(`err-${selctor}`);
        err.textContent = errMsg;
        err.style.display = "flex";
    }

    function isValidPhone(phone)
    {
        return phoneRegEx.test(phone);
    }

    function isValidEmail(email)
    {
        return emailRegEx.test(email);
    }

    if(!form)
    {
        return;
    }
    else
    {
        form.addEventListener("submit", (e)=>{

            e.preventDefault();
    
            let isAllCorrect = true;
    
            let name = document.getElementById("inputName").value;
    
            if(!name.trim())
            {
                showErrors("name", "Name field can not be empty!");
                isAllCorrect = false;
            }
            else
            {
                showErrors("name", "");
                isAllCorrect = true;
            }
    
            let lastName = document.getElementById("inputLastName").value;
    
            if(!lastName.trim())
            {
                showErrors("lastName", "Surname field can not be empty!");
                isAllCorrect = false;
            }
            else
            {
                showErrors("lastName", "");
                isAllCorrect = true;
            }
    
            let phone = document.getElementById("inputPhone").value;
    
            if(!phone.trim() || !isValidPhone(phone))
            {
                showErrors("phone", "Wrong phone format or empty field!");
                isAllCorrect = false;
            }
            else
            {
                showErrors("phone", "");
                isAllCorrect = true;
            }
    
            let email = document.getElementById("inputEmail").value;
    
            if(!email.trim() || !isValidEmail(email))
            {
                showErrors("email", "Wrong email format or empty field!");
                isAllCorrect = false;
            }
            else
            {
                showErrors("email", "");
                isAllCorrect = true;
            }
            
            if(!isAllCorrect)
            {
                console.log("Data not sent!");
            }
            else
            {
                console.clear();
                console.log("Sending data...")
                console.log(name);
                console.log(lastName);
                console.log(phone);
                console.log(email);
    
                window.location.href = "success.html";
            }
        });
    }
    
});




