"use client";
import React, { createContext } from "react";

interface TranslationProviderProps {
    children: React.ReactNode;
    dict: any;
}

export const TranslationContext = createContext<any>(null);

export function TranslationProvider({
    children,
    dict,
}: TranslationProviderProps) {
    return (
        <TranslationContext.Provider value={dict}>
            {children}
        </TranslationContext.Provider>
    );
}
