import { useReducer } from "react";

export const initialState = {
    siteData: {},
    featureImageSource: "",
    imageCaptionSource: [],
    audioFilePath: ""
}

export const setSiteData = (siteData) => {
    return {
        type: 'SET_SITE_DATA',
        payload: siteData
    }
}

export const setFeatureImageSource = (url) => {
    return {
        type: 'SET_FEAT_IMG_SRC',
        payload: url
    }
}

export const setImageCaptionSource = (caption) => {
    return {
        type: 'SET_IMG_CAPTION_SRC',
        payload: caption
    }
}

export const setAudioFilePath = (url) => {
    return {
        type: 'SET_AUDIO_FILE_PATH',
        payload: url
    }
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_SITE_DATA': {
            return {
                ...state,
                siteData: action.payload
            }
        }
        case 'SET_FEAT_IMG_SRC': {
            return {
                ...state,
                featureImageSource: action.payload
            }
        }
        case 'SET_IMG_CAPTION_SRC': {
            return {
                ...state,
                imageCaptionSource: action.payload
            }
        }
        case 'SET_AUDIO_FILE_PATH': {
            return {
                ...state,
                audioFilePath: action.payload
            }
        }
    }
}