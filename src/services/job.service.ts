import { Job } from "../models/job.model";

export async function createJobService(data: any) {
  const job = await Job.create({
    type: data.type,
    payload: data.payload,
  });

  return job;
}

export async function getJobsService() {
  return Job.find().sort({ createdAt: -1 });
}