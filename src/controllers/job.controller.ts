import { Request, Response } from "express";
import { createJobService } from "../services/job.service";

export async function createJob(req: Request, res: Response) {
  const job = await createJobService(req.body);

  res.status(202).json(job);
}
