let userRole = prompt();
let accessLevel;

if (userRole === "Empleado") {
    accessLevel = "Estás autorizado a tener acceso a los 'Servicios Dietéticos'";
} else if (userRole === "Miembro Inscrito") {
    accessLevel = "Estás autorizado a tener acceso a los 'Servicios Dietéticos' y a interacción uno a uno con un dietista";
} else if (userRole === "Suscriptor"){
    accessLevel = " está autorizado a tener acceso parcial para facilitar los 'Servicios Dietéticos' únicamente";
}else{
     accessLevel = "Necesita inscribirse o al menos suscribirse primero para poder acceder a esta instalación";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);