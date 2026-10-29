import { Router } from "express";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../controller/todo.controller.js";
const todoRoutes = Router();


// base_url/todo/
todoRoutes.post("/",createTodo)  // --> route_name + controller function
// base_url/todo/
todoRoutes.get("/",getTodos)  // --> route_name + controller function
//base_url/todo/:id
todoRoutes.patch("/:id",updateTodo)  // --> route_name + controller function
// base_url/todo/:id
todoRoutes.delete("/:id", deleteTodo)  // --> route_name + controller function

export default todoRoutes;