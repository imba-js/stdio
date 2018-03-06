import {expect} from 'chai';
import {MockStream} from '../../../src/index';


let stream: MockStream;


describe('#streams/MockStream', () => {

	beforeEach(() => {
		stream = new MockStream;
	});

	it('should write into stream', () => {
		expect(stream.getContent()).to.be.eql([]);

		stream.write('a');
		stream.write('b');
		stream.write('c');

		expect(stream.getContent()).to.be.eql(['a', 'b', 'c']);
	});

});
