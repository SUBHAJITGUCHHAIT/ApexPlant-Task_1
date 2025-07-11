function handleLogin() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (!user) {
      alert("No user found. Please sign up.");
    } else if (email === user.email && password === user.password) {
      alert(`Welcome, ${user.name}!`);
      window.location.href = "index.html";
    } else {
      alert("Invalid email or password.");
    }
  }
  