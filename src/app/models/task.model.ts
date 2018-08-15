export class Task
{
  public done: boolean = false;
  constructor(public description: string, public priority: number) { }

  TaskDone()
  {
    if(this.done)
    {
      return "Yes";
    }
    return "No";
  }
}
