import React from 'react'
import wordToLetters from '../logic/styleGenerator';
import { ILetter, LetterStyleType } from '../types/LetterStyleType';
import './Word.scss'


const enum WordTypes {
   finished = 'finished',
   current = 'current',
   future = 'future',
}
interface WordProps {
   typed?: string;
   target: string;
   type?: WordTypes;

}

const Word = ({ typed, target, type }: WordProps) => {
   let letters = wordToLetters(target, typed || '')
   return (
      <>

         {letters.map((l, ind) => <span key={ind} className={l.style}>{l.value}</span>)}
         <span> </span>
      </>
   )
}

export default Word	