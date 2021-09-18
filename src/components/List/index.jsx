import React, { useContext } from 'react'
import MyContext from '../../context/MyContext'
import ListSection from './ListStyle'

import trash from '../../assets/trash.png'
import checklist from '../../assets/checklist.svg'

export default function List() {
    const {items, setItems} = useContext(MyContext)

    function removeItemFromStorage(item) {
        let storage = localStorage.getItem('tasks')
        let array = storage.split(',')
        let index = array.indexOf(item)
        array.splice(index, 1)
        let tasks = array.toString()
        localStorage.setItem('tasks', tasks)
    }
    
    function removeItem(itemName) {
        setItems(items.filter(item => item != itemName))
        removeItemFromStorage(itemName)
    }

    return(
        <ListSection>
            <section>
                {items.length === 0 && (
                    <div className="void">
                        <h1><span>Task</span>Manager</h1>
                        <img className='checklistImg' src={checklist} alt="" />
                        <h2>Add an item to your list and start getting more control <span>over your life</span>.</h2>
                    </div>
                )}
                {items.map(item => (
                    <div key={item}>
                        <input type="checkbox" name={item}/>
                        <span>{item}</span>
                        <button onClick={() => removeItem(item)}><img src={trash} /></button>
                    </div>
                ))}
            </section>
        </ListSection>
    )
}