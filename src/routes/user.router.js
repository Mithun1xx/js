import { Router } from "express";
import {registerUser} from '../controller/user.controller.js'
import { upload } from "../middleware/multer.middaleware.js";
const router= Router()


router.route('/register').post(upload.none(),registerUser)


export default router