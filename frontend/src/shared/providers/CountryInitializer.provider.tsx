"use client";
import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { preferenceActions } from "@/features/preference/preference.slice";

export default function CountryInitializer({
    children,
}: {
    children: ReactNode;
}) {
    const dispatch = useDispatch();

    useEffect(() => {
        const currentCountry = Cookies.get("user-country");
        if (currentCountry) {
            dispatch(preferenceActions.setCountry(currentCountry));
        }
    }, [dispatch]);

    return <>{children}</>;
}
