import {Stream} from '../streams';


export abstract class Output
{


	protected _stdout: Stream;

	protected _stderr: Stream;


	constructor(stdout: Stream, stderr: Stream)
	{
		this._stdout = stdout;
		this._stderr = stderr;
	}


	public log(message: string): void
	{
		this.stdout(`${message}\n`);
	}


	public stdout(message: string): void
	{
		this._stdout.write(message);
	}


	public stderr(message: string): void
	{
		this._stderr.write(message);
	}

}
