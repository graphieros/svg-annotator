# svg-annotator
A vue2 component you can use to wrap any content to enable on-the-go annotations and pdf generation.

Features:
. create shapes (rectangle, circle, arrow)
. freehand drawing
. add text (includes bullet points mode)
. select, move, resize, copy paste, delete, redo shapes
. select and group shapes in one single action
. save to pdf (uses html2canvas & jspdf as dependencies)

## Project setup
```
npm i svg-annotator
```
## Documentation
[Full documentation](https://svg-annotator.graphieros.com/)

## Implementation
```
import SvgAnnotator from "svg-annotator";
```

You need to place a single element inside the SvgAnnotator (div, section, svg or canvas), as the SvgAnnotator will base its size upon the first slotted element. This element and all its children will be part of the annotation area.

If your content contains multiple elements, place them inside a single div, section, svg or canvas element:

```
<SvgAnnotator>
    <div>
        ... any content you want
    </div>
</SvgAnnotator>

<SvgAnnotator>
    <section>
        ... any content you want
    </section>
</SvgAnnotator>

<SvgAnnotator>
    <svg>
        ... any content you want
    </svg>
</SvgAnnotator>

<SvgAnnotator>
    <canvas>
    </canvas>
</SvgAnnotator>

```

## Props
```
   buttonSize: {
      // the toolbar buttons size
      type: Number,
      default: 28,
   },
   disableForTouchScreens: {
      //In its current version, SvgAnnotator is not suited for touchscreen devices, and best used with a mouse & keyboard. This prop hides the toolbar for touchscreen devices, basically deactivating the annotator
      type: Boolean,
      default: true,
   },
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
      // Show or hide the print button in the toolbox
      type: Boolean,
      default: true,
    },
    showTooltips: {
      // Show tooltips for top buttons of toolbox
      type: Boolean,
      default: true,
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
          tooltipGroup: "Select & group",
          tooltipDelete: "Delete",
          tooltipMove: "Move",
          tooltipResize: "Resize",
          tooltipBringToFront: "Bring to front",
          tooltipBringToBack: "Bring to back",
          tooltipDuplicate: "Duplicate",
          tooltipRedo: "Redo last shape",
          tooltipUndo: "Undo last shape",
          tooltipPdf: "Save pdf"
        };
      },
    },
```

## Events
```
@toggleOpenState returns true if the toolbar is open, and false if it is closed.
```

## Caveats

- Moving a shape too quickly can make the pointer leave the current shape and focus on another shape.<br>
- While the menu is open, the drawing area is above the content that was placed in the slot. User interaction with the slotted content is not possible, as all interactions will concern the SvgAnnotator.<br>
- When the menu is closed, the slotted content pops back to the top layer, to restore user interaction to your content. However, all annotations will appear below your content. You can set the prop 'hideWhenFolded' to true to hide annotations when the menu is closed.<br>
- During the pdf generation, all fonts will be converted to 'Helvetica', which is one of the default fonts supported by jspdf. Not providing your font in the prop 'fontFamily' will cause content to remain with 'Helvetica' after the pdf generation resumes.

