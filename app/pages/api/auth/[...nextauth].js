import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  site: "http://localhost:3000/api/auth",
  providers: [
    Providers.Auth0({
      clientId: "Gxxqtt1P1dU7KKzvCdqYbA2cgxTgDqKh",
      clientSecret:
        "cVQjcYwnCGzwDmWgTc_43zLfhkV3RenXUCTcgnPIZjNConEwkfgoButmWXiVckdu",
      domain: "silversurfer.us.auth0.com",
    }),
  ],
});
