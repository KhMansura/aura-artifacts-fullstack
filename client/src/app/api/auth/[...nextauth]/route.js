import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (credentials.email === "masa@aura.com" && credentials.password === "aura2026") {
          return { 
            id: "1", 
            name: "Masa", 
            email: "masa@aura.com",
            image: "https://i.ibb.co.com/0RLWzJfR/download.jpg" };
        }
        return null;
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET || "any-random-string-for-local-dev",


  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "google") {
        console.log("Google user logging in:", user.email);
      }
      return true;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',
  },
});

export { handler as GET, handler as POST };