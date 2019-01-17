import"../polymer/polymer-element.js";import"../iron-flex-layout/iron-flex-layout.js";import"./color.js";import"./typography.js";import"./shadow.js";import{html}from"../polymer/polymer-element.js";const template=html`<custom-style>
  <style is="custom-style">
    body {
      @apply --paper-font-common-base;
      font-size: 14px;
      margin: 0;
      padding: 24px;
      background-color: var(--paper-grey-50);
    }

    .horizontal-section-container {
      @apply --layout-horizontal;
      @apply --layout-center-justified;
      @apply --layout-wrap;
    }

    .vertical-section-container {
      @apply --layout-vertical;
      @apply --center-justified;
    }

    .horizontal-section {
      background-color: white;
      padding: 24px;
      margin-right: 24px;
      min-width: 200px;

      @apply --shadow-elevation-2dp;
    }

    .vertical-section {
      background-color: white;
      padding: 24px;
      margin: 0 24px 24px 24px;

      @apply --shadow-elevation-2dp;
    }

    .centered {
      max-width: 400px;
      margin-left: auto;
      margin-right: auto;
    }

    code {
      color: var(--google-grey-700);
    }

    /* TODO: remove this hack and use horizontal-section-container instead */
    body > div.layout.horizontal.center-justified {
      @apply --layout-wrap;
    }
  </style>
</custom-style>`;template.setAttribute("style","display: none;");document.head.appendChild(template.content);