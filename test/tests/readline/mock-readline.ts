import {expect} from 'chai';
import {MockReadline} from '../../../src/index';


let rl: MockReadline;


describe('#readline/MockReadline', () => {

	beforeEach(() => {
		rl = new MockReadline;
	});

	describe('question()', () => {

		it('should return empty answer', (done) => {
			rl.question('', (answer) => {
				expect(answer).to.be.equal('');
				done();
			})
		});

		it('should return an answer to a question', (done) => {
			rl.setAnswer('', 'hello world');
			rl.question('', (answer) => {
				expect(answer).to.be.equal('hello world');
				done();
			});
		});

	});

	describe('close()', () => {

		it('should reset answers', (done) => {
			rl.setAnswer('', 'hello world');

			rl.question('', (answer) => {
				expect(answer).to.be.equal('hello world');
			});

			rl.close();

			rl.question('', (answer) => {
				expect(answer).to.be.equal('');
				done();
			});
		});

	});

});
