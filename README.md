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

<!-- If your content contains multiple elements, place them inside a single div or section -->
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

## Caveats

- Moving a shape too quickly can make the pointer leave the current shape and focus on another shape.<br>
- While the menu is open, the drawing area is above the content that was placed in the slot. User interaction with the slotted content is not possible, as all interactions will concern the SvgAnnotator.<br>
- When the menu is closed, the slotted content pops back to the top layer, to restore user interaction to your content. However, all annotations will appear below your content. You can set the prop 'hideWhenFolded' to true to hide annotations when the menu is closed.<br>
- During the pdf generation, all fonts will be converted to 'Helvetica', which is one of the default fonts supported by jspdf. Not providing your font in the prop 'fontFamily' will cause content to remain with 'Helvetica' after the pdf generation resumes.

