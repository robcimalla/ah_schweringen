import React from "react";

type SectionHeadingProps = {
	children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
	return <h2 className="text-3xl text-gray-950 font-medium capitalize mb-8 text-center">{children}</h2>;
}
