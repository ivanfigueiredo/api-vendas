/* eslint-disable indent */
import { LoadCellUseCase } from './domain/use-case/load-cell/load-cell.use-case'
import { LoadCellController } from './presentation/load-cell/load-cell.controller'
import { LoadCellByCodePersister } from './infra/db-mongo/load-cell/load-cell.persister'
import { AddCellUseCase } from './domain/use-case/add-cell.use-case/add-cell.use-case'
import { CellMapper } from './infra/mapper/cell.mapper'
import { SaveCellPersister } from './infra/db-mongo/add-cell/save-cell.persister'
import { AddCellController } from './presentation/add-cell/add-cell.controller'
import { UpdateCellUseCase } from './domain/use-case/update-cell.use-case/update-cell.use-case'
import { UpdateCellPersister } from './infra/db-mongo/update-cell/update-cell.persister'
import { UpdateCellController } from './presentation/update-cell/update-cell.controller'
import { GroupCellsUseCase } from './domain/use-case/goup-cell.use-case/group-cell.use-case'
import { GroupCellsPersister } from './infra/db-mongo/group-cells/group-cells.persister'
import { GroupCellsController } from './presentation/group-cells/group-cells.controlle'

const cellMapper = new CellMapper()
const saveCellPersister = new SaveCellPersister(cellMapper)

const addCellUseCase = new AddCellUseCase(saveCellPersister)

const addCellController = new AddCellController(addCellUseCase)

const loadCellByCode = new LoadCellByCodePersister()

const loadCellUseCase = new LoadCellUseCase(loadCellByCode)

const loadCellController = new LoadCellController(loadCellUseCase)

const updateCellPersister = new UpdateCellPersister()

const updateCellUseCase = new UpdateCellUseCase(updateCellPersister)

const updateCellController = new UpdateCellController(updateCellUseCase)

const groupCellsPersister = new GroupCellsPersister()

const groupCellsUseCase = new GroupCellsUseCase(groupCellsPersister)

const groupCellsController = new GroupCellsController(groupCellsUseCase)

export {
    addCellUseCase,
    loadCellUseCase,
    updateCellUseCase,
    groupCellsUseCase,
    groupCellsController,
    updateCellController,
    loadCellController,
    addCellController
}
