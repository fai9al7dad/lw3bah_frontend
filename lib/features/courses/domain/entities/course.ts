export class Course {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public topic: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.topic = topic;
  }
}
