import React, { useContext } from 'react'
import { AppContext } from './Context'

export default Text = () => {

    const { texts, changeLang } = useContext(AppContext)

    return (
        <div style={{margin:'auto', maxWidth:'500px', padding:'10% 0'}}>
            <h1> {texts.title} </h1>
            <p> {texts.text} </p>
            <select onChange={(e) => changeLang(e.target.value)} >
                <option value="tr"> {texts.tr} </option>
                <option value="en"> {texts.en} </option>
                <option value="de"> {texts.de} </option>
            </select>
        </div>
    )
}