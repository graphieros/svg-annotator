<template>
  <div id="app" style="overflow-x:auto;">
    <header>
      <h1 class="righteous" style="z-index:1">
        SVG Annotator for Vue 2
        <img src="./assets/logo.png" height="40px" style="margin-bottom: -10px;"/>
      </h1>
      <nav class="menu menu__wrapper">
      <div class="menu menu__item">
        <a href="#setup" @click="currentScroll='setup'" :class="{'selected': currentScroll === 'setup'}">
          Setup
        </a>
      </div>
      <div class="menu menu__item">
        <a href="#functionalities" @click="currentScroll='functionalities'" :class="{'selected': currentScroll === 'functionalities'}">
          Functionalities
        </a>
      </div>
      <div class="menu menu__item" >
        <a href="#props" @click="currentScroll='props'" :class="{'selected': currentScroll === 'props'}">
          Props
        </a>
      </div>
      <div class="menu menu__item">
        <a href="#events" @click="currentScroll='events'" :class="{'selected': currentScroll === 'events'}">
          Events
        </a>
      </div>
      <div class="menu menu__item">
        <a href="#caveats" @click="currentScroll='caveats'" :class="{'selected': currentScroll === 'caveats'}">
          Caveats
        </a>
      </div>
      <div class="menu menu__item">
        <a href="#vue3" @click="currentScroll='vue3'" :class="{'selected': currentScroll === 'vue3'}">
          Vue3 support
        </a>
      </div>
    </nav>
    </header>
    
    <div style="margin-top: 130px; padding: 0 48px;">
          <div class="app-title">
      <p>
        <b>
          Client side content annotation tool & pdf generator.
        </b>
        <br>
          <span style="color:rgb(200,100,100)">(not suited for touchscreen only devices)</span>
          <br><br>
          <code style="margin:0 auto;">npm i svg-annotator</code>
      </p>
    </div>
      <SvgAnnotator showPrint @interface="getAnnotatorInterface" :toolboxOpen="true">
        <div style="width: 100%; height: 500px; background: rgba(0,0,0,0.05); display:flex; align-items:center; justify-content:center; color: rgba(0,0,0,0.3); font-size:1rem;">
          <p v-if="isTouchScreen" style="padding: 0 48px; color: rgb(200,100,100)">
            SvgAnnotator is disabled by default on touchscreens.
          </p>
          <p style="padding: 0 48px;">
            This grey area represents the content slotted inside the SvgAnnotator. In this case it's a simple DIV containing this text, but it can be an image, a chart, a whole page...
          </p>
        </div>
      </SvgAnnotator>


      <p>
        This is an example where an image is slotted:
      </p>
      <p style="text-align:center;">
        An event is triggered to signal the open | closed state of the toolbar.<br>
        The toolbar is <b>{{ isOpen ? 'open' : 'closed' }}</b>.
      </p>
      <SvgAnnotator showPrint @toggleOpenState="toggleAnnotator">
        <img src="./assets/shore.jpg" style="width:100%">
      </SvgAnnotator>

      <section id="setup" >
        <h2 class="righteous" ref="setup"><img src="./assets/logo.png" height="20" class="chevron">Setup</h2>
        <code>npm i svg-annotator</code><br>
        <div>
          Then import the component in your .vue files: <br>
          <code>
            import svgAnnotator from "svg-annotator";
          </code><br>
          Add the component to the list of components:
          <code>
            components: { SvgAnnotator },
          </code><br>
          <b>Important: you should only slot one element inside the SvgAnnotator:</b>
          <br><br>
          ✔ Correct implementations:
          <br><br>
          <div style="display: flex; gap: 24px; flex-wrap: wrap">
            <code>
              &#x3c;SvgAnnotator&#x3e;<br>
              &nbsp;&nbsp;&#x3c;img&#x3e;<br>
              &#x3c;/SvgAnnotator&#x3e;
            </code>
            <code>
              &#x3c;SvgAnnotator&#x3e;<br>
              &nbsp;&nbsp;&#x3c;canvas&#x3e;<br>
              &nbsp;&nbsp;&#x3c;/canvas&#x3e;<br>
              &#x3c;/SvgAnnotator&#x3e;
            </code>
            <code>
              &#x3c;SvgAnnotator&#x3e;<br>
              &nbsp;&nbsp;&#x3c;div&#x3e;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&#x3c;h1&#x3e;My chart&#x3c;/h1&#x3e;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&#x3c;chart /&#x3e;<br>
              &nbsp;&nbsp;&#x3c;/div&#x3e;<br>
              &#x3c;/SvgAnnotator&#x3e;
            </code>
            <code>
              &#x3c;SvgAnnotator&#x3e;<br>
              &nbsp;&nbsp;&#x3c;section&#x3e;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&#x3c;div&#x3e;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x3c;h1&#x3e;My chart&#x3c;/h1&#x3e;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&#x3c;/div&#x3e;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&#x3c;div&#x3e;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x3c;chart /&#x3e;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&#x3c;/div&#x3e;<br>
              &nbsp;&nbsp;&#x3c;/section&#x3e;<br>
              &#x3c;/SvgAnnotator&#x3e;
            </code>
          </div>
          
          <br><br>
          ❌ Wrong implementation:
          <br>
          <code>
            &#x3c;SvgAnnotator&#x3e;<br>
            &nbsp;&nbsp;&#x3c;h1&#x3e;My chart&#x3c;/h1&#x3e;<br>
            &nbsp;&nbsp;&#x3c;chart /&#x3e;<br>
            &#x3c;/SvgAnnotator&#x3e;
          </code>
        </div>
      </section>

      <section id="functionalities">
      <h2 class="righteous" ref="functionalities"><img src="./assets/logo.png" height="20" class="chevron">Functionalities</h2>

      <h4>Draw shapes</h4>
      <p class="functionalities">
        Available shapes:
        <ul>
          <li>
            <div class="icon-box">
              <svg viewBox="0 0 12 12" height="20" width="20">
                <circle cx="6" cy="6" r="4" fill="white" stroke="grey"></circle>
              </svg>
            </div>
            
            Circle
          </li>
          <li>
            <div class="icon-box">
              <svg viewBox="0 0 12 12" height="20" width="20">
                <rect x="3" y="3" height="6" width="6" fill="white" stroke="grey"></rect>
              </svg>
            </div>
            
            Rectangle
          </li>
          <li>
            <div class="icon-box">
              <svg viewBox="0 0 24 24" height="20" width="20">
                <path stroke="grey" fill="none" stroke-linecap="round" stroke-linejoin="round" d="M5,19 19,5 14,5 19,10.5 19,5" stroke-width="2"/>
              </svg>
            </div>
            Arrow
          </li>
          <li>
            <div class="icon-box">
              <svg viewBox="0 0 24 24" height="20" width="20">
                  <path
                    stroke="grey"
                    stroke-width="1"
                    d="M9.75 20.85C11.53 20.15 11.14 18.22 10.24 17C9.35 15.75 8.12 14.89 6.88 14.06C6 13.5 5.19 12.8 4.54 12C4.26 11.67 3.69 11.06 4.27 10.94C4.86 10.82 5.88 11.4 6.4 11.62C7.31 12 8.21 12.44 9.05 12.96L10.06 11.26C8.5 10.23 6.5 9.32 4.64 9.05C3.58 8.89 2.46 9.11 2.1 10.26C1.78 11.25 2.29 12.25 2.87 13.03C4.24 14.86 6.37 15.74 7.96 17.32C8.3 17.65 8.71 18.04 8.91 18.5C9.12 18.94 9.07 18.97 8.6 18.97C7.36 18.97 5.81 18 4.8 17.36L3.79 19.06C5.32 20 7.88 21.47 9.75 20.85M20.84 5.25C21.06 5.03 21.06 4.67 20.84 4.46L19.54 3.16C19.33 2.95 18.97 2.95 18.76 3.16L17.74 4.18L19.82 6.26M11 10.92V13H13.08L19.23 6.85L17.15 4.77L11 10.92Z"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
              </svg>
            </div>
            Freehand drawing
          </li>
          <li>
            <div class="icon-box">
              <svg viewBox="0 0 24 24" height="20" width="20">
                  <path fill="grey"
                    d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z"
                  />
              </svg>
            </div>
            Text
          </li>
        </ul>
      </p>

      <p class="functionalities">
        Shape personalization:
        <ul>
          <li>
            Circles and rectangles can be empty or filled
          </li>
          <li>
            Line thickness
          </li>
          <li>
            Dashed lines
          </li>
          <li>
            Color picker
          </li>
          <li>
            color alpha
          </li>
        </ul>
      </p>

      <h4>Include text</h4>
      <p class="functionalities">
        Text formatting:
        <ul>
          <li>
            Font size
          </li>
          <li>
            <div class="icon-box">
              <svg height="20" width="20" viewBox="0 0 24 24">
                  <path
                    fill="grey"
                    d="M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z"
                  />
                </svg>
            </div>
            Bullet points mode
          </li>
          <li>
            <div class="icon-box">
              <svg height="20" width="20" viewBox="0 0 24 24">
                  <path
                    fill="grey"
                    d="M3,3H21V5H3V3M3,7H15V9H3V7M3,11H21V13H3V11M3,15H15V17H3V15M3,19H21V21H3V19Z"
                  />
                </svg>
            </div>
            <div class="icon-box">
              <svg height="20" width="20" viewBox="0 0 24 24">
                  <path
                    fill="grey"
                    d="M3,3H21V5H3V3M7,7H17V9H7V7M3,11H21V13H3V11M7,15H17V17H7V15M3,19H21V21H3V19Z"
                  />
                </svg>
            </div>
            <div class="icon-box">
              <svg height="20" width="20" viewBox="0 0 24 24">
                  <path
                    fill="grey"
                    d="M3,3H21V5H3V3M9,7H21V9H9V7M3,11H21V13H3V11M9,15H21V17H9V15M3,19H21V21H3V19Z"
                  />
                </svg>
            </div>
            Text alignment (left, center, right)
          </li>
          <li>
            <div class="icon-box">
              <svg height="20" width="20" viewBox="0 0 24 24">
                  <path
                    fill="grey"
                    d="M13.5,15.5H10V12.5H13.5A1.5,1.5 0 0,1 15,14A1.5,1.5 0 0,1 13.5,15.5M10,6.5H13A1.5,1.5 0 0,1 14.5,8A1.5,1.5 0 0,1 13,9.5H10M15.6,10.79C16.57,10.11 17.25,9 17.25,8C17.25,5.74 15.5,4 13.25,4H7V18H14.04C16.14,18 17.75,16.3 17.75,14.21C17.75,12.69 16.89,11.39 15.6,10.79Z"
                  />
                </svg>
            </div>
            <div class="icon-box">
              <svg height="20" width="20" viewBox="0 0 24 24">
                  <path
                    fill="grey"
                    d="M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z"
                  />
                </svg>
            </div>
            <div class="icon-box">
              <svg height="20" width="20" viewBox="0 0 24 24">
                  <path
                    fill="grey"
                    d="M5,21H19V19H5V21M12,17A6,6 0 0,0 18,11V3H15.5V11A3.5,3.5 0 0,1 12,14.5A3.5,3.5 0 0,1 8.5,11V3H6V11A6,6 0 0,0 12,17Z"
                  />
                </svg>
            </div>
            Text style (bold, italic, underlined)
          </li>
        </ul>
      </p>

      <h4>Controls</h4>
      <ul>
        <li>
          <div class="icon-box">
            <svg height="20" width="20" viewBox="0 0 24 24">
                <path
                  fill="grey"
                  d="M1,1V5H2V19H1V23H5V22H19V23H23V19H22V5H23V1H19V2H5V1M5,4H19V5H20V19H19V20H5V19H4V5H5M6,6V14H9V18H18V9H14V6M8,8H12V12H8M14,11H16V16H11V14H14"
                />
              </svg>
          </div>
          Select and group in one action
        </li>
        <li>
          <div class="icon-box">
            <svg height="20" width="20" viewBox="0 0 24 24">
                <path
                  fill="grey"
                  d="M2,2H6V3H13V2H17V6H16V9H18V8H22V12H21V18H22V22H18V21H12V22H8V18H9V16H6V17H2V13H3V6H2V2M18,12V11H16V13H17V17H13V16H11V18H12V19H18V18H19V12H18M13,6V5H6V6H5V13H6V14H9V12H8V8H12V9H14V6H13M12,12H11V14H13V13H14V11H12V12Z"
                />
              </svg>
          </div>
          Ungroup
        </li>
        <li>
          <div class="icon-box">
            <svg height="20" width="20" viewBox="0 0 24 24">
                <path
                  fill="grey"
                  d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"
                />
              </svg>
          </div>
          Delete
        </li>
        <li>
          <div class="icon-box">
            <svg height="20" width="20" viewBox="0 0 24 24">
                <path
                  fill="grey"
                  d="M13,11H18L16.5,9.5L17.92,8.08L21.84,12L17.92,15.92L16.5,14.5L18,13H13V18L14.5,16.5L15.92,17.92L12,21.84L8.08,17.92L9.5,16.5L11,18V13H6L7.5,14.5L6.08,15.92L2.16,12L6.08,8.08L7.5,9.5L6,11H11V6L9.5,7.5L8.08,6.08L12,2.16L15.92,6.08L14.5,7.5L13,6V11Z"
                />
              </svg>
          </div>
          Move
        </li>
        <li>
          <div class="icon-box">
            <svg height="20" width="20" viewBox="0 0 24 24">
                <path
                  fill="grey"
                  d="M23,15H21V17H23V15M23,11H21V13H23V11M23,19H21V21C22,21 23,20 23,19M15,3H13V5H15V3M23,7H21V9H23V7M21,3V5H23C23,4 22,3 21,3M3,21H11V15H1V19A2,2 0 0,0 3,21M3,7H1V9H3V7M15,19H13V21H15V19M19,3H17V5H19V3M19,19H17V21H19V19M3,3C2,3 1,4 1,5H3V3M3,11H1V13H3V11M11,3H9V5H11V3M7,3H5V5H7V3Z"
                />
              </svg>
          </div>
          Resize
        </li>
        <li>
          <div class="icon-box">
            <svg height="20" width="20" viewBox="0 0 24 24">
                <path
                  fill="grey"
                  d="M2,2H11V6H9V4H4V9H6V11H2V2M22,13V22H13V18H15V20H20V15H18V13H22M8,8H16V16H8V8Z"
                />
              </svg>
          </div>
          <div class="icon-box">
            <svg height="20" width="20" viewBox="0 0 24 24">
                <path
                  fill="grey"
                  d="M2,2H11V11H2V2M9,4H4V9H9V4M22,13V22H13V13H22M15,20H20V15H15V20M16,8V11H13V8H16M11,16H8V13H11V16Z"
                />
              </svg>
          </div>
          Send to front | back
        </li>
        <li>
          <div class="icon-box">
            <svg height="20" width="20" viewBox="0 0 24 24">
                <path
                  fill="grey"
                  d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
                />
              </svg>
          </div>
          Duplicate
        </li>
        <li>
          <div class="icon-box-round">
            <svg height="20" width="20" viewBox="0 0 24 24">
                <path
                  fill="white"
                  d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"
                />
              </svg>
          </div>
          <div class="icon-box-round">
            <svg height="20" width="20" viewBox="0 0 24 24">
                <path
                  fill="white"
                  d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"
                />
              </svg>
          </div>
          Undo | Redo
        </li>
        <li>
          <div class="icon-box">
            <svg height="20" width="20" viewBox="0 0 24 24">
                <path
                  fill="grey"
                  d="M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z"
                />
              </svg>
          </div>
          Save pdf
        </li>
      </ul>
      </section>

      <section id="props">
      <h2 class="righteous" ref="props"><img src="./assets/logo.png" height="20" class="chevron">Props</h2>
      <table>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>
            <code>
              buttonSize
            </code>
          </td>
          <td data-label="Type">
            <span class="green">
              Number
            </span>
          </td>
          <td data-label="Default ">
            <span class="dirtyGreen">
              28
            </span>
          </td>
          <td data-label="Description : ">
            Adjust the size of the toolbar buttons.
          </td>
        </tr>

        <tr>
          <td>
            <code>
              disableForTouchScreens
            </code>
          </td>
          <td data-label="Type ">
            <span class="green">
              Boolean
            </span>
          </td>
          <td data-label="Default ">
            <span class="blue">
              true
            </span>
          </td>
          <td data-label="Description : ">
            In its current version, <b style="color: rgb(200,100,100);">SvgAnnotator is not suited for touchscreen devices</b>, and best used with a mouse & keyboard. This prop hides the toolbar for touchscreen devices, basically deactivating the annotator.
          </td>
        </tr>

        <tr>
          <td>
            <code>
          fixedTools
            </code>
          </td>
          <td data-label="Type ">
            <span class="green">
              Boolean
            </span>
          </td>
          <td data-label="Default ">
            <span class="blue">
              false
            </span>
          </td>
          <td data-label="Description : ">
            Set to false by default, the toolbar is relative to the component. <b>Set to true to position the toolbar fixed top center of the page.</b> This is an ideal scenario if the svg-annotator wraps a whole page, in order to avoid having to scroll back to use the toolbar.
          </td>
        </tr>

        <tr>
          <td>
            <code>
              fontFamily
            </code>
          </td>
          <td data-label="Type ">
            <span class="green">
              String
            </span>
          </td>
          <td data-label="Default ">
            <span class="orange">
              Helvetica
            </span>
          </td>
          <td data-label="Description : ">
            It is recommended you pass your font into this prop. During the printing process, all fonts of the slotted content will be converted to Helvetica, as it is one of the fonts jspdf (used as a dependency to generate pdf) supports. After the process resumes, the fonts will be reset to the font family passed into this prop. <b style="color: rgb(200,100,100);">Not providing your font would make the content stay set to Helvetica after the printing resumes.</b>
          </td>
        </tr>

        <tr>
          <td>
            <code>
              iconColor
            </code>
          </td>
          <td data-label="Type ">
            <span class="green">
              String
            </span>
          </td>
          <td data-label="Default ">
            <span class="blue">
              #4a4a4a
            </span>
          </td>
          <td data-label="Description : ">
            Color of the button icons & button borders.
          </td>
        </tr>

        <tr>
          <td>
            <code>
              showPrint
            </code>
          </td>
          <td data-label="Type ">
            <span class="green">
              Boolean
            </span>
          </td>
          <td data-label="Default ">
            <span class="blue">
              true
            </span>
          </td>
          <td data-label="Description : ">
            Set to false to hide the print button in the toolbar and remove pdf generation capability.
          </td>
        </tr>

        <tr>
          <td>
            <code>
              showTooltips
            </code>
          </td>
          <td data-label="Type ">
            <span class="green">
              Boolean
            </span>
          </td>
          <td data-label="Default ">
            <span class="blue">
              true
            </span>
          </td>
          <td data-label="Description : ">
            Set to false to hide the tooltips of the toolbar's upper row buttons.
          </td>
        </tr>

        <tr>
          <td>
            <code>
              translations
            </code>
          </td>
          <td data-label="Type ">
            <span class="green">
              Object
            </span>
          </td>
          <td style="width:fit-content !important" data-label="Default ">
            <i>see description</i>
          </td>
          <td data-label="Description : ">
            You can provide your own translations for all labels and tooltips of the toolbar.<br>
            Default translations:<br>
            <code style="background: white;">
              { <br>
                &nbsp;&nbsp;autoOrientation: "auto print orientation",<br>
                &nbsp;&nbsp;color: "Color",<br>
                &nbsp;&nbsp;colorAlpha: "Color alpha",<br>
                &nbsp;&nbsp;dashedLines: "Dashed lines",<br>
                &nbsp;&nbsp;filled: "Filled",<br>
                &nbsp;&nbsp;fontSize: "Font size",<br>
                &nbsp;&nbsp;hdPrint: "hd print",<br>
                &nbsp;&nbsp;thickness: "Thickness",<br>
                &nbsp;&nbsp;title: "Annotations",<br>
                &nbsp;&nbsp;tooltipGroup: "Select & group",<br>
                &nbsp;&nbsp;tooltipDelete: "Delete",<br>
                &nbsp;&nbsp;tooltipMove: "Move",<br>
                &nbsp;&nbsp;tooltipResize: "Resize",<br>
                &nbsp;&nbsp;tooltipBringToFront: "Bring to front",<br>
                &nbsp;&nbsp;tooltipBringToBack: "Bring to back",<br>
                &nbsp;&nbsp;tooltipDuplicate: "Duplicate",<br>
                &nbsp;&nbsp;tooltipRedo: "Redo last shape",<br>
                &nbsp;&nbsp;tooltipUndo: "Undo last shape",<br>
                &nbsp;&nbsp;tooltipUngroup: "Ungroup",<br>
                &nbsp;&nbsp;tooltipPdf: "Save pdf"<br>
              }
            </code>
          </td>
        </tr>
        </tbody>
        
      </table>
      </section>

      <section id="events">
        <h2 class="righteous" ref="events"><img src="./assets/logo.png" height="20" class="chevron">Events</h2>
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Returns</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>
                  @toggleOpenState
                </code>
              </td>
              <td data-label="Returns ">
                <b>boolean</b>
              </td>
              <td data-label="Description : ">
                Emits <span class="blue">true</span> when the toolbar is open, and <span class="blue">false</span> when it is closed. On load, the toolbar is closed, to keep user-interactions focused on your content. Listening to its open | closed state allows you to manage your UI conditionally. For example, perhaps you want to display specific information when it is open; or hide some elements from the page.<br><br>
                Usage:<br><br>
                <code>
                  &#x3c;template&#x3e;<br>
                  &nbsp;&nbsp;&#x3c;SvgAnnotator @toggleOpenState="myFunction" &#x3e;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&#x3c;div&#x3e;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x3c;h1&#x3e;My chart&#x3c;/h1&#x3e;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x3c;chart /&#x3e;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&#x3c;/div&#x3e;<br>
                  &nbsp;&nbsp;&#x3c;/SvgAnnotator&#x3e;<br>
                  &#x3c;/template&#x3e;<br><br>
                  &#x3c;script&#x3e;<br>
                  ...<br>
                  methods: {<br>
                  &nbsp;&nbsp;myFunction(isOpen) {<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;...<br>
                  &nbsp;&nbsp;}<br>
                  }<br>
                  &#x3c;/script&#x3e;
                </code>
              </td>
            </tr>

            <tr>
              <td>
                <code>
                  @interface
                </code>
              </td>
              <td data-label="Interface">
                <b>Object</b>
              </td>
              <td data-label="Description : ">
                @interface exposes some methods of the svg-annotator you can call from the parent (from version 0.3.7 onwards)<br><br>
                Usage: <br><br>
                <code>
                  &#x3c;template&#x3e;<br>
                  &nbsp;&nbsp;&#x3c;div&#x3e;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&#x3c;button @click="resetAnnotator"&#x3e;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reset<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&#x3c;/button&#x3e;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&#x3c;SvgAnnotator @interface="getInterface" &#x3e;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x3c;div&#x3e;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x3c;h1&#x3e;My chart&#x3c;/h1&#x3e;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x3c;chart /&#x3e;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x3c;/div&#x3e;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&#x3c;/SvgAnnotator&#x3e;<br>
                  &nbsp;&nbsp;&#x3c;/div&#x3e;<br>
                  &#x3c;/template&#x3e;<br><br>
                  &#x3c;script&#x3e;<br>
                  export default {<br>
                  &nbsp;&nbsp; data(){<br>
                  &nbsp;&nbsp; &nbsp;&nbsp; return {<br>
                  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; annotatorInterface: {<br>
                  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; reset: () => {}<br>
                  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                  &nbsp;&nbsp; &nbsp;&nbsp;}<br>
                  &nbsp;&nbsp; },<br>
                  &nbsp;&nbsp; methods: {<br>
                  &nbsp;&nbsp; &nbsp;&nbsp;getInterface(payload) {<br>
                  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;this.$options.annotatorInterface = payload;<br>
                  &nbsp;&nbsp; &nbsp;&nbsp;},<br>
                  &nbsp;&nbsp; &nbsp;&nbsp;resetAnnotator() {<br>
                  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;this.$options.annotatorInterface.reset();<br>
                  &nbsp;&nbsp; &nbsp;&nbsp;}<br>
                  &nbsp;&nbsp; }<br>
                  }<br>
                  &#x3c;/script&#x3e;
                </code>
                
              </td>
            </tr>
          </tbody>
          
        </table>
      </section>

      <section id="caveats">
      <h2 class="righteous" ref="caveats"><img src="./assets/logo.png" height="20" class="chevron">Caveats</h2>
      <ul>
        <li>
          Moving a shape too quickly can make the pointer leave the current shape and focus on another shape.
        </li>
        <li>
          While the menu is open, the drawing area is above the content that was placed in the slot. User interaction with the slotted content is not possible, as all interactions will concern the SvgAnnotator.
        </li>
        <li>
          During the pdf generation, all fonts will be converted to 'Helvetica', which is one of the default fonts supported by jspdf. Not providing your font in the prop 'fontFamily' will cause content to remain with 'Helvetica' after the pdf generation resumes.
        </li>
        <li>
          If the group they were part of was moved, ungrouping elements will respawn them on their original x,y coordinates.
        </li>
      </ul>
      </section>

      <section id="vue3">
      <h2 class="righteous" ref="vue3"><img src="./assets/logo.png" height="20" class="chevron">Vue 3 support</h2>
      <p>
        A package for Vue 3 is in progress. Meanwhile, you can grab the <a href="https://github.com/graphieros/svg-annotator/blob/master/src/components/SvgAnnotator.vue" target="_blank">Vue2 component</a> directly from the repository and use it in your Vue3 project, as Vue2 components are supported in Vue3.
      </p>
      </section>
    </div>

    <footer>
      <a href="https://github.com/graphieros" target="_blank">
      Alec Lloyd Probert  - {{ new Date().getFullYear() }}
      </a>
    </footer>
  </div>
</template>

<script>
import SvgAnnotator from './components/SvgAnnotator.vue';

export default {
  name: 'App',
  components: {
    SvgAnnotator
  },
  data() {
    return {
      currentScroll: undefined,
      isOpen: false,
      isTouchScreen: false,
      observer: null,
      resetInterface: {
        reset: () => {}
      }
    }
  },
  mounted() {
    this.isTouchScreen = (function IIFE () {
      return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
    })();
    
    window.addEventListener("scroll", this.checkMenuVisibility);
  },
  destroyed(){
    window.removeEventListener("scroll", this.checkMenuVisibility);
  },
  methods: {
    getAnnotatorInterface(payload){
      this.$options.resetInterface = payload;
    },
    resetAnnotator(){
      this.$options.resetInterface.reset();
    },
    checkMenuVisibility(){
      if(this.isVisible(this.getElement('setup'))){
        this.currentScroll = 'setup';
      }else if(this.isVisible(this.getElement('functionalities'))){
        this.currentScroll = 'functionalities';
      }else if(this.isVisible(this.getElement('props'))){
        this.currentScroll = 'props';
      }else if(this.isVisible(this.getElement('events'))){
        this.currentScroll = 'events';
      }else if(this.isVisible(this.getElement('caveats'))){
        this.currentScroll = 'caveats';
      }else if(this.isVisible(this.getElement('vue3'))){
        this.currentScroll = 'vue3';
      }else {
        this.currentScroll = undefined;
      }
    },
    isVisible(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    },
    getElement(el){
      if(!this.$refs[el]){
        return null;
      }
      return this.$refs[el];
    },
    toggleAnnotator(isOpen) {
      this.isOpen = isOpen;
    }
  }
}
</script>

<style>
body {
  background: radial-gradient(at top right, white, rgba(0,0,0,0.1));
  color: #4A4A4A;
}
</style>

<style lang="scss" scoped>
*{
  font-family: Helvetica;
}
.chevron {
  transform: rotate(-90deg);
  margin-right: 6px;
  margin-bottom: -2px;
}
.app-title {
  width: 100%;
  text-align:center;
}
header {
  position: fixed;
  width:100%;
  top:0;
  left:0;
  z-index:10000000000;
}
h1 {
  background: #4A4A4A;
  color: white;
  margin:0 auto;
  text-align:center;
  padding: 12px 0;
}
.righteous {
  font-family: 'Righteous', cursive;
}
.icon-box,
.icon-box-round {
  height: 24px;
  width: 24px;
  display: flex;
  align-items:center;
  justify-content:center;
  border: 1px solid #4A4A4A;
  margin-right: 6px;
}
.icon-box {
  background: white;
  border-radius: 4px;
}
.icon-box-round {
  background: grey;
  border-radius: 50%;
}
code {
  font-family: 'Courier New', Courier, monospace;
  background: rgb(218, 218, 218);
  padding: 12px;
  display:flex;
  width: fit-content;
  font-weight: bold;
  border-radius: 4px;
}
li {
  display: flex;
  align-items:center;
  padding: 3px 0;
}
.menu {
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
  flex:1;
  background: grey;
  a {
    text-decoration: none;
    color:white;
    text-align:center;
    width: 100%;
    padding: 12px 0;
    &:hover {
      background: rgb(100, 100, 100);
    }
  }
  a.selected {
    background: rgb(100, 100, 100);
  }
  
  &__wrapper {
    border-bottom: 1px solid rgb(206, 206, 206);
    margin-bottom: 24px;
  }
}
.properties {
  &__item {
    display: flex;
    gap: 24px;
    
  }
}
footer {
  display: flex;
  align-items:center;
  justify-content:center;
  padding: 24px 0;
}
.blue,
.green,
.orange,
.dirtyGreen {
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
}
.blue {
  color: rgb(12, 53, 100);
}
.dirtyGreen {
  color: rgb(91, 150, 44);
}
.green {
  color: green;
}
.orange {
  color: rgb(145, 105, 32);
}
table {
  border: 1px solid grey;
  border-radius: 4px;
  padding: 12px;
  background: white;

}
td {
  padding: 12px;
}
tr {
  border:1px solid grey;
}
th {
  background: rgb(241, 241, 241);
  padding: 6px 0;
}
.code {
  font-family: 'Courier New', Courier, monospace
}
p.functionalities {
  padding: 0 24px;
  max-width: 80ch;
}
section {
  padding-top: 92px;
}
footer {
  background: white;
}
@media (max-width: 700px){
  table thead {
  display: none;
  background: red;
  }

  table tr{
  display: block;
  margin-bottom: 40px;
  }

  table td {
  display: block;

  }

  table td:before {
  content: attr(data-label) ' ' ' ㅤ ';
  float: left;
  font-weight: bold;
  }
}
</style>