import { e as escape_html } from "./escaping.js";
import "clsx";
import { N as NO_TRANSLATE_ATTRIBUTE } from "./constants.js";
import { Q as setContext, $ as getContext } from "./index.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
const PARAGLIDE_CONTEXT_KEY = {};
const getParaglideContext = () => {
  return (
    /** @type { ParaglideContext<T> | undefined}*/
    getContext(PARAGLIDE_CONTEXT_KEY)
  );
};
const setParaglideContext = (context) => {
  setContext(PARAGLIDE_CONTEXT_KEY, context);
};
function getTranslationFunctions() {
  const ctx = getParaglideContext();
  function translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!ctx) return value;
    return ctx.translateHref(value, lang_value);
  }
  function handleAttributes(attrs, attribute_translations) {
    if (attrs[NO_TRANSLATE_ATTRIBUTE]) return attrs;
    for (const { attribute_name, lang_attribute_name } of attribute_translations) {
      if (attribute_name in attrs) {
        const attr2 = attrs[attribute_name];
        const lang_attr = lang_attribute_name ? attrs[lang_attribute_name] : void 0;
        attrs[attribute_name] = translateAttribute(
          attr2,
          typeof lang_attr === "string" ? lang_attr : void 0
        );
      }
    }
    return attrs;
  }
  return [translateAttribute, handleAttributes];
}
export {
  attr as a,
  getTranslationFunctions as g,
  setParaglideContext as s
};
