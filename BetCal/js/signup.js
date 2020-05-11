function Valid(form) {
    let name = form.name.value;
    let password = form.password.value;
    if (name == "admin" && password == "admin") {
        window.location = "betcalc.html";
    } else {
        alert("Проверьте правильность введенных данных");
    }
}