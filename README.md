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
      type: Boolean,
      default: false,
    },
    fontFamily: {
      type: String,
      default: "Helvetica",
    },
    hideWhenFolded: {
      type: Boolean,
      default: false,
    },
    showPrint: {
      type: Boolean,
      default: false,
    },
    translations: {
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
