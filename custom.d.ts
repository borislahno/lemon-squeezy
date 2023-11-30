/// <reference types="redux-persist" />
declare module '*.jpg';
declare module '*.png';
declare module '*.svg' {
  import react = require('react');
  export const ReactComponent: react.fc<react.svgprops<svgsvgelement>>;
  const src: string;
  export default src;
}