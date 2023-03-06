import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://two02301-w6chwe-back-enrique-lorena.onrender.com/api/v1/robots",
    (_req, res, ctx) => {
      return res(ctx.status(200), ctx.json([44]));
    }
  ),
];
