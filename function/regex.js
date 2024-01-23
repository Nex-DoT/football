export function test (data){
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
            return password === passwordConfirm;
        }
        if(testEmail(data.email)){
            Error.email.delete()
        }else{
            Error.email = "Email is not valid"
        }

        if(testUserName(data.userName)){
            Error.userName.delete()
        }else{
            Error.userName = "Email is not valid"
        }

        if(testPassword(data.password)){
            Error.password.delete()
        }else{
            Error.password = "Email is not valid"
        }

        if(testPasswordConfirmation(data.passwordConfirm)){
            Error.passwordConfirm.delete()
        }else{
            Error.passwordConfirm = "Email is not valid"
        }
    return Error;
}