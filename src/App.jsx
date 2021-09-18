import React, { useState } from 'react'
import Header from './components/Header'
import List from './components/List'
import MyContext from './context/MyContext'

function App() {
  const tasks = localStorage.getItem('tasks')
  const array = tasks.split(',')
  const [items, setItems] = useState(array)
  for(let task of array){
    if(task == '') {
      array.splice(array.indexOf(task), 1)
    }
  }

  return (
    <MyContext.Provider value={{items, setItems}}>
      <Header />
      <List />
    </MyContext.Provider>
  )
}

export default App;