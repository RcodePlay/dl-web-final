export class Event {
    constructor(
        public readonly _id: unknown,
        public title: string,
        public author: string,
        public content: string,
        public publishedDate: Date,
        public dateOfEvent: Date,
        public tags: [],
    ) {}
}
