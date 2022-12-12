import { Lesson } from "../../../lessons/domain/entities/lesson";
export class Section {
  id?: string;
  title: string;
  courseID?: string;
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
    courseID?: string;
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
