# svg-annotator
A vue2 component you can use to wrap any content to enable on-the-go annotations and pdf generation.

Features:
. create shapes (rectangle, circle, arrow)
. freehand drawing
. add text (includes bullet points mode)
. select, move, resize, copy paste, delete shapes
. save to pdf (uses html2canvas & jspdf as dependencies)

## Project setup
```
npm i svg-annotator
```

## Implementation
```
import SvgAnnotator from "svg-annotator";

add in your template, wrap the element to be annotated with the SvgAnnotator.
You need to place a single element inside (div, section, or svg), as the SvgAnnotator will base its size upon the first slotted element.

<SvgAnnotator>
    <div>
        ... any content you want
    </div>
</SvgAnnotator>
```

## Props
```
   fixedTools: {
      // if true, toolbox will be fixed to top center of your page. 
      // Ideal to use when a whole page is slotted inside the SvgAnnotator.
      type: Boolean,
      default: false,
    },
    fontFamily: {
      // The font family your slotted elements are using. 
      // In print mode, all fonts will be converted to Helvetica, so you need to provide your font here, to revert to it after print is resumed.
      type: String,
      default: "Helvetica",
    },
    hideWhenFolded: {
      // Hide annotations when the toolbox is closed.
      type: Boolean,
      default: false,
    },
    showPrint: {
      // Show the print button in the toolbox
      type: Boolean,
      default: false,
    },
    translations: {
      // Translations for all labels used in the toolbox
      type: Object,
      default() {
        return {
          color: "Color",
          colorAlpha: "Color alpha",
          dashedLines: "Dashed lines",
          filled: "Filled",
          fontSize: "Font size",
          thickness: "Thickness",
          title: "Annotations",
        };
      },
    },
```
