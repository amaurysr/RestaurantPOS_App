            // create a variable for our submit button using the id=""
            $submit = document.getElementById("submit");
            // We are disabling the submit button because we want our two passwords to verify each other
            $submit.disabled = true;

            // function that checks the two password boxes and then enables our submit button 
            function passCheck(){
                // checks the password box
                $password = document.getElementById("password"); 
                // checks the verify-password box
                $checkPass = document.getElementById("verify-password");

                if ($password.value == $checkPass.value){
                    return submit.disabled = false;
                }
            }
            // Runs our passCheck func
            passCheck();
            // this variable selects the entire form and then starts the query to be sent to the backend
            const form = document.querySelector('form');
            
            // listens when the submit button is clicked
            form.addEventListener('submit', async (e) => {
                e.preventDefault(); // Prevents HTML submission 

                // the if-statement checks if the submit button is enabled
                if (!$submit.disabled){
                // variable takes form data from the FormData function
                const fd = new FormData(form);
                
                // Takes our form data and creates a key-value pair and converts it into a query string for URL
                const urlEncoded = new URLSearchParams(fd).toString();
                
                try{
                    // This fetch will communicate with our backend, and will post the urlEncoded variable to our backend
                    const response= await fetch('http://localhost:5500/change', {
                    method: "POST",
                    // This will make our request to node.js a urlEncoded format 
                    body: urlEncoded,
                    headers: {
                        //'application/x-www-form-urlencoded' or 'multipart/form-data'
                        'Content-type': 'application/x-www-form-urlencoded',

                    }
                })
                if(response.status === 200){
                    // Goes back to login.html
                    location.href = "login.html"
                }
                else if(response.status == 404){
                    // this will give us a warning a stay at the same page with the 404 error
                    var checker = document.getElementById("warning");
                    checker.removeAttribute("hidden")
                }
            }catch(err){
                //catches any errors
                console.error(err);
            }
            }});