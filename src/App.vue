<template>
  <div id="app">
    <h1>
      SVG Annotator for Vue 2
    </h1>
    <p>
      <b>
        On-the-go client side content annotation & pdf generation
      </b>
       <br>
        (not suited for touchscreen only devices)
    </p>
      <code>npm i svg-annotator</code>
    <nav class="menu menu__wrapper">
      <div class="menu menu__item">
        <a href="#setup">
          Setup
        </a>
      </div>
      <div class="menu menu__item">
        <a href="#functionalities">
          Functionalities
        </a>
      </div>
      <div class="menu menu__item">
        <a href="#props">
          Props
        </a>
      </div>
      <div class="menu menu__item">
        <a href="#events">
          Events
        </a>
      </div>
      <div class="menu menu__item">
        <a href="#caveats">
          Caveats
        </a>
      </div>
      <div class="menu menu__item">
        <a href="#vue3">
          Vue3 support
        </a>
      </div>
    </nav>
    <SvgAnnotator showPrint>
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

    <section id="setup">
      <h2>Setup</h2>
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
     <h2>Functionalities</h2>

     <h4>Draw shapes</h4>
     <p class="functionalities">
      Available shapes:
      <ul>
        <li>
          Circle
        </li>
        <li>
          Rectangle
        </li>
        <li>
          Arrow
        </li>
        <li>
          Freehand drawing
        </li>
        <li>
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
          Bullet points mode
        </li>
        <li>
          Text alignment (left, center, right)
        </li>
        <li>
          Text style (bold, italic, underlined)
        </li>
      </ul>
     </p>

     <h4>Controls</h4>
     <ul>
      <li>
        Select and group in one action
      </li>
      <li>
        Ungroup
      </li>
      <li>
        Delete
      </li>
      <li>
        Move
      </li>
      <li>
        Resize
      </li>
      <li>
        Send to front | back
      </li>
      <li>
        Duplicate
      </li>
      <li>
        Undo | Redo
      </li>
      <li>
        Save pdf
      </li>
     </ul>
    </section>

    <section id="props">
    <h2>Props</h2>
    <table>
      <tr>
        <th>Prop</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>

      <tr>
        <td>
          <code>
            buttonSize
          </code>
        </td>
        <td>
          <span class="green">
            Number
          </span>
        </td>
        <td>
          <span class="dirtyGreen">
            28
          </span>
        </td>
        <td>
           Adjust the size of the toolbar buttons.
        </td>
      </tr>

      <tr>
        <td>
          <code>
            disableForTouchScreens
          </code>
        </td>
        <td>
          <span class="green">
            Boolean
          </span>
        </td>
        <td>
          <span class="blue">
            true
          </span>
        </td>
        <td>
           In its current version, <b style="color: rgb(200,100,100);">SvgAnnotator is not suited for touchscreen devices</b>, and best used with a mouse & keyboard. This prop hides the toolbar for touchscreen devices, basically deactivating the annotator.
        </td>
      </tr>

      <tr>
        <td>
          <code>
        fixedTools
          </code>
        </td>
        <td>
          <span class="green">
            Boolean
          </span>
        </td>
        <td>
          <span class="blue">
            false
          </span>
        </td>
        <td>
           Set to false by default, the toolbar is relative to the component. <b>Set to true to position the toolbar fixed top center of the page.</b> This is an ideal scenario if the svg-annotator wraps a whole page, in order to avoid having to scroll back to use the toolbar.
        </td>
      </tr>

      <tr>
        <td>
          <code>
            fontFamily
          </code>
        </td>
        <td>
          <span class="green">
            String
          </span>
        </td>
        <td>
          <span class="orange">
            Helvetica
          </span>
        </td>
        <td>
           It is recommended you pass your font into this prop. During the printing process, all fonts of the slotted content will be converted to Helvetica, as it is one of the fonts jspdf (used as a dependency to generate pdf) supports. After the process resumes, the fonts will be reset to the font family passed into this prop. <b style="color: rgb(200,100,100);">Not providing your font would make the content stay set to Helvetica after the printing resumes.</b>
        </td>
      </tr>

      <tr>
        <td>
          <code>
            hiddenWhenFolded
          </code>
        </td>
        <td>
          <span class="green">
            Boolean
          </span>
        </td>
        <td>
          <span class="blue">
            false
          </span>
        </td>
        <td>
           When the toolbar is open, the annotating area is placed on top of the content, to allow user interaction with the svg-annotator. However, when the toolbar is reduced, the content gets placed back on top, to allow user interaction with the original content. In this case, annotations will appear below the content. To avoid cases where this would be weird, <b>set this prop to true to hide the annotations when the toolbar is closed.</b>
        </td>
      </tr>

      <tr>
        <td>
          <code>
            iconColor
          </code>
        </td>
        <td>
          <span class="green">
            String
          </span>
        </td>
        <td>
          <span class="blue">
            #4a4a4a
          </span>
        </td>
        <td>
           Color of the button icons & button borders.
        </td>
      </tr>

      <tr>
        <td>
          <code>
            showPrint
          </code>
        </td>
        <td>
          <span class="green">
            Boolean
          </span>
        </td>
        <td>
          <span class="blue">
            true
          </span>
        </td>
        <td>
           Set to false to hide the print button in the toolbar and remove pdf generation capability.
        </td>
      </tr>

      <tr>
        <td>
          <code>
            showTooltips
          </code>
        </td>
        <td>
          <span class="green">
            Boolean
          </span>
        </td>
        <td>
          <span class="blue">
            true
          </span>
        </td>
        <td>
           Set to false to hide the tooltips of the toolbar's upper row buttons.
        </td>
      </tr>

      <tr>
        <td>
          <code>
            translations
          </code>
        </td>
        <td>
          <span class="green">
            Object
          </span>
        </td>
        <td style="width:fit-content !important">
          <i>see description</i>
        </td>
        <td>
           You can provide your own translations for all labels and tooltips of the toolbar.<br>
           Default translations:<br>
           <code style="background: white;">
            { <br>
              &nbsp;&nbsp;color: "Color",<br>
              &nbsp;&nbsp;colorAlpha: "Color alpha",<br>
              &nbsp;&nbsp;dashedLines: "Dashed lines",<br>
              &nbsp;&nbsp;filled: "Filled",<br>
              &nbsp;&nbsp;fontSize: "Font size",<br>
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
    </table>
    </section>

    <section id="events">
      <h2>Events</h2>
      <table>
        <tr>
          <th>Event</th>
          <th>Returns</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>
            <code>
              @toggleOpenState
            </code>
          </td>
          <td>
            <b>boolean</b>
          </td>
          <td>
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
      </table>
    </section>

    <section id="caveats">
     <h2>Caveats</h2>
     <ul>
      <li>
        Moving a shape too quickly can make the pointer leave the current shape and focus on another shape.
      </li>
      <li>
        While the menu is open, the drawing area is above the content that was placed in the slot. User interaction with the slotted content is not possible, as all interactions will concern the SvgAnnotator.
      </li>
      <li>
        When the menu is closed, the slotted content pops back to the top layer, to restore user interaction to your content. However, all annotations will appear below your content. You can set the prop 'hideWhenFolded' to true to hide annotations when the menu is closed.
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
     <h2>Vue 3 support</h2>
     <p>
      A package for Vue 3 is in progress. Meanwhile, you can grab the <a href="https://github.com/graphieros/svg-annotator/blob/master/src/components/SvgAnnotator.vue" target="_blank">Vue2 component</a> directly from the repository and use it in your Vue3 project, as Vue2 components are supported in Vue3.
     </p>
    </section>

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
      isOpen: false,
      isTouchScreen: false,
    }
  },
  mounted() {
    this.isTouchScreen = (function IIFE () {
      return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
    })()
  },
  methods: {
    toggleAnnotator(isOpen) {
      this.isOpen = isOpen;
    }
  }
}
</script>

<style lang="scss" scoped>
*{
  font-family: Helvetica;
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
.menu {
  position: sticky;
  top:0;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content:center;
  gap: 24px;
  padding: 6px 0;
  background: white;
  z-index:10000000000;
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
  padding-top: 48px;
}
</style>