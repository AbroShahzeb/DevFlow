export interface SignInOAuthParams {
  provider: "github" | "google";
  providerAccountId: string;
  user: {
    email: string;
    name: string;
    username: string;
    image: string;
  };
}

export interface AuthCredentials {
  name: string;
  email: string;
  password: string;
  username: string;
}
