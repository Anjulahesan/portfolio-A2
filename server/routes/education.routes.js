import express from "express";
import educationCtrl from "../controllers/education.controller.js";

const router = express.Router();

router.route("/api/qualifications").get(educationCtrl.list);  // Get all education records
router.route("/api/qualifications").post(educationCtrl.create); // Create a new education record
router.route("/api/qualifications").delete(educationCtrl.removeAll); // Delete all education records

router.route("/api/qualifications/:qualificationId").get(educationCtrl.read); // get education record by id
router.route("/api/qualifications/:qualificationId").put(educationCtrl.update); // update education record by id
router.route("/api/qualifications/:qualificationId").delete(educationCtrl.remove); // delete education record by id

router.param("qualificationId", educationCtrl.educationByID);

export default router;
