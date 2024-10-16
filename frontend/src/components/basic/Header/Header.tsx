import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import SettingsButton from "@/components/common/Settings/SettingsButton";

const navLinks = [
  { name: "تواصل معنا", path: "#footer" },
  { name: "الباقات", path: "#pricing" },
  { name: "الخدمات", path: "#services" },
  { name: "المميزات", path: "#features" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <Link
        href="/"
        className={styles.brandIdentity}
        aria-label="الصفحة الرئيسية"
      >
        <Image
          src="/images/logo.svg"
          width={40}
          height={40}
          alt="OrisaLogo"
          className={styles.brandlogo}
        />
        <span className={styles.brandName}>Orisabot</span>
      </Link>
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.path} className={styles.navItem}>
              <Link href={link.path} className={styles.navLink}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.userActions}>
        <SettingsButton />
        <button type="button" className={styles.loginButton}>
          تسجيل دخول
        </button>
      </div>
    </header>
  );
}
