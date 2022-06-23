import { AddCellUseCase } from './domain/use-case/add-cell.use-case/add-cell.use-case'
import { CellMapper } from './infra/mapper/cell.mapper'
import { SaveCellPersister } from './infra/db-mongo/add-cell/save-cell.persister'
import { AddCellController } from './presentation/add-cell/add-cell.controller'

const cellMapper = new CellMapper()
const saveCellPersister = new SaveCellPersister(cellMapper)

const addCellUseCase = new AddCellUseCase(saveCellPersister)

const addCellController = new AddCellController(addCellUseCase)

export { addCellUseCase, addCellController }
