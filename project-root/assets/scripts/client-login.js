            // selects form
            const form = document.querySelector('form');

            // listens for the submit button, but now runs a async function which will work with await fetch
             form.addEventListener('submit', async (e) => {
             // prevents default html from clicking submit
             e.preventDefault();
             
             // Takes in the formdata in a variable
             const fd = new FormData(form);
             
             // form is now in urlEncoded format
             const urlEncoded = new URLSearchParams(fd).toString();
 
             try {
                 // response variable is made with fetch inside so that it takes our http status from the back-end
                 // so it pretty much awaits for that response.status command 
                 const response = await fetch('http://localhost:5500/findacc', {
                     method: "POST",
                     body: urlEncoded,
                     headers: {
                         'Content-type': 'application/x-www-form-urlencoded',
                     }
                 });
 
             console.log(response.status);
 
             if (response.status === 200) {
                 // redirects us to the next page if the http status code is met
                 location.href = "../client-main/main-landing.html";
             } else if (response.status === 404) {
                 // we stay in the same page if this http status code is met
                 // this checks for our hidden <p> tag
                 var element = document.getElementById("checker");
                 // removes that hidden attribute in that p tag
                 element.removeAttribute("hidden");
                 // cleans our textboxs
                 document.getElementById("email").value = "";
                 document.getElementById("password").value = "";
             }
             } catch (err) {
                 // catches for any errors
                 console.error(err);
                 }
             });