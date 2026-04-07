function validation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (name === "") {
        document.getElementById("nameErr").innerHTML = "Name is required";
    } else {
        document.getElementById("nameErr").innerHTML = "";
    }

    if (email === "") {
        document.getElementById("emailErr").innerHTML = "Email is required";
    } else {
        document.getElementById("emailErr").innerHTML = "";
    }

    if (password === "") {
        document.getElementById("passwordErr").innerHTML = "Password is required";
    } else {
        document.getElementById("passwordErr").innerHTML = "";
        {
                
        }
        (password.length < 6) ? document.getElementById("passwordErr").innerHTML = "Password must be at least 6 characters" : document.getElementById("passwordErr").innerHTML = "";  
    }
}