export function test (data , type){
    const Error = {
    };
    // Function to test email format using regex
        function testEmail(email) {
            const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
            return emailRegex.test(email);
        }
        
        // Function to test userName format using regex
        function testUserName(userName) {
            const userNameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
            return userNameRegex.test(userName);
        }
        
        // Function to test password format using regex
        function testPassword(password) {
            const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            return passwordRegex.test(password);
        }
        
        // Function to test password confirmation matching
        function testPasswordConfirmation(password, passwordConfirm) {
            if( password !== passwordConfirm) return false
            else return true
            
        }
    if(type === "signup"){
        if(testEmail(data.email)){
            delete Error.email;
        }else if(data.email === ""){
            Error.email = "Email fild is empty";
        }else{
            Error.email = "Email is not valid"
        }

        if(testUserName(data.userName)){
            delete Error.userName
        }else if (data.userName === ""){
            Error.userName = "User Name fild is empty";
        }else{
            Error.userName = "User Name is not valid"
        }

        if(testPassword(data.password)){
            delete Error.password;
        }else if (data.password === ""){
            Error.password = "Password fild is empty";
        }else{
            Error.password = "Password is not valid"
        }

        if(data.passwordConfirm === ""){
            Error.passwordConfirm = "Password Confirmation fild is empty";
        }else if(testPasswordConfirmation( data.password , data.passwordConfirm)){
            delete Error.passwordConfirm
        }else{
            Error.passwordConfirm = "Password Confirm is not valid"
        } }
        else if(type === "login"){
            if(testEmail(data.email)){
                delete Error.email;
            }else if(data.email === ""){
                Error.email = "Email fild is empty";
            }else{
                Error.email = "Email is not valid"
            }

            if(testPassword(data.password)){
                delete Error.password;
            }else if (data.password === ""){
                Error.password = "Password fild is empty";
            }else{
                Error.password = "Password is not valid"
            }
        }
    return Error;
}