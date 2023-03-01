import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import FacebookProvider from "next-auth/providers/facebook";
import AppleProvider from "next-auth/providers/apple";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_ID,
      clientSecret: process.env.AUTH0_SECRET,
      // @ts-ignore
      domain: process.env.AUTH0_DOMAIN,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId:process.env.GOOGLE_ID,
      clientSecret:process.env.GOOGLE_SECRET,
    }),
    AppleProvider({
      clientId: process.env.APPLE_ID,
      clientSecret: "",
    }),
  ],
  secret: process.env.SECRET,

  session: {
    strategy: "jwt",
  },

  // jwt: {
  //   secret: process.env.SECRET,
  // },

  pages: {},

  callbacks: {},
  events: {},
  debug: false,
});
