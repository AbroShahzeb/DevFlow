import { PaginatedSearchParams } from "./global";

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

export interface CreateQuestionParams {
  title: string;
  content: string;
  tags: string[];
}

export interface EditQuestionParams extends CreateQuestionParams {
  questionId: string;
}

export interface GetQuestionParams {
  questionId: string;
}

export interface GetTagQuestionsParams
  extends Omit<PaginatedSearchParams, "filter"> {
  tagId: string;
}
