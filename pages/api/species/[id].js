import { species } from "../../../dataSpecies";

export default function handler(req, res) {
  const { id } = req.query;

  const specimenData = species.find((specimen) => specimen.species === id);

  res.status(200).json(specimenData);
}
