import { SignJWT, jwtVerify } from "jose";

// 1. get JWT Secret
const getSecretKey = () => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is not defined");
  }

  return new TextEncoder().encode(secret);
};

// 2. create Session token
export async function createSessionToken(user) {
  const secretKey = getSecretKey();

  const token = await new SignJWT({
    role: user.role,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(user._id.toString())
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(secretKey);

  return token;
}

// 3. verify session token
export async function verifySessionToken(token) {
    const secretKey = getSecretKey();

    const { payload } = await jwtVerify(token, secretKey);

    return payload;
}