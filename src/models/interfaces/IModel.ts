export interface IModel<T> {
  create(obj: T): Promise<T>,
  getAll(): Promise<T[]>,
  getOne(id: string): Promise<T | null>,
  update(id: string, obj: T): Promise<T | null>,
  delete(id: string): Promise<T | null>
}