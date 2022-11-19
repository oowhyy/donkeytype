import React from 'react'
import wordToLetters from '../logic/utils';
import { ILetter, LetterType, WordProps } from '../types/types';
import './Word.scss'





const Word = ({ typed, target, type }: WordProps) => {
   let letters = wordToLetters(target, typed)
   return (
      <>

         {letters.map((l, ind) => <span key={ind} className={l.type}>{l.value}</span>)}
         <span> </span>
      </>
   )
}

export default Word	