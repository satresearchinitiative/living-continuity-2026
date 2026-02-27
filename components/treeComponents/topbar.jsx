'use client';

import * as React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import RoomModal from "../roomModal/index";
import Modal from "react-modal";
import SceneModal from "../sceneModal";
import './treeComponents.scss';
export default function TopBar({ title }) {
  const [isDisplay, setDisplay] = React.useState(false);

  React.useEffect(() => {
    if (title == "Title Of The Entry" || title == "") {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  }, [title]);

  const [modalIsOpen, setOpen] = React.useState(false);
  function handleOpen() {
    setOpen(!modalIsOpen);
  }
  const [sceneOpen, setSceneOpen] = React.useState(false);
  return (
    <>
      <div className="isDesktop">
        <div className={styles.topbar_wrapper}>
          <Link href="/living-continuity">
            <div className={`${styles.button} button`}>living continuity</div>
          </Link>
          <div className={`${styles.title} button`}>
            {!(title == "Title Of The Entry" || title == "") &&
              <span>{title}</span>
            }
          </div>
          <div className={`${styles.button} button`}>
            Living Continuity
          </div>
        </div>
      </div>
      <div className="isMobile">
        <div
          className={`${styles.topbar_wrapper} ${styles.topbar_wrapper_mobile}`}
        >
          <div className={styles.wrapper} onClick={() => setSceneOpen(!sceneOpen)} role="button" tabIndex={0} aria-label="Toggle scene modal" onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSceneOpen(!sceneOpen); }}>
            <div
              className={`${styles.full} ${styles.button} button full_button`}
            >
              living continuity
            </div>
            <div className={`${sceneOpen ? 'closed' : 'open'}`}>
              <SceneModal />
            </div>

            <div
              className={`${styles.full} ${styles.button} button full_button`}
            >
              Living Continuity
            </div>
            <button className={`${styles.half} ${styles.button} button`} onClick={() => {
              handleOpen();
            }} aria-label="Open info modal">info</button>
          </div>
          <div className={`${styles.title} button`}>
            {!(title == "Title Of The Entry" || title == "") &&
              <span>{title}</span>
            }
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
        closeTimeoutMS={150}
        shouldCloseOnOverlayClick={true}
      >
        <RoomModal
          close={handleOpen}
        />
      </Modal>
    </>
    //inline css ?
  );
}
