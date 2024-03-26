import { createContext, useEffect, useState } from 'react';

// Skapa en typ för användarobjektet
export interface User {
    id: number;
    name: string;
    email: string;
  }
  
  // Skapa en kontext med createContext-funktionen
  export interface AuthContextType {
    user: User | null; // Användartyp eller null om ingen användare är inloggad
    setUser: React.Dispatch<React.SetStateAction<User | null>>; // Funktion för att uppdatera användaren
  }

const AuthContext = createContext<AuthContextType>({
    user: null,
    setUser: () => null
});

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User|null>(null);

    const signIn = (mockUser: User) => {
        setUser(mockUser)
        }

    useEffect (() => {
        const mockUser = {id:1,name: 'Henny Olsson', email: 'henny.olsson@hotmail.com' }
        signIn(mockUser)
    },[])

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
export { AuthContext };
