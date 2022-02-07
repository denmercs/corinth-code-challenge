// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { species } from "../../../dataSpecies";

export default function handler(req, res) {
  res.status(200).json({ species });
}
