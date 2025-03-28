document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#credsForm");
    const submitBtn = document.getElementById("sendBtn");


    function showErrors(selctor, errMsg)
    {
        const err = document.getElementById(`err-${selctor}`);
        err.textContent = errMsg;
        err.style.display = "block";
    }

    form.addEventListener("submit", (e)=>{

        // const formData = new FormData(form);

        // const name = formData.get("Name");
        // const lastName = formData.get("LastName");
        // const phone = formData.get("Phone");
        // const email = formData.get("Email");

        e.preventDefault();

        let isAllCorrect = true;

        let name = document.getElementById("inputName").value;
        
        const lastNameErr = document.getElementById("lastNameErr");
        const PhoneErr = document.getElementById("phoneErr");
        const emailErr = document.getElementById("emailErr");

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

        if(!phone.trim())
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

        if(!email.trim())
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
            console.log("Data not sent");
        }
        else
        {
            console.log(name);
            console.log(lastName);
            console.log(phone);
            console.log(email);
        }
    });

});




