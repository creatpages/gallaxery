import {
  HDR_TAG_PARSE_ONKEYDOWN,
  HDR_TAG_PARSE_ONKEYUP,
  MS_TAG_SEARCH_DELETE,
  MS_TAG_SEARCH_REMOVE,
  MS_TAG_SEARCH_ADD,
  GLR_CARD_LOAD,
  UF_TAG_PARSE,
  UF_TAG_DELETE,
  UF_TEXTAREA,
} from './types';

export const tagParserOnKeyDown = (e = {}, action = '') => ({
  type: HDR_TAG_PARSE_ONKEYDOWN,
  payload: {
    e,
    action,
  },
});

export const tagParserOnKeyUp = (e = {}, clearAction = 'none') => ({
  type: HDR_TAG_PARSE_ONKEYUP,
  payload: {
    e: e,
    clearAction: clearAction,
  },
});

export const tagSearchDelete = (tagId) => ({
  type: MS_TAG_SEARCH_DELETE,
  payload: {
    tagId: tagId,
  },
});

export const tagSearchRemove = (tagId) => ({
  type: MS_TAG_SEARCH_REMOVE,
  payload: {
    tagId: tagId,
  },
});

export const tagSearchAdd = (tagId) => ({
  type: MS_TAG_SEARCH_ADD,
  payload: {
    tagId: tagId,
  },
});

export const blocksConfirmedLoading = (blockId) => ({
  type: GLR_CARD_LOAD,
  payload: {
    blockId: blockId,
  },
});

export const ufTagParse = (e) => ({
  type: UF_TAG_PARSE,
  payload: {
    e,
  },
});

export const ufTagDelete = (tagId) => ({
  type: UF_TAG_DELETE,
  payload: {
    tagId,
  },
});
