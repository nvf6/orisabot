"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./SettingsModal.module.css";

type Tab = "appearance" | "account";

const AppearanceContent = () => (
  <div className={styles.theme}>
    <h3>المظهر</h3>
    {/* أضف هنا محتوى المظهر */}
  </div>
);

const AccountContent = () => (
  <div className={styles.account}>
    <h3>الحساب</h3>
    {/* أضف هنا محتوى الحساب */}
  </div>
);

const SettingsModal = ({ onClose }: { onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState<Tab>("appearance");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <button onClick={onClose} className={styles.closeButton}>
            <Image
              src="/images/icons/close.png"
              alt="Close"
              width={24}
              height={24}
            />
          </button>
          <h2>الإعدادات</h2>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.sidebar}>
            <button
              className={`${styles.tabButton} ${
                activeTab === "appearance" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("appearance")}
            >
              <Image
                src="/images/icons/web.png"
                alt="Appearance"
                width={24}
                height={24}
              />
              <span>المظهر</span>
            </button>
            <button
              className={`${styles.tabButton} ${
                activeTab === "account" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("account")}
            >
              <Image
                src="/images/icons/account.png"
                alt="Account"
                width={24}
                height={24}
              />
              <span>الحساب</span>
            </button>
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.tabContent}>
              {activeTab === "appearance" ? (
                <AppearanceContent />
              ) : (
                <AccountContent />
              )}
            </div>
            <div className={styles.modalFooter}>
              <p>&copy; 2024 جميع الحقوق محفوظة</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
