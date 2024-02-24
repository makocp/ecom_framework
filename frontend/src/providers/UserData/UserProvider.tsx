import {createContext, ReactNode, useCallback, useContext, useEffect, useState} from "react";
import {ICartProduct, ILoginProps, IUser, IUserData} from "../../types/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IUserContextType {
    userData?: IUserData;
    login: (loginProps: ILoginProps) => Promise<void>;
    logout: () => void;
    isLoadingUserData: boolean;
}

const UserContext = createContext<IUserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [userData, setUserData] = useState<IUserData | undefined>(undefined);
    const [isLoadingUserData, setIsLoadingUserData] = useState<boolean>(false);

    useEffect(() => {
        loadUserData();
    }, []);

    // todo save secure.
    const loadUserData = async () => {
        setIsLoadingUserData(true); // Assuming this is your loading state
        try {
            const storedUserData = await AsyncStorage.getItem('userData');
            if (storedUserData) {
                setUserData(JSON.parse(storedUserData));
            }
        } catch (error) {
            console.error("Failed to load user data from storage", error);
        } finally {
            setIsLoadingUserData(false);
        }
    };

    const storeUserData = async (userData: IUserData) => {
        try {
            await AsyncStorage.setItem('userData', JSON.stringify(userData));
        } catch (e) {
            console.error("Failed to save user data to storage", e);
        }
    };

    const clearUserData = async () => {
        try {
            await AsyncStorage.removeItem('userData');
        } catch (e) {
            console.error("Failed to clear user data from storage", e);
        }
    };

    const login = useCallback(async ({email, password}: ILoginProps) => {
        setIsLoadingUserData(true);
        try {
            const response = await fetch('http://localhost:4242/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Login failed');
            }

            const { user, token } = data;
            const userData: IUserData = { currentUser: user, token };

            setUserData(userData);
            await storeUserData(userData);
        } catch (error) {
            console.error("Error during login process", error);
            // You may want to update your state to reflect that an error occurred
            // This is useful for showing error messages in your UI
        } finally {
            setIsLoadingUserData(false);
        }
    }, []);


    const logout = useCallback(async () => {
        setUserData(undefined);
        await clearUserData();
    }, []);

    return (
        <UserContext.Provider value={{userData, login, logout, isLoadingUserData}}>
            {children}
        </UserContext.Provider>
    )
};

export const useUserData = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUserData must be used within a UserProvider');
    }
    return context;
}