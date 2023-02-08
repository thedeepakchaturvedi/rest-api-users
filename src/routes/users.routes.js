const express = require("express");
const {
  getAllUsers,
  getUserByID,
  createUser,
  deleteUser
} = require("../controllers/users.controller");
const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUserByID).delete(deleteUser);

module.exports = router;
