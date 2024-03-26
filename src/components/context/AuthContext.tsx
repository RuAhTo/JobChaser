import { createContext, useEffect, useState } from 'react';
import { auth } from "../../fireBase";
import { onAuthStateChanged, User as FirebaseAuthUser} from "firebase/auth";

// Skapa en typ för användarobjektet
export interface User {
    id: string
    name: string | null
    email: string | null
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
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user: FirebaseAuthUser | null) => {
            if (user) {
                setUser({
                    id: user.uid,
                    name: user.displayName,
                    email: user.email
                });
            } else {
                setUser(null);
            }
            console.log('user:', user)
        });
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
export { AuthContext };
