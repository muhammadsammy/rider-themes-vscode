import * as fs from "fs-extra";
import * as path from "path"; // Tslint:disable-next-line: no-submodule-imports
import {generateTheme, IColorSet} from "@moxer/vscode-theme-generator";
import riderDark from "./themes/rider-dark";
import riderLight from "./themes/rider-light";
import resharperDark, {resharperColorSet} from "./themes/resharper-dark";

const buildPath: string = path.join(__dirname, "../build");
const themes = [riderDark, riderLight, resharperDark];

// Check if the build folder exist. If not, create it.
if (!fs.existsSync(buildPath)) {
  fs.mkdirSync(buildPath);
}

themes.forEach(theme => {
  const isLight = theme.name.includes("light");
  const isResharperDark = theme.name === "resharper-dark";

  let colorSet: IColorSet;

  if (isResharperDark) {
    colorSet = resharperColorSet;
  } else {
    colorSet = {
      semanticHighlighting: true,

      base: {
        // Determines the overall text foreground color
        foreground: theme.colors.foreground,
        // Determines the overall background color
        background: theme.colors.background,
        // Determines boolean, identifier, keyword, storage, and cssClass
        color1: theme.colors.blue,
        // Determines string, stringEscape, and cssId
        color2: theme.colors.orange,
        // Determines function, class, classMember, type, and cssTag
        color3: theme.colors.green,
        // Determines functionCall and number
        color4: theme.colors.green,
      },

      syntax: {
        comment: theme.colors.comment,
        class: theme.colors.magenta,
        function: theme.colors.green,
        functionCall: theme.colors.green,
        identifier: theme.colors.foreground,
        boolean: theme.colors.violet,
        keyword: theme.colors.blue,
        otherKeyword: theme.colors.blue,
        string: theme.colors.orange,
        stringEscape: theme.colors.red,
        punctuation: theme.colors.foreground,
        variable: theme.colors.foreground,
        number: theme.colors.violet,
      },

      workbench: {
        "editorError.foreground": theme.colors.red,
        "editorWarning.foreground": theme.colors.yellow,
        "activityBar.foreground": isLight ? "#202020" : "#D0D0D0",
        "activityBar.border": isLight ? "#D0D0D0" : "#353535",
        "editorLineNumber.foreground": isLight ? "#202020" : "#D0D0D0",
        "sideBar.border": isLight ? "#D0D0D0" : "#2d2d2d",
        "statusBar.foreground": isLight ? "#2d2d2d" : theme.colors.foreground,
        "editorGroupHeader.tabsBorder": isLight ? "#D0D0D0" : "#2d2d2d",
      },

      customTokens: [
        {
          name: "string quotes",
          scope: "punctuation.definition.string",
          settings: {
            foreground: theme.colors.orange,
          },
        },
        {
          name: "JSX, HTML Tags",
          scope: [
            "meta.tag",
            "entity.name.tag",
            "support.class.component",
            "punctuation.definition.tag.begin",
            "punctuation.definition.tag.end",
            "entity.name.type", // TS Types
          ],
          settings: {
            foreground: theme.colors.magenta,
          },
        },
        {
          name: "JSX, HTML attribute names",
          scope: ["entity.other.attribute-name.tsx", "meta.tag.attributes.tsx"],
          settings: {
            foreground: theme.colors.comment,
          },
        },
        {
          name: "C# namespaces",
          scope: [
            "entity.name.type.namespace.cs",
            "entity.name.type.interface",
          ],
          settings: {
            foreground: theme.colors.magenta,
          },
        },
        {
          name: "Properties and fields",
          scope: [
            "variable.other.property",
            "entity.name.variable.field",
            "meta.object-literal.key",
          ],
          settings: {
            foreground: theme.colors.cyan,
          },
        },
        {
          name: "Constants",
          scope: ["variable.other.constant"],
          settings: {
            foreground: theme.colors.cyan,
            fontStyle: "bold",
          },
        },
        {
          name: "Variables",
          scope: [
            "entity.name.variable",
            "entity.other.attribute-name",
            "keyword.operator",
          ],
          settings: {
            foreground: theme.colors.foreground,
          },
        },
        {
          name: "C# doc comment tags and attribute names",
          scope: [
            "comment.documentation.name",
            "comment.documentation.attribute.name",
          ],
          settings: {
            foreground: "#487D34",
          },
        },
        {
          name: "C# doc comment tags and attribute names",
          scope: ["comment.documentation.attribute.value"],
          settings: {
            foreground: theme.colors.orange,
          },
        },
      ],
    };
  }

  generateTheme(
    theme.name,
    colorSet,
    path.join(__dirname, `../build/${theme.name}.json`),
  );

  return;
});
