import { createContext, useCallback, useState, type ReactNode } from "react";

interface SearchContextType {
    query: string;
    setQuery: (q: string) => void;
}

export const SearchContext = createContext<SearchContextType>({
    query: "",
    setQuery: () => { },
});

export const SearchProvider = ({ children }: { children: ReactNode }) => {
    const [query, setQuery] = useState<string>("");

    return (
        <SearchContext.Provider value={{ query, setQuery}}>
            {children}
        </SearchContext.Provider>
    );
};