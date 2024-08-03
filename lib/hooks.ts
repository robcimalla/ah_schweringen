"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function useSectionInView(sectionName: SectionName, threshold = 0.75) {
	const { ref, inView } = useInView({
		threshold,
	});
	const { setActiveSection } = useActiveSectionContext();

	useEffect(() => {
		if (inView) {
			setActiveSection(sectionName);
		}
	}, [inView, sectionName, setActiveSection]);

	return { ref };
}
