import {Stream} from './stream';


export class MockStream implements Stream
{


	private _content: Array<string> = [];

	private _columns: number;

	private _rows: number;


	constructor(columns: number = 80, rows: number = 20)
	{
		this._columns = columns;
		this._rows = rows;
	}


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


	public getColumns(): number
	{
		return this._columns;
	}


	public getRows(): number
	{
		return this._rows;
	}

}
