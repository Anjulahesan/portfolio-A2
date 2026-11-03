import express from "express";
import contactCtrl from "../controllers/contact.controller.js";

const router = express.Router();

router.route("/api/contacts").get(contactCtrl.list);  // Get all contacts
router.route("/api/contacts").post(contactCtrl.create); // Create a new contact
router.route("/api/contacts").delete(contactCtrl.removeAll); // Delete all contacts

router.route("/api/contacts/:contactId").get(contactCtrl.read); // get contact by id
router.route("/api/contacts/:contactId").put(contactCtrl.update); // update contact by id
router.route("/api/contacts/:contactId").delete(contactCtrl.remove); // delete contact by id

router.param("contactId", contactCtrl.contactByID);

export default router;
