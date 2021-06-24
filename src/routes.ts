
import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController"

const router = Router();


const createUserController = new CreateUserController();
router.get("/", (request, response) => {
  response.send("ok")
})
router.post("/users", createUserController.handle);
export {router}