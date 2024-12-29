function register() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;

    if (!name || !age || !email) {
      document.getElementById("error").textContent = "Please fill out all fields!";
      return;
    }

    localStorage.setItem("user", JSON.stringify({ name, age, email }));
    window.location = "show.html";
  }
  const user = JSON.parse(localStorage.getItem("user"));
    document.getElementById("info").innerHTML = user