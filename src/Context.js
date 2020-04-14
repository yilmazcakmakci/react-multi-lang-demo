import React, { Component, createContext } from 'react'
import languages from './languages'

export const AppContext = createContext()

export class Context extends Component {

    state = {
        currentLang : 'tr' //varsayılan Türkçe
    }

    changeLang = (lang) => {
        this.setState({currentLang : lang})
    }

    render() {
        return (
            <AppContext.Provider value={{changeLang : this.changeLang, texts : languages[this.state.currentLang]}}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default Context