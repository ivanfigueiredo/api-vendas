import { Router } from 'express'
import {
  addCellController,
  loadCellController,
  updateCellController,
  groupCellsController
} from '../../cell.module'
const router = Router()

router.post('/add', async (req, res) => {
  const result = await addCellController.handle(req)
  return res.json({ result }).send()
})

router.get('/cellCode', async (req, res) => {
  const result = await loadCellController.handle(req)
  return res.json({ result }).send()
})

router.put('/updateOne', async (req, res) => {
  const result = await updateCellController.handle(req)
  return res.json({ result }).send()
})

router.get('/groupcells', async (req, res) => {
  const result = await groupCellsController.handle(req)
  return res.json({ result }).send()
})

export { router }
