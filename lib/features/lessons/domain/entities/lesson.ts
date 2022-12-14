export class Lesson {
  id?: string;
  title?: string;
  description: string;
  sectionID?: number;
  createdAt?: string;
  constructor({
    id,
    title,
    description,
    createdAt,
    sectionID,
  }: {
    id?: string;
    title?: string;
    description: string;
    createdAt?: string;
    sectionID?: number;
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.createdAt = createdAt;
    this.sectionID = sectionID;
  }
}
