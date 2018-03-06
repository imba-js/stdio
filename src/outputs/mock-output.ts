import {Output} from './output';
import {MockStream} from '../streams';


export class MockOutput extends Output
{


	constructor(stdout: MockStream = new MockStream, stderr: MockStream = new MockStream)
	{
		super(stdout, stderr);
	}


	public getStdout(): MockStream
	{
		return <MockStream>this._stdout;
	}


	public getStderr(): MockStream
	{
		return <MockStream>this._stderr;
	}

}
