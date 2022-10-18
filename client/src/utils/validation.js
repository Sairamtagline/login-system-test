const validationFn = ({ name, value }) => {
  switch (name) {
    //email regex pattern
    case "email":
      return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

    //password regex pattern with one special character one alphabet and one number and one capital and at least 8 characters
    case "password":
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/g.test(value);
      
    default:
      return;
  }
};

export default validationFn;
