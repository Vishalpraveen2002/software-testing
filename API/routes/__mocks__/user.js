const router = ( email, username, password, mobile ) => {
    const mail=["venkiufie@gmail.com"];
    const usr=["venki8"];
    const pwd=["Venki2002@"];
    const mob=[8759552259];

    if (!email || !username || !password || !mobile){
        return Promise.resolve("All fields are required.");
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        return Promise.resolve("Invalid email address.");
    }
    if (!/^[a-zA-Z0-9]{4,}$/.test(username)){
        return Promise.resolve("Username must be at least 4 characters long and can only contain letters and numbers.");
    }
    if (!/^[0-9]{10}$/.test(mobile)) {
        return Promise.resolve("Invalid mobile number.");
    }
   if(email==mail[0])
   {
        return Promise.resolve("Email address is already registered.");
   }
   if(mobile==mob[0])
   {
        return Promise.resolve("Mobile number is already registered.");
   }
    
};

const login = (email,password) => {
    const mail=["venkiufie@gmail.com"];
    const usr=["venki8"];
    const pwd=["Venki2002@"];
    if (!email || !password) {
        return Promise.resolve("Email and password are required!");
    }
    if(email!=mail[0])
    {
        return Promise.resolve("User is not registered, Sign Up first");
    }
    if(password!=pwd[0])
    {
        return Promise.resolve("Enter correct password!");
    }
    if(email==mail[0] && password==pwd[0])
    {
        return Promise.resolve("User signed in!");
    }
};

exports.router = router;
exports.login = login;