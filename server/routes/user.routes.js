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
 router.route('/store/supplements').get(supplementController.list)
 router.route('/store/supplements').post(supplementController.create)
 router.route('/store/supplements/:id').get(supplementController.userByID)
 router.route('/store/supplements/:id').delete(supplementController.remove)
 export default router
