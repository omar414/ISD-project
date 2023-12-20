import  express  from "express";
import { createResidencyForSale,getAllResidenciesForSale ,getResidencyForSale} from "../controllers/residencyContrl.js";
const router = express.Router()

router.post("/create", createResidencyForSale)
router.get("/allresd", getAllResidenciesForSale)
router.get("/:id", getResidencyForSale)
export {router as residencyRouteForSale}