
export interface ILoadCellRepo {
  loadCellByCode (code: string): Promise<any>
}
