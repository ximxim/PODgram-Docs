import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

interface FAQ {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQStructuredDataProps {
  faqs: FAQ[];
  title?: string;
}

interface FAQStructuredData {
  "@context": string;
  "@type": string;
  mainEntity: FAQQuestionStructuredData[];
}

interface FAQQuestionStructuredData {
  "@type": "Question";
  name: string;
  acceptedAnswer: {
    "@type": "Answer";
    text: string;
  };
}

export default function FAQStructuredData({
  faqs,
  title = "Frequently Asked Questions",
}: FAQStructuredDataProps) {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  // Create structured data for SEO
  const faqStructuredData: FAQStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text:
          typeof faq.answer === "string" ? faq.answer : "See answer details",
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <div className="faq-container">
        <h1 className="faq-title">{title}</h1>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div
                className={`faq-question ${
                  expandedItems.has(index) ? "expanded" : ""
                }`}
                onClick={() => toggleExpanded(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleExpanded(index);
                  }
                }}
              >
                <span
                  className={`faq-expand-icon ${
                    expandedItems.has(index) ? "expanded" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
                <span className="faq-question-text">{faq.question}</span>
              </div>

              {expandedItems.has(index) && (
                <div className="faq-answer">
                  {typeof faq.answer === "string" ? (
                    <p>{faq.answer}</p>
                  ) : (
                    faq.answer
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
