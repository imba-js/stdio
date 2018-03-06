import {Output} from './output';
import {StreamStdout, StreamStderr} from '../streams';


export class NativeOutput extends Output
{


	constructor()
	{
		super(new StreamStdout, new StreamStderr);
	}

}
