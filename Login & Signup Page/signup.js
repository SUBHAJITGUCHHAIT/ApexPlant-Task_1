function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  function handleSignup() {
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value.trim();
  
    if (!name || !email || !password) {
      return alert("All fields are required.");
    }
  
    if (!validateEmail(email)) {
      return alert("Enter a valid email.");
    }
  
    if (password.length < 6) {
      return alert("Password must be at least 6 characters.");
    }
  
    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    alert("Signup successful! Please login.");
    window.location.href = "login.html";
  }
  