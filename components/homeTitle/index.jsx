'use client';

import * as React from "react";
import { usePathname } from "next/navigation";
import { useStore } from "usestore-react";
import "./homeTitle.scss";

export default function HomeTitle() {
  const pathname = usePathname();
  const [selectedNode] = useStore('selectedNodeStore', null);
  const [highlightedTerm, setHighlightedTerm] = React.useState(null);
  const [highlightedArticle, setHighlightedArticle] = React.useState(null);
  const [nodeData, setNodeData] = React.useState(null);

  const isHomePage = pathname === '/';

  React.useEffect(() => {
    fetch('/data/nodes.json')
      .then(res => res.json())
      .then(data => {
        setNodeData(data);
      })
      .catch(err => {
        console.error('Failed to load node data:', err);
      });
  }, []);

  React.useEffect(() => {
    if (selectedNode && nodeData) {
      if (selectedNode.id?.startsWith('G')) {
        const glossaryTerm = nodeData.glossary?.find(g => g.id === selectedNode.id);
        if (glossaryTerm) {
          setHighlightedTerm(glossaryTerm.title || glossaryTerm.id);
          setHighlightedArticle(null);
        } else {
          setHighlightedTerm(null);
          setHighlightedArticle(null);
        }
      } else if (selectedNode.id?.startsWith('A')) {
        const article = nodeData.articles?.find(a => a.id === selectedNode.id);
        if (article) {
          setHighlightedArticle(article.title);
          setHighlightedTerm(null);
        } else {
          setHighlightedTerm(null);
          setHighlightedArticle(null);
        }
      } else {
        setHighlightedTerm(null);
        setHighlightedArticle(null);
      }
    } else {
      setHighlightedTerm(null);
      setHighlightedArticle(null);
    }
  }, [selectedNode, nodeData]);

  if (!isHomePage) {
    return null;
  }

  return (
    <div className="home_title_wrapper">
      {highlightedTerm && (
        <div className="highlighted_term">
          {highlightedTerm}
        </div>
      )}
      {highlightedArticle && (
        <div className="highlighted_article">
          {highlightedArticle}
        </div>
      )}
    </div>
  );
}
