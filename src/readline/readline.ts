export interface Readline
{


	question(query: string, callback: (answer: string) => void): void;

	close(): void;

}
