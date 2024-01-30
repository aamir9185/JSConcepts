// const zod =  require("zod");
 
// function validateInput(obj) {
//   const schema = zod.object({
//     email:zod.string().email(),
//     password:zod.string().min(8)
//   })
//   const response = schema.safeParse(obj);
//   console.log(response)

// }

// function validateArray(arr){
// const schema = zod.array(zod.string())
// const response = schema.safeParse(arr);
// console.log(response)
// console.log(response)
// }
// validateInput({email:"aamir91@gmail.com",password:"erfhweriohgfi"})
// validateInput({email:"aamir91gmail.com",password:"erfhweriohgfi"})
// validateInput({email:"aamir91gmail.com",password:"ee"})
// validateArray(["aamir","john","rishu"])
// validateArray(["aamir","john","rishu",12])
const zod = require("zod");

function validateInput(obj) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8)
  });
  const result = schema.safeParse(obj);
  
  if (result.success) {
    console.log("Validation successful:", result.data);
  } else {
    console.error("Validation failed:", result.error.errors);
  }
}

function validateArray(arr) {
  const schema = zod.array(zod.string());
  const result = schema.safeParse(arr);

  if (result.success) {
    console.log("Validation successful:", result.data);
  } else {
    console.error("Validation failed:", result.error.errors);
  }
}

validateInput({ email: "aamir91mail.com", password: "erfhksklfdnlk" });
validateArray(["aamir", "john", "rishu"]);
