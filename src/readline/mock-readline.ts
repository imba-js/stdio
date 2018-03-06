import {Readline} from './readline';
import {MockOutput} from '../outputs';


export class MockReadline implements Readline
{


	private _output: MockOutput;

	private _queries: {[query: string]: string} = {};


	constructor(output: MockOutput = new MockOutput)
	{
		this._output = output;
	}


	public question(query: string, callback: (answer: string) => void): void
	{
		this._output.stdout(query);
		callback(typeof this._queries[query] === 'undefined' ? '' : this._queries[query]);
	}


	public close(): void
	{
		this._queries = {};
	}


	public setAnswer(query: string, answer: string): void
	{
		this._queries[query] = answer;
	}

}
