import express from "express";
import { client } from "./index.js";

const router = express.Router();

router
  .route("/data")
  .get(async (req, res) => {
    const DataProvided = await GetProjectDetails();
    res.send(DataProvided);
  })
  .post(async (req, res) => {
    const DataProvided = req.body;
    const ProjectDetails = await AddProjectDetails(DataProvided);
    res.send(ProjectDetails);
  });

function GetProjectDetails() {
  return client
    .db("capstone-project")
    .collection("project-details")
    .find({})
    .toArray();
}

function AddProjectDetails(DataProvided) {
  return client
    .db("capstone-project")
    .collection("project-details")
    .insertMany(DataProvided);
}

export const userRouter = router;
