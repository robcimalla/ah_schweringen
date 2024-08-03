"use client";

import { SectionName } from "@/lib/types";
import React, { createContext, useContext, useState } from "react";

type ActiveSectionContextProviderProps = {
	children: React.ReactNode;
};

type ActiveSectionContextType = {
	activeSection: SectionName;
	setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {
	const [activeSection, setActiveSection] = useState<SectionName>("Startseite");

	return <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>{children}</ActiveSectionContext.Provider>;
}

export function useActiveSectionContext() {
	const context = useContext(ActiveSectionContext);

	if (context === null) {
		throw new Error("useActiveSectionContext must be used within ActiveSectionContextProvider");
	}

	return context;
}
