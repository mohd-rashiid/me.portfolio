
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/rashidd/Documents/Me/Portfilio/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/rashidd/Documents/Me/Portfilio/src/pages/404.js")),
  "component---src-pages-archive-js": preferDefault(require("/home/rashidd/Documents/Me/Portfilio/src/pages/archive.js")),
  "component---src-pages-index-js": preferDefault(require("/home/rashidd/Documents/Me/Portfilio/src/pages/index.js")),
  "component---src-pages-pensieve-index-js": preferDefault(require("/home/rashidd/Documents/Me/Portfilio/src/pages/pensieve/index.js")),
  "component---src-pages-pensieve-tags-js": preferDefault(require("/home/rashidd/Documents/Me/Portfilio/src/pages/pensieve/tags.js")),
  "component---src-templates-post-js": preferDefault(require("/home/rashidd/Documents/Me/Portfilio/src/templates/post.js")),
  "component---src-templates-tag-js": preferDefault(require("/home/rashidd/Documents/Me/Portfilio/src/templates/tag.js"))
}

