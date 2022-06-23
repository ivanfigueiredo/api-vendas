import { LoadCellUseCase } from './domain/use-case/load-cell/load-cell.use-case'
import { LoadCellController } from './presentation/load-cell/load-cell.controller'
import { LoadCellByCodePersister } from './infra/db-mongo/load-cell/load-cell.persistir'
import { AddCellUseCase } from './domain/use-case/add-cell.use-case/add-cell.use-case'
import { CellMapper } from './infra/mapper/cell.mapper'
import { SaveCellPersister } from './infra/db-mongo/add-cell/save-cell.persister'
import { AddCellController } from './presentation/add-cell/add-cell.controller'

const cellMapper = new CellMapper()
const saveCellPersister = new SaveCellPersister(cellMapper)

const addCellUseCase = new AddCellUseCase(saveCellPersister)

const addCellController = new AddCellController(addCellUseCase)

const loadCellByCode = new LoadCellByCodePersister()

const loadCellUseCase = new LoadCellUseCase(loadCellByCode)

const loadCellController = new LoadCellController(loadCellUseCase)

export { addCellUseCase, loadCellUseCase, loadCellController, addCellController }
