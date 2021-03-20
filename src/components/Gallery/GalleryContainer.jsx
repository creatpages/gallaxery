import React, { useCallback, useEffect, useRef, useState } from 'react';
import Gallery from './Gallery';

import { blocksConfirmedLoading } from '../../redux/actions';
import { connect } from 'react-redux';

import firebase from 'firebase/app';

async function getImages(key) {
  try {
    const data = await firebase
      .firestore()
      .collection('usersImages')
      .orderBy('infoDate', 'desc')
      .startAfter(key)
      // .limit(10)
      .get();

    let cards = [];
    let lastKey = '';
    data.forEach((doc) => {
      cards.push({
        infoDate: doc.data().infoDate,
        infoPhotoURL: doc.data().infoPhotoURL,
        infoTitle: doc.data().infoTitle,
        fileURL: doc.data().fileURL,
      });
      lastKey = doc.data().infoDate;
    });
    return { cards, lastKey };
  } catch (e) {}
}

const GalleryContainer = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const [cards, setCards] = useState([]);
  const [lastKey, setLastKey] = useState('');

  useEffect(() => {
    setIsLoading(true);
    getImages(lastKey)
      .then((res) => {
        setCards(res.cards);
        setLastKey(res.lastKey);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, []);

  function checker(loadingElementRef) {
    if (isLoading) {
      return (
        <div className="loading">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="dataLoaded">
          <div className="dataLoaded-icon"></div>
          <div className="dataLoaded-text">All data loaded.</div>
        </div>
      );
    }
  }

  const allCards = cards.map((block) => {
    return (
      <div className="card-p" key={block.infoDate}>
        <div className="card-p-top">
          <img src={block.fileURL} alt="" />
        </div>
        <div className="card-p-bottom">
          <img src={block.infoPhotoURL} alt="" />
          <p>{block.infoTitle}</p>
        </div>
      </div>
    );
  });

  const vars = {
    allCards,
  };

  const functions = {
    checker,
    checker,
  };

  return <Gallery vars={vars} functions={functions} />;
};

const mapStateToProps = (state) => {
  return {
    blocks: state.galleryReducer.blocks,
    update: state.galleryReducer.update,
  };
};

const mapDispatchToProps = {
  blocksConfirmedLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryContainer);
