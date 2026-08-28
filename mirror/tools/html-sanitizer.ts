import sanitizeHtml from "sanitize-html";

const length = /^\d+(?:\.\d+)?(?:px|%|em|rem|vh|vw)?$/i;
const box =
  /^(?:auto|0|\d+(?:\.\d+)?(?:px|%|em|rem))(?:\s+(?:auto|0|\d+(?:\.\d+)?(?:px|%|em|rem))){0,3}$/i;

const compactMediaUrl = (value: string | undefined): string | undefined => {
  if (!value || value.startsWith("data:")) return undefined;
  const compact = value.replace(/\s+/g, "");
  // Literal placeholders in syntax examples are not media URLs and must not
  // trigger requests such as /bots/api/url in the rendered mirror.
  if (/^(?:PHOTO|VIDEO|SMALL|url|X+|Y+|Z+)$/i.test(compact)) return undefined;
  return compact;
};

const allowedTags = [
  ...sanitizeHtml.defaults.allowedTags,
  "center",
  "del",
  "h1",
  "h2",
  "img",
  "mark",
  "picture",
  "s",
  "source",
  "video",
];

/**
 * Sanitizes an untrusted upstream article while preserving documentation,
 * tables and Telegram blog media. Interactive controls are intentionally not
 * allowed: a static mirror cannot safely or usefully reproduce their behavior.
 */
export function sanitizeUpstreamHtml(input: string): string {
  return sanitizeHtml(input, {
    allowedTags,
    allowedAttributes: {
      "*": [
        "aria-*",
        "class",
        "data-*",
        "dir",
        "id",
        "lang",
        "role",
        "style",
        "title",
      ],
      a: ["href", "name", "rel", "target"],
      img: [
        "alt",
        "decoding",
        "height",
        "loading",
        "sizes",
        "src",
        "srcset",
        "width",
      ],
      source: ["media", "sizes", "src", "srcset", "type"],
      td: ["align", "colspan", "rowspan"],
      th: ["align", "colspan", "rowspan", "scope"],
      time: ["datetime"],
      video: [
        "alt",
        "autoplay",
        "controls",
        "height",
        "loop",
        "muted",
        "playsinline",
        "poster",
        "preload",
        "src",
        "width",
      ],
    },
    allowedSchemes: ["http", "https", "mailto", "tel", "tg"],
    allowedSchemesByTag: {
      img: ["http", "https"],
      source: ["http", "https"],
      video: ["http", "https"],
    },
    allowProtocolRelative: true,
    allowedStyles: {
      "*": {
        display: [/^(?:block|inline|inline-block|none)$/i],
        float: [/^(?:left|right|none)$/i],
        "font-size": [length],
        "font-weight": [/^(?:normal|bold|[1-9]00)$/i],
        height: [length],
        "line-height": [/^(?:normal|\d+(?:\.\d+)?(?:px|%|em|rem)?)$/i],
        margin: [box],
        "margin-bottom": [box],
        "margin-left": [box],
        "margin-right": [box],
        "margin-top": [box],
        "max-height": [length],
        "max-width": [length],
        padding: [box],
        "padding-bottom": [box],
        "padding-left": [box],
        "padding-right": [box],
        "padding-top": [box],
        "text-align": [/^(?:left|right|center|justify)$/i],
        width: [length],
      },
    },
    disallowedTagsMode: "discard",
    exclusiveFilter: (frame) => {
      const empty =
        frame.text.replace(/\u00a0/g, "").trim() === "" &&
        frame.mediaChildren.length === 0;
      if (frame.tag === "p") return empty;
      if (frame.tag === "a")
        return empty && !frame.attribs.id && !frame.attribs.name;
      return false;
    },
    enforceHtmlBoundary: true,
    parseStyleAttributes: true,
    transformTags: {
      a: (tagName, attributes) => {
        if (attributes.target === "_blank") {
          const rel = new Set(
            (attributes.rel || "").split(/\s+/).filter(Boolean),
          );
          rel.add("noopener");
          rel.add("noreferrer");
          attributes.rel = [...rel].sort().join(" ");
        }
        return { tagName, attribs: attributes };
      },
      img: (tagName, attributes) => {
        const src = compactMediaUrl(attributes.src);
        if (src) attributes.src = src;
        else delete attributes.src;
        return { tagName, attribs: attributes };
      },
      source: (tagName, attributes) => {
        const src = compactMediaUrl(attributes.src);
        if (src) attributes.src = src;
        else delete attributes.src;
        return { tagName, attribs: attributes };
      },
      video: (tagName, attributes) => {
        const src = compactMediaUrl(attributes.src);
        const poster = compactMediaUrl(attributes.poster);
        if (src) attributes.src = src;
        else delete attributes.src;
        if (poster) attributes.poster = poster;
        else delete attributes.poster;
        return { tagName, attribs: attributes };
      },
    },
  });
}
