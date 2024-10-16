import styles from "./GetStarted.module.css";

export default function GetStarted() {
  return (
    <section className={styles.getStarted}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>انطلق نحو النجاح معنا</h1>
          <p className={styles.subtitle}>
            نقدم لك أفضل الحلول التقنية لتطوير أعمالك وتحقيق أهدافك بكل كفاءة
          </p>
          <button className={styles.ctaButton}>ابدأ الآن</button>
        </div>
      </div>
      <div className={styles.backgroundLights}></div>
      <div className={styles.backgroundShape}></div>
    </section>
  );
}
