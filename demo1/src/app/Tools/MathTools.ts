export class MathTools
{
  static getNum(limit:number):number
  {
    return Math.floor(Math.random()*limit + 1);
  }
}
