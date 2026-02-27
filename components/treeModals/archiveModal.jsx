import * as React from "react";
import Link from "next/link";
import "./archive.scss";
import { useStore } from "usestore-react";
import CrossButton from "../menu/CrossButton";
import { COLOR_BLACK } from "../_setup/colors";

const slugifyTitle = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export default function ArchiveModal({
  title,
  author,
  content,
  img,
  authorBio,
  keywords,
  connect1,
  connect2,
  connect3,
  connect4,
  photoCredit,
  closeModal,
}) {
  const [adapt, setAdapt] = useStore("adapt", false);
  const [imageOrientation, setImageOrientation] = React.useState(null);
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const handleImageLoad = (e) => {
    const img = e.target;
    const isLandscape = img.naturalWidth > img.naturalHeight;
    setImageOrientation(isLandscape ? 'isLandscape' : 'isPortrait');
    setImageLoaded(true);
  };

  return (
    <>
      <div className="modal_wrapper">
        {closeModal && (
          <div className="close_button">
            <CrossButton color={COLOR_BLACK} onClick={closeModal} />
          </div>
        )}
        <div className="content">
          {img && (
            <figure className={`image_wrapper ${imageOrientation || ''} ${imageLoaded ? 'image_loaded' : ''}`}>
              <img 
                src={img} 
                alt=""
                className="image_placeholder"
                aria-hidden="true"
              />
              <img 
                src={img} 
                alt={title}
                className={imageLoaded ? 'image_loaded' : 'image_loading'}
                onLoad={handleImageLoad}
                onError={(e) => {
                  e.target.style.display = 'none';
                  setImageLoaded(true);
                  console.warn('Failed to load image:', img);
                }}
              />
              {author && (
                <figcaption className="photo_credit">
                  Photo Credit: {photoCredit || author}
                </figcaption>
              )}
            </figure>
          )}
          {title && <h2>{title}</h2>}
          {author && <p className="author"><span>By</span> {author}</p>}
          {content && (
            <div
              className="text"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
          {authorBio && (
            <div className="section">
              <h5 className="section_label">Author Bio:</h5>
              <div
                className="text-1"
                dangerouslySetInnerHTML={{ 
                  __html: (() => {
                    let processed = authorBio;
                    if (author) {
                      const escaped = author.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                      processed = processed.replace(new RegExp(`(?<!\\*\\*)(${escaped})(?!\\*\\*)`, 'g'), '**$1**');
                    }
                    return processed
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em>$1</em>')
                      .replace(/\n/g, '<br/>');
                  })()
                }}
              />
            </div>
          )}
          {(() => {
            const hasConnections = connect1 || connect2 || connect3 || connect4;
            
            let keywordsToDisplay = [];
            if (keywords) {
              if (Array.isArray(keywords)) {
                keywordsToDisplay = keywords;
              } else if (typeof keywords === 'string') {
                keywordsToDisplay = keywords.split(',').map(k => k.trim()).filter(Boolean);
              }
            }
            
            const hasKeywordsToShow = keywordsToDisplay.length > 0;
            
            if (!hasKeywordsToShow && !hasConnections) return null;
            
            return (
              <div className="section">
                <h5 className="section_label">Keywords:</h5>
                {hasKeywordsToShow ? (
                  <div className="connections">
                    {keywordsToDisplay.map((keyword, index) => {
                      const keywordText = keyword && typeof keyword === 'object' ? (keyword.text || keyword) : keyword;
                      let keywordLink = keyword && typeof keyword === 'object' && keyword.link !== undefined 
                        ? keyword.link 
                        : null;
                      
                      if (keywordLink && keywordLink.includes('#G')) {
                        const idMatch = keywordLink.match(/#(G\d+)/);
                        if (idMatch) {
                          const keywordId = idMatch[1];
                          keywordLink = `/glossary#${slugifyTitle(keywordText)}`;
                        }
                      } else if (keywordLink && keywordLink.startsWith('/glossary#')) {
                        const hashPart = keywordLink.split('#')[1];
                        if (hashPart && hashPart.match(/^G\d+$/)) {
                          keywordLink = `/glossary#${slugifyTitle(keywordText)}`;
                        }
                      }
                      
                      return (
                        <span key={index}>
                          {keywordLink ? (
                            <Link 
                              href={keywordLink}
                              className="item_link"
                              onClick={closeModal}
                            >
                              {keywordText}
                            </Link>
                          ) : (
                            <span className="item">
                              {keywordText}
                            </span>
                          )}
                          {index < keywordsToDisplay.length - 1 && <span className="comma">, </span>}
                        </span>
                      );
                    })}
                  </div>
                ) : hasConnections ? (
                  <div className="connections">
                    {[connect1, connect2, connect3, connect4].filter(Boolean).map((item, index, array) => (
                      <span key={index}>
                        <span className="item">{item}</span>
                        {index < array.length - 1 && <span className="comma">, </span>}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })()}
        </div>
      </div>
    </>
  );
}
