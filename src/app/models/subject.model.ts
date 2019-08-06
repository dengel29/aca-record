export class Subject {
  constructor(
    public id?: number,
    public title?: string,
    public score?: number,
    public playerForeignKey?: number ) {}
}

// public int Id { get; set; }
//         public string Title { get; set; }
//         public int Score { get; set; }

//         public int PlayerForeignKey { get; set; }
//         public Player Player { get; set; }
