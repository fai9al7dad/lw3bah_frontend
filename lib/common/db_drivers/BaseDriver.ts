export interface IWrite<T> {
  create(item: T): Promise<boolean>;
  update(id: number, item: T): Promise<boolean>;
  delete(id: number): Promise<boolean>;
}
export interface IRead<T> {
  getAll(item: T): Promise<T[]>;
  getOne(id: number): Promise<T>;
}

export interface BaseCrud<T> {
  create(item: T): Promise<boolean>;
  update(id: number, item: T): Promise<boolean>;
  delete(id: number): Promise<boolean>;
  getAll(): Promise<T[]>;
  getOne(id: number): Promise<T>;
}

export abstract class BaseDriver<T> implements IWrite<T>, IRead<T> {
  public readonly collection: BaseCrud<T>;

  constructor(collection: BaseCrud<T>) {
    this.collection = collection;
  }
  async create(item: T): Promise<boolean> {
    const created = await this.collection.create(item);
    return created;
  }
  async update(id: number, item: T): Promise<boolean> {
    const updated = await this.collection.update(id, item);
    return updated;
  }
  async delete(id: number): Promise<boolean> {
    const deleted = await this.collection.delete(id);
    return deleted;
  }
  async getAll(): Promise<T[]> {
    const found = await this.collection.getAll();
    return found;
  }
  async getOne(id: number): Promise<T> {
    const found = await this.collection.getOne(id);
    return found;
  }
}
