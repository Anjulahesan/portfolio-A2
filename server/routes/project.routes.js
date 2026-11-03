import express from "express";
import projectCtrl from "../controllers/project.controller.js";

const router = express.Router();

router.route("/api/projects").get(projectCtrl.list);  // Get all projects
router.route("/api/projects").post(projectCtrl.create); // Create a new project
router.route("/api/projects").delete(projectCtrl.removeAll); // Delete all projects

router.route("/api/projects/:projectId").get(projectCtrl.read); // get project by id
router.route("/api/projects/:projectId").put(projectCtrl.update); // update project by id
router.route("/api/projects/:projectId").delete(projectCtrl.remove); // delete project by id

router.param("projectId", projectCtrl.projectByID);

export default router;
