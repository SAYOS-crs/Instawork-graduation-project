"use client";
import React from "react";
import {
	motion,
	useScroll,
	useTransform,
	useSpring,
	MotionValue,
} from "motion/react";
import { useTranslations } from "next-intl";
import RogBorder from "../RogBorder/RogBorder";

export const HeroParallax = ({
	products,
}: {
	products: {
		UserImg: string;
		UserName: string;
		UserSkills: string;
		UserAddress: string;
		UserAge: number;
		UserRatting: number;
		UserWorkImages: [string, string, string, string];
	}[];
}) => {
	const firstRow = products.slice(0, 5);
	const secondRow = products.slice(5, 10);
	const thirdRow = products.slice(10, 15);
	const ref = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

	const translateX = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, 1000]),
		springConfig
	);
	const translateXReverse = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, -1000]),
		springConfig
	);
	const rotateX = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [15, 0]),
		springConfig
	);
	const opacity = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
		springConfig
	);
	const rotateZ = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [20, 0]),
		springConfig
	);
	const translateY = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [-500, 400]),
		springConfig
	);
	return (
		<div
			ref={ref}
			className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
		>
			<Header />

			<motion.div
				style={{ rotateX, rotateZ, translateY, opacity }}
				className=""
			>
				{" "}
				<motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
					{" "}
					{firstRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateX}
							key={product.UserName}
						/>
					))}
				</motion.div>
				<motion.div className="flex flex-row  mb-20 space-x-20 ">
					{secondRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateXReverse}
							key={product.UserName}
						/>
					))}
				</motion.div>
				<motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
					{thirdRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateX}
							key={product.UserName}
						/>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
};

export const Header = () => {
	const t = useTranslations("hero-parallax");

	return (
		<div className="max-w-7xl relative mx-auto py-20   px-4 w-full  left-0 top-0">
			<h1 className="text-5xl md:text-7xl font-bold dark:text-white">
				{t("instawork_header")}
			</h1>
			<p className="  w-fit  mx-auto text-center text-4xl   mt-8 dark:text-neutral-200">
				{t("maintitle_hero_parallax")}
			</p>
		</div>
	);
};

export const ProductCard = ({
	product,
	translate,
}: {
	product: {
		UserImg: string;
		UserName: string;
		UserSkills: string;
		UserAddress: string;
		UserAge: number;
		UserRatting: number;
		UserWorkImages: [string, string, string, string];
	};
	translate: MotionValue<number>;
}) => {
	return (
		<motion.div
			style={{ x: translate }}
			whileHover={{ y: -20 }}
			key={product.UserName}
			className="group/product h-96 w-[30rem] relative shrink-0"
		>
			<RogBorder>
				<div className="   h-fit m-1 w-fit relative text-primry-background overflow-hidden  bg-main-background">
					<div className="p-5 -500">
						<div className="flex gap-4 align-middle">
							<div className="w-2/4">
								<img className="w-full" src={product.UserImg} alt="user" />
							</div>
							<div className="text-left pt-4 ps-5">
								<h3> {product.UserName} </h3>
								<p> {product.UserSkills} </p>
								<p> {product.UserAddress}</p>
								<p> {product.UserAge}</p>
								<p> {product.UserRatting}</p>
							</div>
						</div>
					</div>
					<div className=" grid grid-cols-4   h-30">
						{product.UserWorkImages.map((imgWork, index) => (
							<div key={index} className=" m-2">
								{" "}
								<img src={imgWork} alt={product.UserSkills} />{" "}
							</div>
						))}
					</div>
				</div>
			</RogBorder>
		</motion.div>
	);
};
