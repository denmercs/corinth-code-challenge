import { profiles } from "../../../dataProfiles";

export default function handler(req, res) {
  const { id } = req.query;

  const profile = profiles.find((data) => data.name.toLowerCase() === id);

  res.status(200).json(profile);
}
