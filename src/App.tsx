import { useEffect, useState } from 'react'
import './App.css'
import words from './assets/words.json'
import React from 'react'
import Word from './components/Word'
import { LetterStyleType, ILetter } from './types/LetterStyleType'

function wordToLetters(target: string, cur: string): ILetter[] {
   console.log(target, cur)
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

function App() {
   const [count, setCount] = useState(0)
   const [wordList, setWordList] = useState<string[]>([''])
   const [prevWords, setPrevWords] = useState<ILetter[][]>([])
   const [curWord, setCurWord] = useState<string>('')
   const [input, setInput] = useState('')
   // const testLetters = [{ value: 't', style: LetterStyleType.currentCorrect }, { value: 's', style: LetterStyleType.currentWrong }]
   let testWord = 'commit';

   function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      // user pressed space - handle word change 
      if (event.target.value.at(-1) == ' ') {
         setPrevWords([...prevWords, wordToLetters(curWord, input)])
         setWordList(wordList.slice(1))
         setCurWord(wordList[0])
         event.target.value = '';
      }

      // makes input controlled
      setInput(event.target.value.slice(1))
   }
   useEffect(() => {
      let allWords = words.commonWords
      let wordCount = 50;
      let wrds = new Array(wordCount).fill(' ').map((item) => allWords[Math.floor(Math.random() * allWords.length)])
      setWordList(wrds);
      setCurWord(wrds[0])
      console.log(curWord);
   }, [])
   return (
      <div>
         <div className="card">
            {
               prevWords.map((word, index) => { return <Word key={index} letters={word} /> })
            }
            <Word letters={wordToLetters(curWord, input)} />
            {
               wordList.map((word, index) => { return (<span key={index}>{word} </span>) })
            }
         </div>
         <input type='text' value={'*' + input} onChange={(e) => handleChange(e)} />

      </div>
   )
}

export default App
