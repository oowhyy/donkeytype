import { ILetter, LetterStyleType } from "../types/LetterStyleType";

export default function wordToLetters(target: string, cur: string): ILetter[] {

   let res: ILetter[] = [];
   let targetLegth = target.length;
   let currentLenght = cur.length;
   for (let i = 0; i < currentLenght; i++) {
      if (i >= targetLegth) {
         res.push({ value: cur[i], style: LetterStyleType.currentWrongOver })
         continue;
      }
      if (cur[i] === target[i]) {
         res.push({ value: cur[i], style: LetterStyleType.currentCorrect })
      } else {
         res.push({ value: target[i], style: LetterStyleType.currentWrong })
      }
   }
   if (targetLegth > currentLenght) {
      [...target.slice(currentLenght)].forEach(
         c => res.push({ value: c, style: LetterStyleType.currentUntyped })
      )
   }
   return res;
}