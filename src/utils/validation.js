export default function validation(input) {
    const errors = {}
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const regexPassword = new RegExp("[0-9]")

    if (!input.email.length) errors.email = "Ingrese su email"
    else {
        if (!regexEmail.test(input.email)) errors.email = "Debe ingresar un email válido"
        if (input.email.length > 35) errors.email = "Menor a 35 caracteres"
    }
    if (!input.password.length) errors.password = "Ingrese su password"
    if (!regexPassword.test(input.password)) errors.password = "Debe tener al menos un número"
    if (input.password.length < 6) errors.password = "Al menos 6 caracteres"
    if (input.password.length > 9) errors.password = "No mayor a 10 caracteres"
    return errors
}