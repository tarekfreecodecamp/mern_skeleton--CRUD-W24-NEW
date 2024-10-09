import express from 'express'
import userCtrl from '../controllers/supplement.controller.js' 
 import supplementController from '../controllers/supplement.controller.js' 
 const router = express.Router()
 router.route('/api/users').post(userCtrl.create)
 router.route('/api/users').get(userCtrl.list)
 router.param('userId', userCtrl.userByID)
 router.route('/api/users/:userId').get(userCtrl.read)
 router.route('/api/users/:userId').put(userCtrl.update)
 router.route('/api/users/:userId').delete(userCtrl.remove)

 //assignment code
 router.route('/store/supplements').get(supplementController.list)  // get all supplements
 router.route('/store/supplements/:id').get(supplementController.userByID) // get supplements by id
 router.route('/store/supplements').post(supplementController.create)    // add new supplement
 router.route('/store/supplements/:id').delete(supplementController.remove) // delete supplement by id
 router.route('/store/supplements').delete(supplementController.removeAllData) // delete all supplement
 export default router
