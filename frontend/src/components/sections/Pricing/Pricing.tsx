"use client";

import { useState, useEffect } from "react";
import styles from "./Pricing.module.css";

const pricingPlans = [
  {
    name: "الخطة الأفتراضية",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "ميزة أساسية 1",
      "ميزة أساسية 2",
      "ميزة أساسية 3",
      "ميزة متقدمة 1",
      "ميزة متقدمة 2",
    ],
    included: [true, true, true, false, false],
  },
  {
    name: "خطة البرميوم",
    monthlyPrice: 9.99,
    yearlyPrice: 99.99,
    features: [
      "جميع الميزات الأساسية",
      "ميزة متقدمة 1",
      "ميزة متقدمة 2",
      "ميزة حصرية 1",
      "دعم فني على مدار الساعة",
    ],
    included: [true, true, true, true, true],
    popular: true,
  },
  {
    name: "الخطة الكلاسيك",
    monthlyPrice: 4.99,
    yearlyPrice: 49.99,
    features: [
      "جميع الميزات الأساسية",
      "ميزة متقدمة 1",
      "ميزة متقدمة 2",
      "ميزة حصرية 1",
      "دعم فني محدود",
    ],
    included: [true, true, false, false, true],
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [changingPrice, setChangingPrice] = useState(false);

  useEffect(() => {
    setChangingPrice(true);
    const timer = setTimeout(() => setChangingPrice(false), 500);
    return () => clearTimeout(timer);
  }, [isYearly]);

  return (
    <section className={styles.pricingSection} id="pricing">
      <h2 className={styles.sectionTitle}>
        الباقات & <span className={styles.outlineText}>الأسعار</span>
      </h2>

      <div className={styles.toggleWrapper}>
        <span
          className={!isYearly ? styles.activeToggle : styles.inactiveToggle}
        >
          شهريًا
        </span>
        <label className={styles.toggle}>
          <input
            type="checkbox"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
          <span className={styles.slider}></span>
        </label>
        <span
          className={isYearly ? styles.activeToggle : styles.inactiveToggle}
        >
          سنويًا
        </span>
      </div>

      <div className={styles.plansContainer}>
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`${styles.planCard} ${
              plan.popular ? styles.popularPlan : ""
            }`}
          >
            {plan.popular && (
              <div className={styles.popularBadge}>الأكثر شيوعًا</div>
            )}
            <h3 className={styles.planName}>{plan.name}</h3>
            <div className={styles.planPrice}>
              {plan.monthlyPrice === 0 ? (
                <>
                  <span className={styles.currencySymbol}>$</span>
                  <span className={styles.priceAmount}>0</span>
                  <span className={styles.pricePeriod}>/ خليها علينا</span>
                </>
              ) : (
                <>
                  <span className={styles.currencySymbol}>$</span>
                  <span
                    className={`${styles.priceAmount} ${
                      changingPrice ? styles.priceChanging : ""
                    }`}
                  >
                    {isYearly
                      ? plan.yearlyPrice.toFixed(2)
                      : plan.monthlyPrice.toFixed(2)}
                  </span>
                  <span className={styles.pricePeriod}>
                    / {isYearly ? "سنويًا" : "شهريًا"}
                  </span>
                </>
              )}
            </div>
            <ul className={styles.featuresList}>
              {plan.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className={
                    plan.included[featureIndex]
                      ? styles.includedFeature
                      : styles.excludedFeature
                  }
                >
                  <span className={styles.checkmark}></span>
                  {feature}
                </li>
              ))}
            </ul>
            <a href="#" className={styles.readMore}>
              أقرا المزيد <span className={styles.arrow}>←</span>
            </a>
            <button
              className={`${styles.subscribeButton} ${
                plan.popular ? styles.premiumButton : styles.regularButton
              }`}
            >
              اشترك الآن
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
