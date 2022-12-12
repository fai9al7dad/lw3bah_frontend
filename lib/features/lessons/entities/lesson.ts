export class Lesson {
  id?: string;
  title?: string;
  description: string;
  sectionID?: number;
  constructor({
    id,
    title,
    description,
    sectionID,
  }: {
    id?: string;
    title?: string;
    description: string;

    sectionID?: number;
  }) {
    this.id = id;
    this.title = title;
    this.description = description;

    this.sectionID = sectionID;
  }
}
