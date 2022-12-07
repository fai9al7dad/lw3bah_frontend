export interface IWrite<T> {
  create(item: T): Promise<boolean>;
  update(id: number, item: T): Promise<boolean>;
  delete(id: number): Promise<boolean>;
}
export interface IRead<T> {
  getAll(item: T): Promise<T[]>;
  getOne(id: number): Promise<T>;
}

export abstract class MongoDriver implements IWrite<Course>, IRead<Course> {
  getAll(item: Course): Promise<Course[]> {
    throw new Error("Method not implemented.");
  }
  getOne(id: number): Promise<Course> {
    throw new Error("Method not implemented.");
  }
  create(item: Course): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  update(id: number, item: Course): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}

// const t = new MongoDriver();

// t.create(new Course("1", "2", "3", "4"));
