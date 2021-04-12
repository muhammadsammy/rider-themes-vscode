import {IColorSet} from "@moxer/vscode-theme-generator";

const theme = {
  name: "resharper-dark",
  type: "dark",
  ui: {
    uiText: "#B1ADAD",
  },
  colors: {
    comment: "#57A64A",
    background: "#1E1E1E",
    foreground: "#DCDCDC",

    blue: "#569CD6",
    orange: "#D69D85",
    darkOrange: "#E07A00",
    green: "#00FFFF",
    lightGreen: "#B5CEA8",
    cyan: "#ADD8E6",
    violet: "#DDA0DD",
    magenta: "#EE82EE",

    yellow: "#F5D86A",
    red: "#FF5647",
  },
};

export default theme;

export const resharperColorSet: IColorSet = {
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
    class: theme.colors.cyan,
    function: theme.colors.green,
    functionCall: theme.colors.green,
    identifier: theme.colors.violet,
    boolean: theme.colors.violet,
    keyword: theme.colors.blue,
    otherKeyword: theme.colors.blue,
    string: theme.colors.orange,
    stringEscape: theme.colors.darkOrange,
    punctuation: theme.colors.foreground,
    variable: theme.colors.foreground,
    number: theme.colors.lightGreen,
  },

  workbench: {
    "editorError.foreground": theme.colors.red,
    "editorWarning.foreground": theme.colors.yellow,
    "activityBar.foreground": "#D0D0D0",
    "activityBar.border": "#353535",
    "editorLineNumber.foreground": "#2B91AF",
    "editorLineNumber.activeForeground": "#A4A3A3",
    "sideBar.border": "#2d2d2d",
    "statusBar.foreground": theme.colors.foreground,
    "editorGroupHeader.tabsBorder": "#2d2d2d",
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
      ],
      settings: {
        foreground: "#E8BF6A",
      },
    },
    {
      name: "JSX, HTML attribute names",
      scope: ["entity.other.attribute-name.tsx", "meta.tag.attributes.tsx"],
      settings: {
        foreground: theme.colors.foreground,
      },
    },
    {
      name: "C# namespaces",
      scope: [
        "entity.name.type.namespace.cs",
        "entity.name.type.interface",
        "entity.name.type",
      ],
      settings: {
        foreground: theme.colors.cyan,
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
        foreground: theme.colors.magenta,
      },
    },
    {
      name: "Constants",
      scope: ["variable.other.constant"],
      settings: {
        foreground: theme.colors.magenta,
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
      name: "C# doc comment tags",
      scope: ["comment.documentation.name"],
      settings: {
        foreground: theme.colors.foreground,
      },
    },
    {
      name: "C# doc comment attribute names",
      scope: ["comment.documentation.attribute.name"],
      settings: {
        foreground: "#A3A3A3",
      },
    },
    {
      name: "C# doc comment attribute values",
      scope: ["comment.documentation.attribute.value"],
      settings: {
        foreground: theme.colors.orange,
      },
    },
  ],
};
