export interface IService<T> {
  create(obj: T): Promise<T>,
  getAll(): Promise<T[]>,
  getOne(id: string): Promise<T>,
  update(id: string, obj: T): Promise<T>,
  delete(id: string): Promise<void>
}