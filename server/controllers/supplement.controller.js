
import user from '../models/supplement.model.js'
import Supplement from '../models/supplement.model.js'
import extend from 'lodash/extend.js'
import errorHandler from './error.controller.js'

const create = async (req, res) => {
    const supplement = new Supplement(req.body)


    console.log("Controller list() handling request")
    try {
        await supplement.save()
        console.log("Controller list() object created")

        return res.status(200).json({
            message: "Successfully created object"
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}
const list = async (req, res) => {
    try {

        console.log("Controller list() handling request")
        let supplements = await Supplement.find()
        console.log("Controller list() handling request " +supplements.length)

        res.json(supplements)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}
// const userByID = async (req, res, next, id) => {
//     try {
        

//         let supplements = await Supplement.findById(id)
//         if (!supplements)
//             return res.status('400').json({
//                 error: "User not found"
//             })
            
//         req.profile = supplements
//         next()
//     } catch (err) {
//         return res.status('400').json({
//             error: "Could not retrieve supplement"
//         })
//     }
// }


const userByID = async (req, res) => {
    try {
        
        const getID = req.body   
        let supplements = await Supplement.findById(getID)
        if (!supplements) {
            return res.status(404).json({ error: 'supplements not found' });
            }
            res.status(200).res.json(supplements);

        
       console.log(supplements)
    } catch (err) {
        return res.status(400).json({
            error: "Could not retrieve supplement"
        })
    }
}




const read = (req, res) => {
    req.profile.hashed_password = undefined
    req.profile.salt = undefined
    return res.json(req.profile)
}
const update = async (req, res) => {
    try {
        let user = req.profile
        user = extend(user, req.body)
        user.updated = Date.now()
        await user.save()
        user.hashed_password = undefined
        user.salt = undefined
        res.json(user)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}
const remove = async (req, res) => {
    try {
        let user = req.profile
        let deleteSupplements = await Supplement.deleteOne()
        deleteSupplements.hashed_password = undefined
        deleteSupplements.salt = undefined
        res.json(deleteSupplements)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const removeAllData = async (req, res) => {
    try {
        let user = req.profile
        let deleteSupplements = await Supplement.deleteMany()
        deleteSupplements.hashed_password = undefined
        deleteSupplements.salt = undefined
        res.json(deleteSupplements)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}


export default { create, userByID, read, list, remove, update, removeAllData }

