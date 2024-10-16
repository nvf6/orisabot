"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./Workflow.module.css";

const steps = [
  {
    title: "أضف البوت إلى سيرفرك",
    description: "قم بدعوة البوت إلى سيرفر الديسكورد الخاص بك",
  },
  {
    title: "قم بإعداد الإعدادات",
    description: "خصص إعدادات البوت حسب احتياجات سيرفرك",
  },
  {
    title: "استخدم الأوامر",
    description: "تعرف على الأوامر المتاحة واستخدمها في السيرفر",
  },
  {
    title: "استمتع بالمميزات",
    description: "استفد من جميع مميزات البوت في سيرفرك",
  },
];

export default function Workflow() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current) {
        const { left, top, width, height } =
          imageRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        imageRef.current.style.transform = `
          perspective(1000px)
          rotateY(${x * 10}deg)
          rotateX(${y * -10}deg)
          translateZ(20px)
        `;
      }
    };

    const handleMouseLeave = () => {
      if (imageRef.current) {
        imageRef.current.style.transform =
          "perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
      }
    };

    const imageElement = imageRef.current;
    if (imageElement) {
      imageElement.addEventListener("mousemove", handleMouseMove);
      imageElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (imageElement) {
        imageElement.removeEventListener("mousemove", handleMouseMove);
        imageElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className={`section ${styles.workflowSection}`}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <span className={styles.smallTitle}>خطوات البدء</span>
          <h2 className={styles.mainTitle}>
            ابدأ الآن بإضافة البوت بخطوات بسيطة واستمتع بكافة المزايا
          </h2>
          <div className={styles.description}>
            <Image
              src="/images/icons/alert.png"
              alt="alert"
              width={30}
              height={30}
            />
            <span>يرجى اتباع الخطوات أدناه لإضافة والتحكم في البوت</span>
          </div>
          <div className={styles.stepsContainer}>
            {steps.map((step, index) => (
              <div key={index} className={styles.step}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.imageContent} ref={imageRef}>
          <Image
            src="/images/icons/Launching-amico.svg"
            alt="صورة توضيحية"
            width={500}
            height={500}
            className={styles.illustration}
          />
        </div>
      </div>
    </section>
  );
}
