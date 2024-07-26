import { useKeenSlider } from "keen-slider/react";
import React from "react";
import { Room, rooms } from "../../../lib/data";
import Image from "next/image";

type ImageSliderProps = {
	images: Room["images"];
};

export default function ImageSlider({ images }: ImageSliderProps) {
	const [sliderRef] = useKeenSlider({
		loop: true,
		mode: "snap",
		slides: { perView: 1 },
	});
	return (
		<div className="keen-slider" ref={sliderRef}>
			{images.map((image, index) => (
				<div className="keen-slider__slide" key={index}>
					<Image className="rounded-lg w-full" layout="responsive" width={1000} height={600} quality={95} src={image.src} alt={`Slide ${index}`} />
				</div>
			))}
		</div>
	);
}
