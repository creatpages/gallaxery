import { CA_CARD_INFO, CA_CARD_LOAD } from '../types';

const initialState = {
  fileInfo: {
    fileName: '',
    fileSize: '',
    fileType: '',
    fileURL: '',
  },
  userInfo: {
    infoUsername: '',
    infoPhotoURL: '',
    uid: '',
  },
  cardInfo: {
    infoDate: 0,
    infoDescription: '',
    infoTags: [],
    infoTitle: '',
    id: '',
  },
  isLoadingCard: true,
};

export default function cardReducer(state = initialState, action) {
  switch (action.type) {
    case CA_CARD_INFO:
      const cardData = action.payload.card;
      const newState = {
        fileInfo: {
          fileName: cardData.fileName,
          fileSize: cardData.fileSize,
          fileType: cardData.fileType,
          fileURL: cardData.fileURL,
        },
        userInfo: {
          infoUsername: cardData.infoUsername,
          infoPhotoURL: cardData.infoPhotoURL,
          uid: cardData.uid,
        },
        cardInfo: {
          infoDate: cardData.infoDate,
          infoDescription: cardData.infoDescription,
          infoTags: cardData.infoTags,
          infoTitle: cardData.infoTitle,
          id: cardData.id,
        },
        isLoadingCard: false,
      };
      return {
        ...state,
        ...newState,
      };
    case CA_CARD_LOAD:
      return {
        ...state,
        ...{ isLoadingCard: true },
      };

    default:
      return {
        ...state,
      };
  }
}