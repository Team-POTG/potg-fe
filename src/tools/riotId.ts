export class RiotId {
  private _gameName: string = "";
  private _tagLine: string = "";

  constructor(riotId: string) {
    const splittedId = riotId.split("#");
    this._gameName = splittedId[0];
    this._tagLine = splittedId[1];
  }

  separate(): { gameName: string; tagLine: string } {
    return { gameName: this._gameName, tagLine: this._tagLine };
  }
}
