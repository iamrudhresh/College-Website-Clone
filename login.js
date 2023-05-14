function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "admin" && password === "password123") {
      alert("Login successful!");
      window.location.href = "dashboard.html";
    } else {
      document.getElementById("error").innerHTML = "Incorrect username or password.";
    }
  }
  