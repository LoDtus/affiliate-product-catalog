"use client";
import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import { preferenceActions } from "@/features/preference/preference.slice";

export default function CountryInitializer({
    children,
}: {
    children: ReactNode;
}) {
    const dispatch = useDispatch();
    const params = useParams();
    const currentCountry = params?.country as string;

    useEffect(() => {
        if (currentCountry) {
            dispatch(preferenceActions.setCountry(currentCountry));
        }
    }, [currentCountry, dispatch]);

    return <>{children}</>;
}
