import express from "express";
import userCtrl from "../controllers/user.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

// Public: sign up and list users. Protected: delete all users.
router.route("/api/users")
    .get(userCtrl.list) // Get all users
    .post(userCtrl.create) // Create a new user
    .delete(authCtrl.requireSignin, userCtrl.removeAll); // Delete all users

// Protected: a signed-in user can read any profile, but only update/delete their own
router.route("/api/users/:userId")
    .get(authCtrl.requireSignin, userCtrl.read) // get user by id
    .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update) // update user by id
    .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove); // delete user by id  

// router.route("/api/users").get(userCtrl.list);  // Get all users
// router.route("/api/users").post(userCtrl.create); // Create a new user
// router.route("/api/users").delete(userCtrl.removeAll); // Delete all users

// router.route("/api/users/:userId").get(userCtrl.read); // get user by id
// router.route("/api/users/:userId").put(userCtrl.update); // update user by id
// router.route("/api/users/:userId").delete(userCtrl.remove); // delete user by id

router.param("userId", userCtrl.userByID);

export default router;
