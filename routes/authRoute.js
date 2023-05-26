import express from 'express';
import {
    testController, 
    registerController, 
    loginController,
    forgotPasswordController,
    updateProfileController,
    getOrdersController,
    getAllOrdersController,
    orderStatusController
} from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
//router object
const router = express.Router()

//routing
//REGISTER || METHOD POST

router.post('/register', registerController)

//LOGIN ||POST
router.post('/login', loginController)

//Forgot Password || POST
router.post('/forgot-password', forgotPasswordController);

//Protected User Route Auth
router.get('/user-auth', requireSignIn, (req,res)=>{
    res.status(200).send({ok: true})
});

//Protected Admin Route Auth
router.get('/admin-auth', requireSignIn, isAdmin, (req,res)=>{
    res.status(200).send({ok: true})
});

//update profile
router.put('/profile', requireSignIn, updateProfileController);

//orders
router.get('/orders', requireSignIn, getOrdersController)

//all orders
router.get('/all-orders', requireSignIn, isAdmin, getAllOrdersController)

//order status updata
router.push('/order-status/:orderID', requireSignIn, isAdmin, orderStatusController)

//test routes
router.get('/test', requireSignIn, isAdmin, testController)
export default router;