// Dependencies for next-auth API
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

// Connection information for Auth0.
// Dashboard to manage Auth0 https://manage.auth0.com/dashboard/us/silversurfer
export default NextAuth({
  site: process.env.NEXTAUTH_URL,
  providers: [
    Providers.Auth0({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      domain: process.env.AUTH0_DOMAIN,
    }),
  ],
});
