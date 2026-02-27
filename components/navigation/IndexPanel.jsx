'use client';

import React from 'react';
import CrossButton from '../menu/CrossButton';
import { COLOR_BLACK } from '../_setup/colors';
import Modal from 'react-modal';
import ArchiveModal from '../treeModals/archiveModal';
import '../treeModals/archive.scss';
import './navigation.scss';

export default function IndexPanel({ isOpen, onClose, onReopen }) {
  const [articles, setArticles] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [selectedArticle, setSelectedArticle] = React.useState(null);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [openedFromIndex, setOpenedFromIndex] = React.useState(false);
  const pendingArticleRef = React.useRef(null);
  const listRef = React.useRef(null);

  React.useEffect(() => {
    if (isOpen || modalIsOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen, modalIsOpen]);

  React.useEffect(() => {
    if (!isOpen) return;

    const checkForModal = () => {
      const hasArchiveModalOpen = document.body.classList.contains('archive-modal-open');
      
      if (hasArchiveModalOpen && !modalIsOpen) {
        onClose();
      }
    };

    const observer = new MutationObserver(() => {
      checkForModal();
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });

    checkForModal();

    return () => {
      observer.disconnect();
    };
  }, [isOpen, modalIsOpen, onClose]);

  React.useEffect(() => {
    if (!isOpen && pendingArticleRef.current) {
      const article = pendingArticleRef.current;
      pendingArticleRef.current = null;
      setTimeout(() => {
        setSelectedArticle(article);
        setModalIsOpen(true);
        setOpenedFromIndex(false);
        if (article.id) {
          window.history.pushState(null, '', `#${article.id}`);
        }
      }, 300);
    }
  }, [isOpen]);

  React.useEffect(() => {
    const loadArticles = async () => {
      try {
        const response = await fetch(`/data/nodes.json?t=${Date.now()}`);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: Failed to load articles`);
        }
        const data = await response.json();
        const sortedArticles = (data.articles || []).sort((a, b) => {
          const titleA = (a.title || '').toLowerCase();
          const titleB = (b.title || '').toLowerCase();
          return titleA.localeCompare(titleB);
        });
        setArticles(sortedArticles);
        
        const hash = window.location.hash.substring(1);
        if (hash && !modalIsOpen && !selectedArticle) {
          const articleFromHash = sortedArticles.find(a => a.id === hash);
          if (articleFromHash) {
            setTimeout(() => {
              setSelectedArticle(articleFromHash);
              setModalIsOpen(true);
              setOpenedFromIndex(false);
            }, 500);
          }
        }
      } catch (error) {
        console.error('[IndexPanel] Error loading articles:', error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    if (isOpen) {
      setLoading(true);
      loadArticles();
    }
  }, [isOpen]);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setOpenedFromIndex(true);
    if (article.id) {
      window.history.pushState(null, '', `#${article.id}`);
    }
    onClose();
    setTimeout(() => {
      setModalIsOpen(true);
    }, 300);
  };

  const handleCloseModal = () => {
    const wasOpenedFromIndex = openedFromIndex;
    setModalIsOpen(false);
    setSelectedArticle(null);
    setOpenedFromIndex(false);
    
    // Clear the hash from URL when closing the modal
    if (typeof window !== 'undefined' && window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    
    if (wasOpenedFromIndex && !isOpen && onReopen) {
      setTimeout(() => {
        onReopen();
      }, 300);
    }
  };

  const handlePanelClose = () => {
    if (selectedArticle && modalIsOpen) {
      pendingArticleRef.current = selectedArticle;
      setModalIsOpen(false);
      setOpenedFromIndex(false);
      // Clear the hash from URL when closing the modal
      if (typeof window !== 'undefined' && window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
      setTimeout(() => {
        onClose();
      }, 150);
    } else {
      onClose();
    }
  };

  return (
    <>
      <div className={`index-panel-wrapper ${isOpen ? 'open' : ''}`}>
        <div className="index-panel-close">
          <CrossButton color={COLOR_BLACK} onClick={handlePanelClose} />
        </div>

        <div className="index-panel-content">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <h4>List View:</h4>
              <div 
                ref={listRef}
                className="index-panel-list"
              >
                {articles.map((article) => (
                  <button
                    key={article.id}
                    className="index-panel-item"
                    onClick={() => handleArticleClick(article)}
                  >
                    <span className="index-panel-arrow"></span>{article.title}{article.author && ` — ${article.author}`}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div 
        className={`index-panel-overlay ${isOpen && !modalIsOpen ? 'open' : ''}`}
        onClick={handlePanelClose}
      />

      {selectedArticle && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Article Modal"
          className="archive-modal-content"
          overlayClassName="archive-modal-overlay"
          bodyOpenClassName="archive-modal-open"
          htmlOpenClassName="archive-modal-open"
          closeTimeoutMS={150}
          shouldCloseOnOverlayClick={true}
        >
          <ArchiveModal
            title={selectedArticle.title}
            author={selectedArticle.author}
            content={selectedArticle.content}
            img={selectedArticle.imageUrl}
            authorBio={selectedArticle.authorBio}
            keywords={selectedArticle.keywords}
            connect1={selectedArticle.connectionKeywords?.[0] || ""}
            connect2={selectedArticle.connectionKeywords?.[1] || ""}
            connect3={selectedArticle.connectionKeywords?.[2] || ""}
            connect4={selectedArticle.connectionKeywords?.[3] || ""}
            photoCredit={selectedArticle.photoCredit}
            closeModal={handleCloseModal}
          />
        </Modal>
      )}
    </>
  );
}
