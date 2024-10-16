"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Services.module.css";

const services = [
  {
    id: 1,
    title: "إدارة سيرفر ديسكورد",
    mainTitle: "تحكم كامل",
    description:
      "تحكم في سيرفرك على ديسكورد باستخدام أوامر سلاش كوماند السهلة عبر البوت.",
    image: "/images/icons/server-management.svg",
  },
  {
    id: 2,
    title: "الاشتراك في باقة البرميوم",
    mainTitle: "ميزات حصرية",
    description: "افتح ميزات حصرية مع باقة البرميوم لتخصيص متقدم لسيرفرك.",
    image: "/images/icons/custom.svg",
  },
  {
    id: 3,
    title: "الاشتراك في باقة الكلاسيك",
    mainTitle: "الأساسيات المثالية",
    description:
      "احصل على الميزات الأساسية مع باقة الكلاسيك، المثالية لمعظم السيرفرات.",
    image: "/images/icons/server-management.svg",
  },
  {
    id: 4,
    title: "تخصيص شعار البوت",
    mainTitle: "هوية فريدة",
    description:
      "احصل على بوت مخصص يحمل شعار وخدمات خاصة بسيرفرك عند الاشتراك في باقة البرميوم.",
    image: "/images/icons/custom.svg",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll(
      `.${styles.serviceItem}`
    );
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);
  return (
    <section
      className={`section ${styles.servicesSection}`}
      ref={sectionRef}
      id="services"
    >
      <div className={styles.servicesContainer}>
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`${styles.serviceItem} ${
              index % 2 === 0 ? styles.rightImage : styles.leftImage
            }`}
          >
            <div className={styles.serviceImage}>
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={200}
              />
            </div>
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceSubtitle}>{service.title}</h3>
              <h2 className={styles.serviceTitle}>{service.mainTitle}</h2>
              <p className={styles.serviceDescription}>{service.description}</p>
              <Link
                href={`/services/${service.id}`}
                className={styles.readMore}
              >
                اكتشف المزيد
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
