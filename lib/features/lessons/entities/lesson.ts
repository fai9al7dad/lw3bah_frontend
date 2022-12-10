export class Lesson {
  id?: string;
  description: string;
  sectionID?: number;
  constructor({
    id,
    description,
    sectionID,
  }: {
    id?: string;
    description: string;

    sectionID?: number;
  }) {
    this.id = id;
    this.description = description;

    this.sectionID = sectionID;
  }
}
