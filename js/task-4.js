document
  .querySelector(".login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let email = this.elements.email.value.trim();
    let password = this.elements.password.value.trim();
    if (email === "" || password === "") {
      alert("All form fields must be filled in");
    } else {
      let formInfo = {
        email: email,
        password: password,
      };
      console.log(formInfo);
      this.reset();
    }
  });
