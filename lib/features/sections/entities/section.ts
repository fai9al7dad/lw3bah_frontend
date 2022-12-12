import { Lesson } from "./../../lessons/entities/lesson";
export class Section {
  id?: string;
  title: string;
  courseID?: number;
  order?: number;
  lessons?: Lesson[];
  constructor({
    id,
    title,
    courseID,
    order,
    lessons,
  }: {
    id?: string;
    title: string;
    courseID?: number;
    order?: number;
    lessons?: Lesson[];
  }) {
    this.id = id;
    this.title = title;
    this.courseID = courseID;
    this.order = order;
    this.lessons = lessons;
  }
}
