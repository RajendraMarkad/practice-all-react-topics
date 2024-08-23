import React, {useContext, createContext, useState} from 'react';

// 1. Basic Example: Accessing a Simple Context Value
const ThemeContext = createContext('light');
const ThemeChanger = () =>{
    const theme = useContext(ThemeContext)
    return <button style={{ backgroundColor: theme === 'dark' ? 'black' : 'white', color: theme==='dark' ? 'white':'black' }}>Theme Button: {theme}</button>;
}

const ParentComponent = () =>{   // basically other components kept unnder this to use global value like theme
    return (
        <ThemeContext.Provider value='dark'>
            <ThemeChanger />       { /*we can have more than 1 components like this within provider */}
        </ThemeContext.Provider>
    )
}



//  2. passing multiple value once as a object
 const UserContext = createContext({name:'default', age: 1})
 const ShowUser = ()=> {
    const user = useContext(UserContext);
    return <>
        <p>Object: My name is {user.name} and age is {user.age}</p>
    </>
 }

 const ParentUser = ()=> {
    return <UserContext.Provider value={{name:'raaj', age:28}}>
        <ShowUser />
    </UserContext.Provider>
 }


// 3. nested contexts
const ShowNested = ()=> {
    const theme = useContext(ThemeContext)
    const user = useContext(UserContext)
    return <p>Nested: This is {theme} theme for {user.name} having age {user.age}</p>
}
const NestedProvider = () => (
    <ThemeContext.Provider value="light">
      <UserContext.Provider value={{name:'raaj', age:28}}>
        <ShowNested />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );


// 4. toggle theme between light and dark by button click
const ToggleContext = createContext()

const ShowToggle =()=>{

    const {bgColor, toggleButton} = useContext(ToggleContext);

    return <div style={{backgroundColor: bgColor==='dark' ? 'black':'white', color: bgColor==='dark' ? 'white':'black'}} >
        <button onClick={toggleButton}>Change Color</button>
        <p>useContext allows you to access the value provided by a React Context directly in a component without needing to pass props. Context is designed to share data like themes, user information, or other data that should be accessible globally throughout a component tree.</p>
    </div>
}

const ToggleParent = () =>{

    const [bgColor, setBgColor] = useState('dark');

    const toggleButton = ()=> {
        return setBgColor(prevColor => prevColor=== 'dark' ? 'white':'dark')
    }

    return <ToggleContext.Provider value={{bgColor, toggleButton}}>
        <ShowToggle />  
    </ToggleContext.Provider>

}

export {ParentComponent, ParentUser, NestedProvider, ToggleParent};

