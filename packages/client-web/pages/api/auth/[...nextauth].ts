import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { NextApiRequest, NextApiResponse } from 'next';

const options = {
  site: process.env.SITE || process.env.LOCALHOST,
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID || '',
      clientSecret: process.env.FACEBOOK_SECRET || '',
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
  ],
};

export default (req: NextApiRequest, res: NextApiResponse<any>) =>
  NextAuth(req, res, options);
