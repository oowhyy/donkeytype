import { useEffect, useState } from 'react'
import './App.css'
import words from './assets/words.json'
import React from 'react'
import Word from './components/Word'
import { LetterStyleType, ILetter } from './types/LetterStyleType'


interface WordProps {
   target: string,
   factual: string,
}

function App() {
   const [count, setCount] = useState(0)
   const [wordList, setWordList] = useState<string[]>([''])
   const [prevWords, setPrevWords] = useState<ILetter[][]>([])
   const [curWord, setCurWord] = useState<string>('')
   const [zipped, setZipped] = useState<WordProps[]>([])
   const [input, setInput] = useState('')
   // const testLetters = [{ value: 't', style: LetterStyleType.currentCorrect },
   // { value: 's', style: LetterStyleType.currentWrong }]
   let testWord = 'commit';

   useEffect(() => {
      let allWords = words.commonWords
      let wordCount = 50;
      let wrds = new Array(wordCount).fill(' ').map((item) => allWords[Math.floor(Math.random() * allWords.length)])
      let zp = wrds.map((e, i) => ({ target: e, factual: '' }))
      setZipped(zp)
      setWordList(wrds);
      setCurWord(wrds[0])
   }, [])
   function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      // user pressed space - handle word change 

      let typed = event.target.value.split(' ')
      typed = Array.from({ ...typed, length: wordList.length }, (v) => v ?? '')
      let zp = wordList.map((e, i) => ({ target: e, factual: typed[i] }))
      setZipped(zp);
      // makes input controlled
      setInput(event.target.value)
      console.log(zp)
   }

   return (
      <div>
         <div className="card">
            {
               zipped.map((el, ind) => <Word key={ind} target={el.target} ></Word>)
            }
         </div>
         <input type='text' value={input} onChange={(e) => handleChange(e)} />

      </div>
   )
}

export default App
