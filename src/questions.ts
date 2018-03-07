import {Output} from './outputs';
import {Readline} from './readline';


export declare interface QuestionOptions
{
	required?: boolean,
	defaultValue?: string,
	retries?: number,
}


export class Questions
{


	private _output: Output;

	private _rl: Readline;


	constructor(output: Output, rl: Readline)
	{
		this._output = output;
		this._rl = rl;
	}


	public async askQuestion(question: string, options: QuestionOptions = {}): Promise<string>
	{
		return this._askQuestion(question, 0, options);
	}


	private async _askQuestion(question: string, retried: number, options: QuestionOptions = {}): Promise<string>
	{
		return new Promise<string>((resolve, reject) => {
			if (typeof options.retries !== 'undefined' && options.retries === retried) {
				reject(`Failed to answer the question too many times (${retried}).`);
				return;
			}

			const meta: Array<string> = [];

			if (options.required) {
				meta.push('required');
			}

			if (typeof options.defaultValue !== 'undefined') {
				meta.push(`default: ${options.defaultValue}`);
			}

			this._rl.question(`${question}${meta.length ? ' [' + meta.join(', ') + ']' : ''}: `, (answer) => {
				answer = answer.trim();

				if (options.required && answer === '') {
					this._output.log('This question is required.');
					resolve(this._askQuestion(question, retried + 1, options));

				} else {
					if (answer === '' && typeof options.defaultValue !== 'undefined') {
						answer = options.defaultValue;
					}

					resolve(answer);
				}
			});
		});
	}

}
