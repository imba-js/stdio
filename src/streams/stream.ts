export interface Stream
{


	write(message: string): void;

	isTTY(): boolean;

	getColumns(): number;

	getRows(): number;

}
