import React from 'react';
import styles from './PromoConsentPopup.module.css';
import heart from '../../assets/heart.png';

const PromoConsentPopup = ({ onConsent, onSkip }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <h1 className={styles.header}>We Want to keep in touch</h1>
        <div className={styles.heartBorder}>
          <img src={heart} alt="Heart" className={styles.heartIcon} />
        </div>
        <div className={styles.message}>
          By clicking "Yes" below you agree to receive automated promotional text messages at the mobile number you provided when booking your appointment. Consent is not the condition of purchase.
        </div>
        <div className={styles.buttons}>
          <button className={styles.yesButton} onClick={onConsent}>Yes</button>
          <button className={styles.skipButton} onClick={onSkip}>Skip</button>
        </div>
      </div>
    </div>
  );
};

export default PromoConsentPopup;