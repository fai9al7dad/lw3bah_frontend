// create a mongo driver class that extends the base driver class

import { Course } from "../../features/courses/entities/course";
import { IRead, IWrite } from "./BaseDriver";

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
