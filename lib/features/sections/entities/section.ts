export class Section {
  id?: string;
  title: string;
  courseID?: number;

  constructor({
    id,
    title,
    courseID,
  }: {
    id?: string;
    title: string;
    courseID?: number;
  }) {
    this.id = id;
    this.title = title;
    this.courseID = courseID;
  }
}
