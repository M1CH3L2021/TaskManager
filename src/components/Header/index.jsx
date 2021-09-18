import React, { useContext, useState } from 'react'
import MyContext from '../../context/MyContext'
import HeaderSection from './HeaderStyle';

export default function Header() {
    const [inputValue, setInputValue] = useState('')
    const {items, setItems} = useContext(MyContext)
    const [alert, setAlert] = useState()

    function showAlert(text) {
        setAlert(
        <div className="alert">
            <p>{text}</p>
            <button onClick={() => setAlert(null)}>x</button>
        </div>
    )}

    function setItemToList() {
        if (inputValue == '') {
            showAlert('Hey! you must tell me what to add to your list!')
        } else {
            if(items.includes(inputValue)) {
                showAlert("Oops! The item you're trying to insert is already in the list!")
                setInputValue('')
            } else {
                localStorage.setItem('tasks', [...items, inputValue])
                setItems([...items, inputValue])
                setInputValue('')
            }
        }
    }

    return(
        <HeaderSection>
            <section>
                <input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
                <input type="submit" value="Add to list" onClick={setItemToList}/>
                {alert}
            </section>
        </HeaderSection>
    )
}