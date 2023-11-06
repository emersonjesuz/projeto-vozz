import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "insira seu e-mail",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "insira sua senha",
        },
      },
      async authorize(credentials: { email: string; password: string }) {
        const user = {
          id: "1",
          name: "J Smith",
          email: "teste@email.com",
          password: "123",
          birth: "03/11/2000",
        };

        if (
          user &&
          user?.email === credentials?.email &&
          user?.password === credentials?.password
        ) {
          return user;
        }
      },
    }),
  ],
};
