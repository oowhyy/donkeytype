import { ILetter, IWord, LetterType } from "../types/types";

export default function wordToLetters(target: string, typed: string | null): ILetter[] {
   if (typed === null) {
      return target.split('').map((letter) => ({ value: letter, type: LetterType.future }))
   }
   let res: ILetter[] = [];
   let targetLegth = target.length;
   let currentLenght = typed.length;
   for (let i = 0; i < currentLenght; i++) {
      if (i >= targetLegth) {
         res.push({ value: typed[i], type: LetterType.currentWrongOver })
         continue;
      }
      if (typed[i] === target[i]) {
         res.push({ value: typed[i], type: LetterType.currentCorrect })
      } else {
         res.push({ value: target[i], type: LetterType.currentWrong })
      }
   }
   if (targetLegth > currentLenght) {
      [...target.slice(currentLenght)].forEach(
         c => res.push({ value: c, type: LetterType.currentUntyped })
      )
   }
   return res;
}

//
export function getWords(data: string[], wordCount = 50): IWord[] {
   let wrds = new Array(wordCount).fill(' ').map(
      (item, ind) => { return { id: ind, value: data[Math.floor(Math.random() * data.length)] } }
   )
   return wrds;

}