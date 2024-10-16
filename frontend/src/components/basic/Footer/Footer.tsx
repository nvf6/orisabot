"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import {
  FaEnvelope,
  FaIdCard,
  FaLock,
  FaTwitter,
  FaTiktok,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaEnvelope className={styles.contactIcon} />,
    text: "info@orisabot.com",
    url: "mailto:info@orisabot.com",
    tooltip: "البريد الإلكتروني الخاص بنا",
  },
  {
    icon: <FaIdCard className={styles.contactIcon} />,
    text: "FL-290467458",
    url: "https://freelance.sa/home",
    tooltip: "رقم شهادة العمل الحر",
  },
  {
    icon: (
      <Image
        src="/images/icons/73db0d36d524a730.png"
        alt="السجل التجاري"
        width={16}
        height={16}
        className={styles.registerIcon}
      />
    ),
    text: "1009056156",
    url: "#",
    tooltip: "رقم السجل التجاري",
  },
];

const socialLinks = [
  { icon: <FaTwitter />, url: "https://x.com/TryOrisaBot" },
  { icon: <FaTiktok />, url: "https://www.tiktok.com/@orisabot" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/orisabot/" },
  { icon: <FaDiscord />, url: "http://discord.gg/orisabot" },
];

const LAUNCH_DATE = new Date("2024-01-01"); // Date Start The Project
const VERSION_INTERVAL = 6 * 30 * 24 * 60 * 60 * 1000; // 6 months in milliseconds | Increases 0.1 every 6 months

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3>السجل التجاري</h3>
          <Image
            src="/images/icons/close.png"
            alt="إغلاق"
            width={24}
            height={24}
            onClick={onClose}
            className={styles.closeIcon}
          />
        </div>
        <div className={styles.modalBody}>
          {children}
          <p className={styles.modalCopyright}>
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

const Tooltip = ({ children, content }) => {
  const triggerRef = useRef(null);

  return (
    <span ref={triggerRef} className={styles.tooltipWrapper}>
      {children}
      <span className={styles.newTooltip}>{content}</span>
    </span>
  );
};

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [version, setVersion] = useState("v1.0");

  useEffect(() => {
    const now = new Date();
    const timeDiff = now.getTime() - LAUNCH_DATE.getTime();
    const versionNumber = Math.floor(timeDiff / VERSION_INTERVAL) + 1;
    const majorVersion = Math.floor((versionNumber - 1) / 10) + 1;
    const minorVersion = (versionNumber - 1) % 10;
    setVersion(`v${majorVersion}.${minorVersion}`);
  }, []);

  const handleContactClick = (text: string, url: string) => {
    if (text === "1009056156") {
      setNotification("جارٍ نقلك ...");
      navigator.clipboard.writeText(text);
      setTimeout(() => {
        setNotification(`تم إعادة توجيهك ، ونسخك للنص | ${text}`);
        setIsModalOpen(true);
        setTimeout(() => setNotification(null), 2000);
      }, 1000);
    } else {
      setNotification("جارٍ نقلك ...");
      navigator.clipboard.writeText(text);

      setTimeout(() => {
        setNotification(`تم إعادة توجيهك ، ونسخك للنص | ${text}`);
        window.open(url, "_blank");
        setTimeout(() => setNotification(null), 2000);
      }, 1000);
    }
  };

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.footerTop}>
        <FooterColumn
          title="أوريسا بوت"
          links={[
            { href: "/about", text: "عن أوريسا" },
            { href: "/terms#terms", text: "الشروط والأحكام" },
            { href: "/terms#policy", text: "سياسة الخصوصية" },
          ]}
        />

        <FooterColumn
          title="الخدمات والمميزات"
          links={[
            { href: "/price", text: "الاشتراكات والمزايا" },
            { text: "آراء العملاء", comingSoon: true },
            { text: "شركاؤنا", comingSoon: true },
          ]}
        />

        <FooterColumn
          title="المساعدة"
          links={[
            {
              href: "https://discord.com/invite/orisabot",
              text: "الدعم الفني",
              external: true,
            },
            { href: "/faq", text: "الأسئلة الشائعة" },
            { href: "/contact", text: "الاقتراحات والشكاوى" },
          ]}
        />

        <div className={styles.footerColumn}>
          <h3>معلومات التواصل</h3>
          <ul className={styles.contactInfo}>
            {contactInfo.map((info, index) => (
              <li key={index}>
                <Tooltip content={info.tooltip}>
                  <div
                    className={styles.contactLink}
                    onClick={() => handleContactClick(info.text, info.url)}
                  >
                    {info.icon}
                    <span>{info.text}</span>
                  </div>
                </Tooltip>
              </li>
            ))}
          </ul>
          <div className={styles.socialIcons}>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.cccc}>
        <div className={styles.glowingCircle}></div>
      </div>
      <div className={styles.footerBottom}>
        <p>
          جميع الحقوق محفوظة <Link href="/">أوريسا بوت</Link> &copy;{" "}
          {new Date().getFullYear()}
        </p>
        <p className={styles.version}>{version}</p>
      </div>
      {notification && (
        <div className={styles.notification}>{notification}</div>
      )}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Image
          src="/images/icons/73db0d36d524a730.png"
          alt="السجل التجاري"
          width={400}
          height={400}
          className={styles.modalImage}
        />
      </Modal>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  links: Array<{
    href?: string;
    text: string;
    comingSoon?: boolean;
    external?: boolean;
  }>;
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className={styles.footerColumn}>
      <h3>{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            {link.comingSoon ? (
              <div className={styles.comingSoon}>
                <FaLock className={styles.lockIcon} />
                <span className={styles.title}>{link.text}</span>
                <small className={styles.comingSoonText}>قريبًا 🔥</small>
              </div>
            ) : link.external ? (
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.text}
              </a>
            ) : (
              <Link href={link.href || "#"}>{link.text}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
