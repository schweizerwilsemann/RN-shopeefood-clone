import { createContext, useContext, useState } from "react";

interface AppContext {
    theme: string;
    setTheme: (v: string) => void;
    appState: IUserLogin | null;
    setAppState: (v: any) => void;
}
const AppContext = createContext<AppContext | null>(null);

interface IProps {
    children: React.ReactNode;
}

export const useCurrentApp = () => {
    const currentTheme = useContext(AppContext);

    if (!currentTheme) {
        throw new Error(
            "useCurrentUser has to be used within <AppContext.Provider>"
        );
    }

    return currentTheme;
};
const AppProvider = (props: IProps) => {
    const [theme, setTheme] = useState<string>("");
    const [appState, setAppState] = useState<IUserLogin | null>(null);
    return (
        <AppContext.Provider value={{ theme, setTheme, appState, setAppState }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider;