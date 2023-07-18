import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import FacebookProvider from "next-auth/providers/facebook";
import AppleProvider from "next-auth/providers/apple";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_ID,
      clientSecret: process.env.AUTH0_SECRET,
      domain: process.env.AUTH0_DOMAIN,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId:
        "799258105736-e3rbtpankme2mtbpe90hvabt813sb5cq.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    AppleProvider({
      clientId: process.env.APPLE_ID,
      clientSecret: "",
    }),
  ],
  events: {
    error: async (message, object) => {
      console.error("Error Message: ", message);
      console.error("Error Object: ", object);
    },
  },
  secret: process.env.SECRET,

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      return token;
    },

    async session(session, token) {
      if (token?.accessToken) {
        session.accessToken = token.accessToken;
      }
      return session;
    },
  },

  pages: {},

  events: {},
  debug: false,
});
