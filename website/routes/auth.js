const router = require("express").Router();
const user = require("../controllers/auth.controller");
const auth = require("../middlewares/auth");

// register
router.post("/", user.register);

// login
router.post("/dashboard", user.login);

// all users
router.get("/", auth, user.all);


module.exports = router;
