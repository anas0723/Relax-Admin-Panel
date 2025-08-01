import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions = {
  providers: [
    Credentials({
      async authorize(credentials) {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/authenticate-portal`, credentials);
        if (res.status === 200) {
          return res.data;
        }
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.resData = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.resData = token.resData;
      return session;
    }
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
