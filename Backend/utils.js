import jwt from "jsonwebtoken";

// // Create a token
// const payload = {
//   user_id: "65ae9c03c5eefb130aa0d8ca",
//   username: "fabiola",
//   email: "admin@fabsflowers.com",
//   password: "123456",
// };
// const secretKey = "crushsecret";
// const token = jwt.sign(payload, secretKey);

// Verify a token
  // try {
  //   const decoded = jwt.verify(token, secretKey);
  //   console.log(decoded);
  // } catch (error) {
  //   console.error("Token verification failed:", error.message);
  // }

export const generateToken = (user) => {
  

  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};
