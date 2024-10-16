import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.bgBlur}></div>
      <h1 className={styles.mainTitle}>
        <span className={styles.outlineText}>أوريسا</span> بوت
      </h1>
      <p className={styles.description}>
        أوريسا بوت هو الحل الأمثل لإدارة سيرفر الديسكورد الخاص بك. يوفر لك
        تحكمًا كاملًا وميزات متقدمة لتحسين تجربة مجتمعك
      </p>
      <div className={styles.buttonContainer}>
        <button className={styles.dashboardButton}>لوحة التحكم</button>
        <button className={styles.addButton}>أضف البوت إلى سيرفرك</button>
      </div>
    </section>
  );
}
