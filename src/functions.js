/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
export function resolveAuthError(code){
    switch (code){
        case "auth/wrong-password":
            return "invalid password";
        case "auth/user-not-found":
            return "User not found";
        case "auth/null-value":
            return "E-mail address and password cannot be empty ";
        case "auth/signUp/null-value":
            return "E-mail address  password  and correction password cannot be empty ";
        default:
            break;
    }
    

}
