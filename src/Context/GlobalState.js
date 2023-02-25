import React, {createContext,useState} from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ( {children} ) => {

    const [ postids,setPostids ] = useState("");
    const [pageName,SetPageName] = useState("home");
    
    if(postids){
        localStorage.setItem("ContextData",postids);
    } else {
        var Localpostid = localStorage.getItem("ContextData");
    }

    return (
        <GlobalContext.Provider value={ 
            {Localpostid, postids, 
             setPostids,
            pageName,SetPageName}}>
             {children}
        </GlobalContext.Provider>
    );
    
};