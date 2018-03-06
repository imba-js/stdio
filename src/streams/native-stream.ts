import {Stream} from './stream';


export abstract class NativeStream implements Stream
{


	protected _stream: NodeJS.WriteStream;


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

}
