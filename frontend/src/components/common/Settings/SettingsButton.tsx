"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./SettingsButton.module.css";
import SettingsModal from "./SettingsModal";

export default function SettingsButton() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <>
      <button
        className={styles.settingsButton}
        onClick={() => setIsSettingsOpen(true)}
      >
        <Image
          src="/images/icons/settings_light.png"
          alt="SettingsIcon"
          width={30}
          height={30}
          className={styles.settingsImage}
        />
      </button>
      {isSettingsOpen && (
        <SettingsModal onClose={() => setIsSettingsOpen(false)} />
      )}
    </>
  );
}
