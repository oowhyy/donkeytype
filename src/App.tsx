import { useEffect, useState } from 'react'
import './App.css'
import * as commonWordsList from './assets/commonWordsList.json';
import React from 'react'
import Word from './components/Word'
import { LetterType, ILetter, WordProps, IWord } from './types/types'
import { getWords } from './logic/utils';




function App() {
   const [count, setCount] = useState(0)
   const [prevWords, setPrevWords] = useState<ILetter[][]>([])
   const [curWord, setCurWord] = useState<IWord>()
   const [zipped, setZipped] = useState<WordProps[]>([])
   const [input, setInput] = useState('')
   const [wordList, setWordList] = useState<IWord[]>([])
   // const testLetters = [{ value: 't', style: LetterStyleType.currentCorrect },
   // { value: 's', style: LetterStyleType.currentWrong }]
   let testWord = 'commit';

   useEffect(() => {
      let wrds = getWords(commonWordsList.commonWords, 50)
      setWordList(wrds);
      let zp = wrds.map((e, i) => ({ id: e.id, target: e.value, typed: null }))
      setZipped(zp)
      setCurWord(wrds[0])
   }, [])
   function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      // user pressed space - handle word change 

      let typed = event.target.value.split(' ')
      typed = Array.from({ ...typed, length: zipped.length }, (v) => v ?? null)
      let zp = wordList.map((e, i) => ({ id: e.id, target: e.value, typed: typed[i] }))
      setZipped(zp);
      // makes input controlled
      setInput(event.target.value)
   }

   return (
      <div>
         <div className="card">
            {
               zipped.map((el, ind) => <Word key={el.id} id={el.id} target={el.target} typed={el.typed} ></Word>)
            }
         </div>
         <input type='text' value={input} onChange={(e) => handleChange(e)} />

      </div>
   )
}

export default App
