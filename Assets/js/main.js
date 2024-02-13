document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("was-validated");
  const successfulRegistration = document.getElementById(
    "successfulRegistiration"
  );

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    form.classList.add("wasValidatedHidden");
    form.classList.remove("wasValidated");
    successfulRegistration.classList.add("successfulRegistiration");
    successfulRegistration.classList.remove("successfulRegistirationHidden");
    setTimeout(function () {
      successfulRegistration.classList.add("show");
    }, 300);
  });

  const continueButton = document.getElementById("Continue");
  continueButton.addEventListener("click", function () {
    window.location.href = "https://www.hsbc.com.eg/";
    setTimeout(function () {
      successfulRegistration.classList.add("show");
    }, 300);
  });
});
