import { Course } from "../domain/entities/course";

export class CourseRepositery {
  private _courses: Course[];
  constructor() {
    this._courses = [];
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
  getAll(): Promise<Course[]> {
    throw new Error("Method not implemented.");
  }

  getOne(id: number): Promise<Course> {
    throw new Error("Method not implemented.");
  }
}
