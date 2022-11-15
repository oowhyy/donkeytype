export const enum LetterStyleType {
	finished = 'finished',
	finishedWrong = 'finished wrong',
	finishedWrongOver = 'finished wrong over',
	currentUntyped = 'current untyped',
	currentCorrect = 'current correct',
	currentWrong = 'current wrong',
	currentWrongOver = 'current wrong over',
	future = 'future'
}

export interface ILetter {
	value: string;
	style: LetterStyleType;
}