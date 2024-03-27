import { createContext, useContext, useState, useEffect } from 'react';

// Skapa en typ för användarobjektet
interface User {
    id: number;
    name: string;
    email: string;
  }
  
  // Skapa en kontext med createContext-funktionen
  interface AuthContextType {
    user: User | null; // Användartyp eller null om ingen användare är inloggad
    setUser: React.Dispatch<React.SetStateAction<User | null>>; // Funktion för att uppdatera användaren
  }

const AuthContext = createContext<AuthContextType>({
    user: null,
    setUser: () => null
});

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User|null>(null);


    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider