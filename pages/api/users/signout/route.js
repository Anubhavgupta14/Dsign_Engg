import { serialize } from "cookie";

export default async function (req, res) {
  if (req.method === "POST") {
    const { cookies } = req;
    const jwt = cookies.JWT;
    console.log('Token aagaya',jwt)
    if (!jwt) {
      return res.json({ message: "Already not logged in...." });
    } else {
      const serialised = serialize("JWT", null, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: -1,
        path: "/",
      });
      

      res.setHeader("Set-Cookie", serialised);
      console.log("Logged Out");
      res.status(200).json({ message: "Successfully logged out" });
    }
  }
}
