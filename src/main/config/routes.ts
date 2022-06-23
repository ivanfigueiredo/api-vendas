import { Request, Router, Response } from 'express'
import { addCellController } from '../../cell.module'
const router = Router()

router.post('/add', async (req, res) => {
  const result = await addCellController.handle(req)

  return res.json({ result }).send()
})

router.get('/test', (req: Request, res: Response) => {
  return res.json({ Ok: req.query }).send()
})

export { router }
