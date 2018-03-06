import {Readline} from './readline';
import * as readline from 'readline';


export class NativeReadline implements Readline
{


	private _rl: readline.ReadLine;


	public question(query: string, callback: (answer: string) => void): void
	{
		this.getReadLine().question(query, callback);
	}


	public close(): void
	{
		if (typeof this._rl !== 'undefined') {
			this._rl.close();
		}
	}


	private getReadLine(): readline.ReadLine
	{
		if (typeof this._rl === 'undefined') {
			this._rl = readline.createInterface({
				input: process.stdin,
				output: process.stdout,
			});
		}

		return this._rl;
	}

}
