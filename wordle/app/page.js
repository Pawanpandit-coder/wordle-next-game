'use client'

import { useState, useEffect } from "react";

export default function Home() {


  const wordList = [
    "about", "alert", "argue", "beach",
    "above", "alike", "arise", "began",
    "abuse", "alive", "array", "begin",
    "actor", "allow", "aside", "begun",
    "acute", "alone", "asset", "being",
    "admit", "along", "audio", "below",
    "adopt", "alter", "audit", "bench",
    "adult", "among", "avoid", "billy",
    "after", "anger", "award", "birth",
    "again", "angle", "aware", "black",
    "agent", "angry", "badly", "blame",
    "agree", "apart", "baker", "blind",
    "ahead", "apple", "bases", "block",
    "alarm", "apply", "basic", "blood",
    "album", "arena", "basis", "board",
    "boost", "buyer", "china", "cover",
    "booth", "cable", "chose", "craft",
    "bound", "calif", "civil", "crash",
    "brain", "carry", "claim", "cream",
    "brand", "catch", "class", "crime",
    "bread", "cause", "clean", "cross",
    "break", "chain", "clear", "crowd",
    "breed", "chair", "click", "crown",
    "brief", "chart", "clock", "curve",
    "bring", "chase", "close", "cycle",
    "broad", "cheap", "coach", "daily",
    "broke", "check", "coast", "dance",
    "brown", "chest", "could", "dated",
    "build", "chief", "count", "dealt",
    "built", "child", "court", "death",
    "debut", "entry", "forth", "group",
    "delay", "equal", "forty", "grown",
    "depth", "error", "forum", "guard",
    "doing", "event", "found", "guess",
    "doubt", "every", "frame", "guest",
    "dozen", "exact", "frank", "guide",
    "draft", "exist", "fraud", "happy",
    "drama", "extra", "fresh", "harry",
    "drawn", "faith", "front", "heart",
    "dream", "false", "fruit", "heavy",
    "dress", "fault", "fully", "hence",
    "drill", "fibre", "funny", "night",
    "drink", "field", "giant", "horse",
    "drive", "fifth", "given", "hotel",
    "drove", "fifty", "glass", "house",
    "dying", "fight", "globe", "human",
    "eager", "final", "going", "ideal",
    "early", "first", "grace", "image",
    "earth", "fixed", "grade", "index",
    "eight", "flash", "grand", "inner",
    "elite", "fleet", "grant", "input",
    "empty", "floor", "grass", "issue",
    "enemy", "fluid", "great", "iron",
    "enjoy", "focus", "green", "juice",
    "enter", "force", "gross", "joint",
    "judge", "metal", "media", "newly",
    "known", "local", "might", "noise",
    "label", "logic", "minor", "north",
    "large", "loose", "minus", "noted",
    "laser", "lower", "mixed", "novel",
    "later", "lucky", "model", "nurse",
    "laugh", "lunch", "money", "occur",
    "layer", "lying", "month", "ocean",
    "learn", "magic", "moral", "offer",
    "lease", "major", "motor", "often",
    "least", "maker", "mount", "order",
    "leave", "march", "mouse", "other",
    "legal", "music", "mouth", "ought",
    "level", "match", "movie", "paint",
    "light", "mayor", "needs", "paper",
    "limit", "meant", "never", "party",
    "peace", "power", "radio", "round",
    "panel", "press", "raise", "route",
    "phase", "price", "range", "royal",
    "phone", "pride", "rapid", "rural",
    "photo", "prime", "ratio", "scale",
    "piece", "print", "reach", "scene",
    "pilot", "prior", "ready", "scope",
    "pitch", "prize", "refer", "score",
    "place", "proof", "right", "sense",
    "plain", "proud", "rival", "serve",
    "plane", "prove", "river", "seven",
    "plant", "queen", "quick", "shall",
    "plate", "sixth", "stand", "shape",
    "point", "quiet", "roman", "share",
    "pound", "quite", "rough", "sharp",
    "sheet", "spare", "style", "times",
    "shelf", "speak", "sugar", "tired",
    "shell", "speed", "suite", "title",
    "shift", "spend", "super", "today",
    "shirt", "spent", "sweet", "topic",
    "shock", "split", "table", "total",
    "shoot", "spoke", "taken", "touch",
    "short", "sport", "taste", "tough",
    "shown", "staff", "taxes", "tower",
    "sight", "stage", "teach", "track",
    "since", "stake", "teeth", "trade",
    "sixty", "start", "texas", "treat",
    "sized", "state", "thank", "trend",
    "skill", "steam", "theft", "trial",
    "sleep", "steel", "their", "tried",
    "slide", "stick", "theme", "tries",
    "small", "still", "there", "truck",
    "smart", "stock", "these", "truly",
    "smile", "stone", "thick", "trust",
    "smith", "stood", "thing", "truth",
    "smoke", "store", "think", "twice",
    "solid", "storm", "third", "under",
    "solve", "story", "those", "undue",
    "sorry", "strip", "three", "union",
    "sound", "study", "throw", "unity",
    "south", "stuff", "tight", "until",
    "space", "storm", "title", "upper",
    "urban", "whole", "waste", "wound",
    "usage", "whose", "watch", "write",
    "usual", "train", "wheel", "wrong",
    "valid", "world", "where", "yield",
    "value", "worry", "which", "young",
    "video", "worse", "while", "youth",
    "virus", "worst", "white", "worth",
    "visit", "would", "vital", "voice"
  ]
  const [word, setWord] = useState('')

  function randomWord() {
    const randomNumber = Math.floor(Math.random() * 200) + 1;
    return wordList[randomNumber].toUpperCase();
  }

  useEffect(() => {
    let tempWord = randomWord()
    console.log(tempWord)
    setWord(tempWord)
  }, [])


  const [letters, setLetters] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ])

  // 👉 NEW: colors state
  const [colors, setColors] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ])

  const [pointer, setPointer] = useState(0)
  const [row, setRow] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.length === 1 && /^[a-zA-Z]+$/.test(e.key)) {
        if (pointer >= 5 || row > 5) {
          return;
        }
        const updated = [...letters];
        updated[row][pointer] = e.key.toUpperCase();
        setLetters(updated)
        setPointer((prev) => prev + 1)
      } else if (e.key === 'Backspace') {
        if (pointer <= 0) {
          return
        }
        const updated = [...letters];
        updated[row][pointer - 1] = '';
        setLetters(updated)
        setPointer(prev => prev - 1)
      } else if (e.key === 'Enter') {
        if (pointer >= 5 && row <= 5) {

          const newColors = [...colors];

          for (let i = 0; i < 5; i++) {
            const letter = letters[row][i];

            if (word[i] === letter) {
              newColors[row][i] = "green"; // ✅ correct
            } else if (word.includes(letter)) {
              newColors[row][i] = "yellow"; // 🟡 wrong spot
            } else {
              newColors[row][i] = "gray"; // ❌ not present
            }
          }

          setColors(newColors);

          setRow(prev => prev + 1)
          setPointer(0)

        } else {
          return;
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [pointer])

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black container max-h-screen" >
      <div>
        <h2 className="font-semibold text-3xl mx-12 my-2 tracking-widest">WORDLE UNLIMITED</h2>
        <hr className="border border-gray-300 " />
      </div>

      <div className="boxes flex justify-center items-center my-4 gap-1 flex-col">
        {letters.map((rowData, indx) => {
          return <div key={indx} className="flex justify-center items-center text-black gap-1">
            {rowData.map((l, i) => {
              return (
                <div
                  key={i}
                  className={`border-2 w-15 h-15 flex justify-center items-center text-3xl font-bold
                  ${colors[indx][i] === "green" ? "bg-[#6aaa64] text-white border-none" :
                      colors[indx][i] === "yellow" ? "bg-[#c5b661] text-white border-none" :
                        colors[indx][i] === "gray" ? "bg-[#787c7e] text-white border-none" :
                          l ? 'border-gray-500' : 'border-gray-300'
                    }`}
                >
                  {l}
                </div>
              )
            })}
          </div>
        })}
      </div>

      <div className="keyboard h-[50vh] flex justify-center gap-1 items-center flex-col">
        <div className="first-row-keyboard flex gap-1">
          {"QWERTYUIOP".split("").map(k => <button key={k} className="border h-13 w-11 rounded">{k}</button>)}
        </div>
        <div className="first-row-keyboard flex gap-1">
          {"ASDFGHJKL".split("").map(k => <button key={k} className="border h-13 w-11 rounded">{k}</button>)}
        </div>
        <div className="first-row-keyboard flex gap-1">
          <button className="border h-13 w-18 rounded">ENTER</button>
          {"ZXCVBNM".split("").map(k => <button key={k} className="border h-13 w-11 rounded">{k}</button>)}
          <button className="border h-13 w-13 rounded">⌫</button>
        </div>
      </div>
    </div>
  );
}







































// mere dwara banaya gaya code hain yeh





// 'use client'

// import { useState, useEffect } from "react";

// export default function Home() {
//   const [word, setWord] = useState('TRASH')

//   const [letters, setLetters] = useState([
//     ["", "", "", "", ""],
//     ["", "", "", "", ""],
//     ["", "", "", "", ""],
//     ["", "", "", "", ""],
//     ["", "", "", "", ""],
//     ["", "", "", "", ""],
//   ])
//   const [pointer, setPointer] = useState(0)
//   const [row, setRow] = useState(0)

//   const loopWord = () => {
//     for (const e of word) {
//       alert(e)
//     }
//   }
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key.length === 1 && /^[a-zA-Z]+$/.test(e.key)) {
//         if (pointer >= 5 || row > 5) {
//           return;
//         }
//         const updated = [...letters];
//         updated[row][pointer] = e.key.toUpperCase();
//         setLetters(updated)
//         setPointer((prev) => prev + 1)
//       } else if (e.key === 'Backspace') {
//         if (pointer <= 0) {
//           return
//         }
//         const updated = [...letters];
//         updated[row][pointer - 1] = '';
//         setLetters(updated)
//         setPointer(prev => prev - 1)
//       } else if (e.key === 'Enter') {
//         if (pointer >= 5 && row <= 5) {
//           for (const i of letters[row]) {
//             if (word.indexOf(i) === letters[row].indexOf(i)) {
//               letters[row].indexOf(i)
//             } else if (word.includes(i)) {
//               console.log('Exists but wrong spot')
//             } else {
//               console.log('wrong spot')
//             }
//           }
//           setRow(prev => prev + 1)
//           setPointer(0)

//         } else {
//           return;
//         }
//       }
//     };

//     document.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown)
//     }
//   }, [pointer])





//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black container max-h-screen" >
//       <div>
//         <h2 className="font-semibold text-3xl mx-12 my-2 tracking-widest">WORDLE UNLIMITED</h2>
//         <hr className="border border-gray-300 " />
//       </div>
//       <div className="boxes flex justify-center items-center my-4   gap-1 flex-col">
//         {letters.map((row, indx) => {
//           return <div key={indx} className=" flex justify-center items-center text-black gap-1">
//             {row.map((l, i) => {
//               return <div key={i} className={`border-2 w-15 h-15 flex justify-center items-center text-black text-3xl font-bold ${l ? 'border-gray-500' : 'border-gray-300'
//                 }`}>{l}</div>
//             })}
//           </div>
//         })}
//       </div>
//       <div className="keyboard h-[50vh] flex justify-center gap-1 items-center flex-col">
//         <div className="first-row-keyboard flex gap-1">
//           <button className="border h-13 w-11 rounded">Q</button>
//           <button className="border h-13 w-11 rounded">W</button>
//           <button className="border h-13 w-11 rounded">E</button>
//           <button className="border h-13 w-11 rounded">R</button>
//           <button className="border h-13 w-11 rounded">T</button>
//           <button className="border h-13 w-11 rounded">Y</button>
//           <button className="border h-13 w-11 rounded">U</button>
//           <button className="border h-13 w-11 rounded">I</button>
//           <button className="border h-13 w-11 rounded">O</button>
//           <button className="border h-13 w-11 rounded">P</button>
//         </div>
//         <div className="first-row-keyboard flex gap-1">
//           <button className="border h-13 w-11 rounded" >A</button>
//           <button className="border h-13 w-11 rounded" >S</button>
//           <button className="border h-13 w-11 rounded" >D</button>
//           <button className="border h-13 w-11 rounded" >F</button>
//           <button className="border h-13 w-11 rounded" >G</button>
//           <button className="border h-13 w-11 rounded" >H</button>
//           <button className="border h-13 w-11 rounded" >J</button>
//           <button className="border h-13 w-11 rounded" >K</button>
//           <button className="border h-13 w-11 rounded" >L</button>
//         </div>
//         <div className="first-row-keyboard flex gap-1">
//           <button className="border h-13 w-18 rounded">ENTER</button>
//           <button className="border h-13 w-11 rounded">Z</button>
//           <button className="border h-13 w-11 rounded">X</button>
//           <button className="border h-13 w-11 rounded">C</button>
//           <button className="border h-13 w-11 rounded">V</button>
//           <button className="border h-13 w-11 rounded">B</button>
//           <button className="border h-13 w-11 rounded">N</button>
//           <button className="border h-13 w-11 rounded">M</button>
//           <button className="border h-13 w-13 rounded">⌫</button>
//         </div>
//       </div>
//     </div>
//   );
// }