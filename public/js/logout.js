function logoutMe() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("_id");
    sessionStorage.removeItem("userPassword");
    window. location. replace("http://ec2-34-227-58-112.compute-1.amazonaws.com:8080");
}
