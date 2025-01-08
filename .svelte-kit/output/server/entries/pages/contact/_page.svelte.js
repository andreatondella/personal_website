import { g as getTranslationFunctions, a as attr } from "../../../chunks/index2.js";
import { R as pop, P as push } from "../../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  $$payload.out += `<main class="content svelte-16hlzwp"><h1 class="svelte-16hlzwp">Contact Me</h1> <form${attr("action", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`https://formspree.io/f/mjkkpqan`, void 0))} method="POST" class="contact-form svelte-16hlzwp"><div class="form-field svelte-16hlzwp"><label for="name" class="svelte-16hlzwp">Your Name</label> <input id="name" name="name" type="text" required class="svelte-16hlzwp"></div> <div class="form-field svelte-16hlzwp"><label for="email" class="svelte-16hlzwp">Email</label> <input id="email" name="email" type="email" required class="svelte-16hlzwp"> <p class="description svelte-16hlzwp">This will help me respond to your query via an email.</p></div> <div class="form-field svelte-16hlzwp"><label for="message" class="svelte-16hlzwp">Message</label> <textarea id="message" name="message" rows="5" required class="svelte-16hlzwp"></textarea> <p class="description svelte-16hlzwp">What would you like to discuss?</p></div> <div class="button-group svelte-16hlzwp"><button type="submit" class="svelte-16hlzwp">Submit</button></div></form></main>`;
  pop();
}
export {
  _page as default
};
