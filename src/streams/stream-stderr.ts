import {NativeStream} from './native-stream';


export class StreamStderr extends NativeStream
{


	constructor()
	{
		super('stderr');
	}

}
