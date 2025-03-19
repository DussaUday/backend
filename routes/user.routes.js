import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";
import { getUserProfile } from "../controllers/auth.controller.js";
import { deleteAccount } from "../controllers/auth.controller.js"; 
//import { blockUser } from "../controllers/message.controller.js";
import { followUser , sendFollowRequest,acceptFollowRequest,rejectFollowRequest, checkFollowStatus, unfollowUser} from "../controllers/user.controller.js";
const router = express.Router();

router.get("/", getUsersForSidebar);
router.get("/:id", getUserProfile);
router.delete("/account/delete", deleteAccount); // Correct route!
//router.post("/block/:id", blockUser);
router.post("/follow/:userId", sendFollowRequest);
router.post("/accept-follow/:userId", acceptFollowRequest);
router.post("/reject-follow/:userId", rejectFollowRequest);
router.get("/:userId/follow-status", checkFollowStatus);
router.post("/unfollow/:userId", unfollowUser);

export default router;
