import  express  from "express";
import { bookVisit, bookVisitForSale, cancelBooking, cancelBookingForSale, createUser, getAllBookings, getAllBookingsForSale, getAllFavorites, getAllFavoritesForSale, toFav, toFavForSale } from "../controllers/userContrl.js";
import jwtCheck from "../config/auth0Config.js";
const router = express.Router()

router.post("/register" ,createUser)
router.post("/bookVisit/:id", bookVisit)
router.post("/allBookings", getAllBookings)
router.post("/removeBooking/:id",cancelBooking)
router.post("/toFav/:rid",toFav)
router.post("/allFav/", getAllFavorites)
router.post("/bookVisit/:id", bookVisitForSale)
router.post("/allBookings", getAllBookingsForSale)
router.post("/removeBooking/:id",cancelBookingForSale)
router.post("/toFav/:rid",toFavForSale)
router.post("/allFav/", getAllFavoritesForSale)
export {router as userRoute}
