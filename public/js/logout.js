function logoutMe() {

    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("_id");
    sessionStorage.removeItem("userPassword");
    window. location. replace("http://127.0.0.1:8080");
}