import { createContext, useContext, useState} from 'react';

const AppContext = createContext();


export const AppProvider = ({ children }) => {
  const [user,setUser]=useState([])
  const newUsers = (temp) =>
  {
    setUser((user)=>[...user,temp])
  }


  return (
    <AppContext.Provider
      value={{ user,newUsers}}
    >
      {children}
    </AppContext.Provider>
    //  React.createElement('AppContext.Provider', value={user,newUsers}, {children});
  );
};

export const useGlobalContext = () => useContext(AppContext);

export default AppProvider;