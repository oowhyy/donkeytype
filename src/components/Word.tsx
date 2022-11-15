import React from 'react'
import { ILetter, LetterStyleType } from '../types/LetterStyleType';
import './Word.scss'


interface WordProps {
   letters: ILetter[]

}

const Word = ({ letters }: WordProps) => {
   return (
      <>
         {
            letters.map((letter, index) =>
               <span key={index} className={letter.style}>{letter.value}</span>)
         }
         <span> </span>
      </>
   )
}

export default Word	