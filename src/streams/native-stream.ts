import * as termSize from 'term-size';
import {Stream} from './stream';


declare interface TermSize
{
	columns: number,
	rows: number,
}


export abstract class NativeStream implements Stream
{


	protected _stream: NodeJS.WriteStream;

	private _size: TermSize;


	constructor(type: string)
	{
		if (typeof process === 'undefined' || typeof process[type] === 'undefined') {
			throw new Error(`process.${type} is not available.`);
		}

		this._stream = process[type];
	}


	public write(message: string): void
	{
		this._stream.write(message);
	}


	public isTTY(): boolean
	{
		return this._stream.isTTY;
	}


	public getColumns(): number
	{
		return this.getSize().columns;
	}


	public getRows(): number
	{
		return this.getSize().rows;
	}


	private getSize(): TermSize
	{
		if (typeof this._size === 'undefined') {
			this._size = termSize();
		}

		return this._size;
	}

}
