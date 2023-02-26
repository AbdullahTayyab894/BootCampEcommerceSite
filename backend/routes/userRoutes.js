import express from "express";
import asyncHandler from 'express-async-handler'
import User from "../models/userModel.js";
const router = express.Router();

// @ desc fetch all data
// @ route get/application/product
// @ access public


router.get('/', asyncHandler(async (req, res) => {
    const users = await User.find({})
    res.json(users)
})
)

// @ desc fetch single product
// @ route get/application/product/:id
// @ access public

router.get('/:id', asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (user) {
        res.json(user)
    }
    else {

        res.status(404)
        throw new Error ({ massage: 'User not found' })
    }
})
)

export default router