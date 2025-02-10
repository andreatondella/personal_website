

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BBIqjV4x.js","_app/immutable/chunks/j0XxCVU7.js","_app/immutable/chunks/D069mYe6.js"];
export const stylesheets = ["_app/immutable/assets/2.BQmiBskD.css"];
export const fonts = [];
