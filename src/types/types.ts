
export const enum WordType {
	finished = 'finished',
	current = 'current',
	future = 'future',
}
export const enum LetterType {
	finished = 'finished',
	finishedWrong = 'finished wrong',
	finishedWrongOver = 'finished wrong over',
	currentUntyped = 'current untyped',
	currentCorrect = 'current correct',
	currentWrong = 'current wrong',
	currentWrongOver = 'current wrong over',
	future = 'future'
}

export interface IWord {
	id: number;
	value: string;
}
export interface ILetter {
	value: string;
	type: LetterType;
}
export interface WordProps {
	id: number;
	typed: string | null;
	target: string;
	type?: WordType;

}