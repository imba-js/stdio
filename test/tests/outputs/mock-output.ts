import {expect} from 'chai';
import {MockOutput, MockStream} from '../../../src/index';


let output: MockOutput;


describe('#outputs/MockOutput', () => {

	beforeEach(() => {
		output = new MockOutput;
	});

	describe('getStdout()', () => {

		it('should check class', () => {
			expect(output.getStdout()).to.be.an.instanceOf(MockStream);
		});

	});

	describe('getStderr()', () => {

		it('should check class', () => {
			expect(output.getStderr()).to.be.an.instanceOf(MockStream);
		});

	});

	describe('log()', () => {

		it('should log a message', () => {
			output.log('hello world');

			expect(output.getStdout().getContent()).to.be.eql(['hello world\n']);
			expect(output.getStderr().getContent()).to.be.eql([]);
		});

	});

	describe('stdout()', () => {

		it('should write a message to stdout', () => {
			output.stdout('hello world');

			expect(output.getStdout().getContent()).to.be.eql(['hello world']);
			expect(output.getStderr().getContent()).to.be.eql([]);
		});

	});

	describe('stderr()', () => {

		it('should write a message to stderr', () => {
			output.stderr('hello world');

			expect(output.getStdout().getContent()).to.be.eql([]);
			expect(output.getStderr().getContent()).to.be.eql(['hello world']);
		});

	});

	describe('getColumns()', () => {

		it('should get columns count from stdout', () => {
			expect(output.getColumns()).to.be.equal(80);
		});

	});

	describe('getRows()', () => {

		it('should get rows count from stdout', () => {
			expect(output.getRows()).to.be.equal(20);
		});

	});

});
