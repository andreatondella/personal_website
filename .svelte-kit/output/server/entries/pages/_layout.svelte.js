import { S as store_get, T as ensure_array_like, V as unsubscribe_stores, W as bind_props, R as pop, P as push, X as head, Y as slot, Z as fallback, _ as stringify } from "../../chunks/index.js";
import { a as attr, s as setParaglideContext, g as getTranslationFunctions } from "../../chunks/index2.js";
import { n as normaliseBase, p as page, a as parseRoute, s as serializeRoute, g as getHrefBetween, i as i18n } from "../../chunks/i18n.js";
import { b as base } from "../../chunks/paths.js";
import { i as get } from "../../chunks/exports.js";
import "../../chunks/client.js";
import "@inlang/paraglide-js/internal/adapter-utils";
function isExternal(url, currentUrl, base2) {
  const absoluteBase = new URL(base2, currentUrl).pathname;
  return url.origin !== currentUrl.origin || !url.pathname.startsWith(absoluteBase);
}
function AlternateLinks($$payload, $$props) {
  push();
  var $$store_subs;
  let localisedPath, canonicalPath, alternateLinks;
  const absoluteBase = normaliseBase(base, new URL(store_get($$store_subs ??= {}, "$page", page).url)) || "/";
  let availableLanguageTags = $$props["availableLanguageTags"];
  let strategy = $$props["strategy"];
  let currentLang = $$props["currentLang"];
  const getAlternateLinks = (canonicalPath2, strategy2) => {
    const links = [];
    for (const lang of availableLanguageTags) {
      const localisedPath2 = strategy2.getLocalisedPath(canonicalPath2, lang);
      const fullPath = serializeRoute(localisedPath2, absoluteBase, void 0);
      const link = new URL(fullPath, new URL(store_get($$store_subs ??= {}, "$page", page).url)).href;
      links.push(link);
    }
    return links;
  };
  localisedPath = parseRoute(store_get($$store_subs ??= {}, "$page", page).url.pathname, absoluteBase)[0];
  canonicalPath = strategy.getCanonicalPath(localisedPath, currentLang);
  alternateLinks = getAlternateLinks(canonicalPath, strategy);
  if (availableLanguageTags.length >= 1) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(alternateLinks);
    $$payload.out += `<!--[-->`;
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let href = each_array[i];
      $$payload.out += `<link rel="alternate"${attr("hreflang", availableLanguageTags[i])}${attr("href", href)}>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { availableLanguageTags, strategy, currentLang });
  pop();
}
function ParaglideJS($$payload, $$props) {
  push();
  var $$store_subs;
  let lang;
  const absoluteBase = normaliseBase(base, new URL(store_get($$store_subs ??= {}, "$page", page).url)) || "/";
  let languageTag = fallback($$props["languageTag"], () => void 0, true);
  let i18n2 = $$props["i18n"];
  function translateHref(href, hreflang) {
    try {
      const localisedCurrentUrl = new URL(get(page).url);
      const [localisedCurrentPath, suffix] = parseRoute(localisedCurrentUrl.pathname, absoluteBase);
      const canonicalCurrentPath = i18n2.strategy.getCanonicalPath(localisedCurrentPath, lang);
      const canonicalCurrentUrl = new URL(localisedCurrentUrl);
      canonicalCurrentUrl.pathname = serializeRoute(canonicalCurrentPath, absoluteBase, suffix);
      const original_to = new URL(href, new URL(canonicalCurrentUrl));
      if (isExternal(original_to, localisedCurrentUrl, absoluteBase) || i18n2.config.exclude(original_to.pathname)) return href;
      const targetLanguage = hreflang ?? lang;
      const [canonicalPath, dataSuffix] = parseRoute(original_to.pathname, absoluteBase);
      const translatedPath = i18n2.strategy.getLocalisedPath(canonicalPath, targetLanguage);
      const to = new URL(original_to);
      to.pathname = serializeRoute(translatedPath, absoluteBase, dataSuffix);
      return getHrefBetween(localisedCurrentUrl, to);
    } catch (error) {
      return href;
    }
  }
  setParaglideContext({ translateHref });
  lang = languageTag ?? i18n2.getLanguageFromUrl(store_get($$store_subs ??= {}, "$page", page).url);
  head($$payload, ($$payload2) => {
    if (i18n2.config.seo.noAlternateLinks !== true && !i18n2.config.exclude(store_get($$store_subs ??= {}, "$page", page).url.pathname)) {
      $$payload2.out += "<!--[-->";
      AlternateLinks($$payload2, {
        availableLanguageTags: i18n2.config.runtime.availableLanguageTags,
        strategy: i18n2.strategy,
        currentLang: lang
      });
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]-->`;
  });
  $$payload.out += `<!---->`;
  {
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "default", {});
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!---->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { languageTag, i18n: i18n2 });
  pop();
}
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let { children } = $$props;
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  $$payload.out += `<header class="svelte-330g5b"><nav class="svelte-330g5b"><img src="/personal_logo.svg" alt="Personal logo" class="nav-logo svelte-330g5b"> <ul class="svelte-330g5b"><li><a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/`, void 0))}${attr("class", `svelte-330g5b ${stringify([
    store_get($$store_subs ??= {}, "$page", page).url.pathname === "/" ? "active" : ""
  ].filter(Boolean).join(" "))}`)}>Home</a></li> <li><a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/resume`, void 0))}${attr("class", `svelte-330g5b ${stringify([
    store_get($$store_subs ??= {}, "$page", page).url.pathname === "/resume" ? "active" : ""
  ].filter(Boolean).join(" "))}`)}>Resume</a></li> <li><a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/contact`, void 0))}${attr("class", `svelte-330g5b ${stringify([
    store_get($$store_subs ??= {}, "$page", page).url.pathname === "/contact" ? "active" : ""
  ].filter(Boolean).join(" "))}`)}>Contact</a></li></ul></nav></header> `;
  ParaglideJS($$payload, {
    i18n,
    children: ($$payload2) => {
      children($$payload2);
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <footer class="svelte-330g5b"><div class="footer-container svelte-330g5b"><div class="left-section svelte-330g5b"><div class="squares svelte-330g5b"><a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`https://www.linkedin.com/in/andrea-tondella/`, void 0))} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg class="logo svelte-330g5b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><g transform="matrix(1.00951, 0, 0, 1.00951, 1.967336, 1.967298)" style=""><g><path d="M472.366,0.003H18.36C8.219,0.003,0,8.222,0,18.363v454.005c0,10.143,8.219,18.361,18.36,18.361h454.012 c10.142,0,18.36-8.219,18.36-18.361V18.363C490.727,8.222,482.507,0.003,472.366,0.003z M130.375,403.808 c0,6.762-5.478,12.238-12.24,12.238H69.132c-6.756,0-12.24-5.477-12.24-12.238V189.625c0-6.763,5.484-12.24,12.24-12.24h49.003 c6.762,0,12.24,5.477,12.24,12.24V403.808z M130.375,127.482c0,6.763-5.478,12.24-12.24,12.24H69.132 c-6.756,0-12.24-5.478-12.24-12.24V83.969c0-6.763,5.484-12.24,12.24-12.24h49.003c6.762,0,12.24,5.477,12.24,12.24V127.482z M433.835,403.808c0,6.762-5.483,12.238-12.24,12.238h-49.003c-6.763,0-12.24-5.477-12.24-12.238v-90.436 c0-29.988-1.566-49.383-4.712-58.189c-3.14-8.807-8.237-15.649-15.3-20.526c-7.062-4.884-15.558-7.32-25.496-7.32 c-12.729,0-24.149,3.488-34.26,10.459c-10.11,6.977-17.038,16.211-20.79,27.717c-3.745,11.506-5.618,32.779-5.618,63.807v74.488 c0,6.762-5.483,12.238-12.24,12.238h-49.003c-6.756,0-12.24-5.477-12.24-12.238V189.625c0-6.763,5.483-12.24,12.24-12.24h43.771 c6.763,0,12.24,5.477,12.24,12.24v16.316c0,6.763,3.312,7.852,7.858,2.852c22.864-25.123,50.753-37.687,83.673-37.687 c16.212,0,31.028,2.919,44.455,8.758c13.422,5.838,23.58,13.292,30.466,22.356c6.885,9.063,11.683,19.351,14.382,30.857 c2.699,11.505,4.058,27.98,4.058,49.426V403.808L433.835,403.808z"></path></g></g></svg></a>  <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`https://github.com/andreatondella`, void 0))} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><svg class="logo svelte-330g5b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.88.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.55-3.87-1.55-.52-1.3-1.27-1.65-1.27-1.65-1.04-.7.08-.68.08-.68 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.52-2.56-.3-5.26-1.28-5.26-5.7 0-1.26.45-2.3 1.18-3.1-.12-.3-.52-1.52.1-3.18 0 0 .97-.3 3.18 1.18.92-.26 1.9-.38 2.88-.38.98 0 1.96.12 2.88.38 2.2-1.48 3.18-1.18 3.18-1.18.62 1.66.22 2.88.1 3.18.74.8 1.18 1.84 1.18 3.1 0 4.42-2.7 5.4-5.26 5.7.42.36.76 1.08.76 2.18v3.23c0 .3.2.66.78.55C20.21 21.38 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"></path></svg></a> <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/contact`, void 0))} class="icon-button" aria-label="Contact"><svg class="logo logo-email svelte-330g5b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"></path></svg></a></div> <span class="footer-date svelte-330g5b">© 2025 | <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`#top`, void 0))} class="no-color-link svelte-330g5b">Andrea Tondella</a></span></div> <span class="svelte-330g5b">Designed and built by <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`#top`, void 0))}>Andrea Tondella</a> with ♥️ using <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`https://kit.svelte.dev/`, void 0))} class="external-link svelte-330g5b">SvelteKit</a></span></div></footer>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
