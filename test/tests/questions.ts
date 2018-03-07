import {expect} from 'chai';
import {Questions, MockOutput, MockReadline} from '../../src';


let output: MockOutput;
let rl: MockReadline;
let questions: Questions;


describe('#Questions', () => {

	beforeEach(() => {
		output = new MockOutput;
		rl = new MockReadline(output);
		questions = new Questions(output, rl);
	});

	describe('askQuestion()', () => {

		it('should ask simple question', async () => {
			const answer = await questions.askQuestion('greeting');

			expect(answer).to.be.equal('');
			expect(output.getStdout().getContent()).to.be.eql(['greeting: ']);
		});

		it('should ask question and use default value', async () => {
			const answer = await questions.askQuestion('greeting', {defaultValue: 'hello world'});

			expect(answer).to.be.equal('hello world');
			expect(output.getStdout().getContent()).to.be.eql(['greeting [default: hello world]: ']);
		});

		it('should ask question and reject it when it is required without answer', () => {
			questions.askQuestion('greeting', {
				required: true,
				retries: 2,
			}).catch((e) => expect(e).to.be.equal('Failed to answer the question too many times (2).'));
		});

	});

	describe('askQuestions()', () => {

		it('should ask many questions', async () => {
			const answers = await questions.askQuestions([
				{question: 'a'},
				{question: 'b'},
			]);

			expect(answers).to.be.eql({
				a: '',
				b: '',
			});
		});

		it('should ask many questions with custom keys', async () => {
			const answers = await questions.askQuestions([
				{key: 'A', question: 'a'},
				{key: 'B', question: 'b'},
			]);

			expect(answers).to.be.eql({
				A: '',
				B: '',
			});
		});

	});

});
