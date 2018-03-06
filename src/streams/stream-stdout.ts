import {NativeStream} from './native-stream';


export class StreamStdout extends NativeStream
{


	constructor()
	{
		super('stdout');
	}

}
