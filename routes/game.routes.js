import express from "express";
//import protectRoute from "../middleware/protectRoute.js";
import { sendGameRequest, acceptGameRequest, rejectGameRequest, markCell , getPendingGameRequests} from "../controllers/game.controller.js";
import { io, userSocketMap } from "../socket/socket.js";

const router = express.Router();

router.post("/send-request", (req, res) => sendGameRequest(req, res, io, userSocketMap));
router.post("/accept-request", (req, res) => acceptGameRequest(req, res, io, userSocketMap));
router.post("/reject-request", (req, res) => rejectGameRequest(req, res, io, userSocketMap));
router.post("/mark-cell", (req, res) => markCell(req, res, io, userSocketMap));
router.get("/pending-requests", (req, res) => getPendingGameRequests(req, res));

export default router;
