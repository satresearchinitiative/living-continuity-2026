'use client';

import React, { useMemo, useState, useImperativeHandle, forwardRef } from 'react';
import styles from './contributions.module.scss';
import contributionsData from './contributions.json';

const Contributions = forwardRef(function Contributions({ currentKeywordId, glossaryData, onSubmitClick }, ref) {
  const [showSubmitForm, setShowSubmitForm] = useState(false);

  useImperativeHandle(ref, () => ({
    openSubmitForm: () => {
      setShowSubmitForm(true);
    }
  }));

  const currentKeyword = useMemo(() => {
    if (!currentKeywordId || !glossaryData || glossaryData.length === 0) {
      return null;
    }
    return glossaryData.find(k => k.id === currentKeywordId);
  }, [currentKeywordId, glossaryData]);

  const keywordTitle = currentKeyword?.title || 'self-determination';
  const keywordId = currentKeyword?.id || 'G1';
  const hasInterpretations = contributionsData[keywordId] !== undefined;
  const interpretations = hasInterpretations ? contributionsData[keywordId].interpretations : [];

  const handleSubmitClick = () => {
    const submitButton = document.querySelector('.navigation-button.navigation-button-submit');
    if (submitButton) {
      submitButton.click();
    } else {
      setShowSubmitForm(true);
      if (onSubmitClick) {
        onSubmitClick();
      }
    }
  };

  return (
    <div className={styles.contributionsContainer}>
      {showSubmitForm ? (
        <div className={styles.submitForm}>
          <h2 className={styles.title}>Submit Your Interpretation</h2>
          <p className={styles.subtitle} onClick={handleSubmitClick}>
            Share your interpretation of{' '}
            <span className={styles.keywordName}>{keywordTitle}</span>
          </p>

        </div>
      ) : hasInterpretations ? (
        <div className={styles.interpretationsContent}>
          <h2 className={styles.title}>Interpretations:</h2>
          <div className={styles.interpretationsList}>
            {interpretations.map((interpretation, index) => (
              <React.Fragment key={interpretation.id}>
                <div className={styles.interpretationItem}>
                  <p className={styles.interpretationText}>
                    {interpretation.content} - <span>{interpretation.author}</span>
                  </p>
                </div>
                {index < interpretations.length - 1 && (
                  <div className={styles.interpretationDivider}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.emptyState}>
          <h2 className={styles.title}>Interpretations:</h2>
          <p className={styles.subtitle} onClick={handleSubmitClick}>
            Submit your interpretation of{' '}
            <span className={styles.keywordName}>{keywordTitle}</span>
          </p>
        </div>
      )}
    </div>
  );
});

export default Contributions;
