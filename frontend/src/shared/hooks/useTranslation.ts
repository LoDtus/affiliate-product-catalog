import { TranslationContext } from "@/shared/providers/Translation.provider";
import { useContext } from "react";

export function useTranslation() {
    const context = useContext(TranslationContext);
    if (!context) {
        throw new Error("useTranslation must be used within a TranslationProvider");
    }
    return context;
}
