const express = require("express");
const {
  getAllUsers,
  getUserByID,
  createUser,
  deleteUser,
  validateUser,
} = require("../controllers/users.controller");
const router = express.Router();

router.route("/").get(getAllUsers).post(validateUser, createUser);
router.route("/:id").get(getUserByID).delete(deleteUser);

module.exports = router;
