import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { nextAuthOptions } from "./auth/[...nextauth]";
import { Session } from "next-auth";

// Define the type for the response body
interface ResponseBody {
  content?: string;
  error?: string;
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseBody>
) => {
  const session: Session | null = await getServerSession(
    req,
    res,
    nextAuthOptions
  );

  if (session) {
    res.send({
      content:
        "This is protected content. You can access this content because you are signed in.",
    });
  } else {
    res.send({
      error:
        "You must be signed in to view the protected content on this page.",
    });
  }
};

export default handler;
