import {Stream} from './stream';


export class MockStream implements Stream
{


	private _content: Array<string> = [];


	public write(message: string): void
	{
		this._content.push(message);
	}


	public isTTY(): boolean
	{
		return true;
	}


	public getContent(): Array<string>
	{
		return this._content;
	}

}
