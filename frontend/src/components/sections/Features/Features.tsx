import styles from "./Features.module.css";
import Image from "next/image";

const features = [
  {
    title: "إدارة الأدوار",
    description: "إدارة سهلة لأدوار الأعضاء وصلاحياتهم",
    image: "/images/icons/roles.png",
  },
  {
    title: "نظام الترحيب",
    description: "رسائل ترحيب مخصصة لأعضاء السيرفر الجدد",
    image: "/images/icons/welcome.png",
  },
  {
    title: "لوحة التحكم",
    description: "تحكم كامل في إعدادات السيرفر مع واجهة سهلة الاستخدام",
    image: "/images/icons/dashboard.png",
  },
];

export default function Features() {
  return (
    <section className={`section ${styles.featuresSection}`} id="features">
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>مزايا فريدة تُميّز تجربتك</h2>
        <div className={styles.titleUnderline}></div>
      </div>
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featuresCard}>
            <div className={styles.featureImageContainer}>
              <div className={styles.featureImageBg}></div>
              <Image
                src={feature.image}
                alt={feature.title}
                width={60}
                height={60}
                className={styles.featureImage}
              />
            </div>
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
