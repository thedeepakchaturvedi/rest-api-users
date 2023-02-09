const UsersData = require("../../data/users.json");
const User = require("../models/users.model");

const validateUser = (req, res, next) => {
  //middleare
  const obj = req.body;
  const keysArr = ["id", "name", "introduction", "profileImage", "profileLink"];
  const objKeys = Object.keys(obj);
  const ans = keysArr.every((ele) => objKeys.includes(ele));

  if (!ans) {
    // shortcircuit
    return res.status(422).json({
      message: "Invalid request body",
    });
  }
  // else;
  next();
};

const getAllUsers = (req, res) => {
  res.status(200).json(UsersData);
};

const getUserByID = (req, res) => {
  const id = req.params.id;
  const user = UsersData.find((ele) => ele.id == id);
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404);
  }
};

const createUser = (req, res) => {
  const { body } = req;
  const user = new User(body);
  UsersData.push(user);
  res.status(200).send(user);
};

const deleteUser = (req, res) => {
  let index = -1;
  const id = req.params.id;

  UsersData.forEach((ele, i) => {
    if (ele.id == id) {
      index = i;
    }
  });

  if (index !== -1) {
    UsersData.splice(index, 1);
    return res.status(201).send("Successfully deleted");
  }
  res.status(500).send("Cannot delete bcz id " + id + " doesn't exist");
};

module.exports = {
  getAllUsers,
  getUserByID,
  createUser,
  deleteUser,
  validateUser //middleware
};
