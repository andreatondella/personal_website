export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","documents/.DS_Store","documents/resume.pdf","email.svg","favicon.png","fonts/Helvetica.ttf","github_logo.svg","linkedin_logo.svg","personal_logo.svg","resume.svg","robots.txt","sitemap.xml","skills/.DS_Store","skills/dataviz/.DS_Store","skills/dataviz/colab.svg","skills/dataviz/jupyter.svg","skills/dataviz/matplotlib.svg","skills/dataviz/numpy.svg","skills/dataviz/pandas.svg","skills/dataviz/plotly.svg","skills/frontend/d3.svg","skills/frontend/html.svg","skills/frontend/illustrator.svg","skills/frontend/svelte.svg","skills/frontend/tailwind.svg","skills/languages/.DS_Store","skills/languages/english.svg","skills/languages/italian.svg","skills/languages/spanish.svg","skills/ml/azure.svg","skills/ml/gcloud.svg","skills/ml/gemini.svg","skills/ml/huggingface.svg","skills/ml/keras.svg","skills/ml/openai.svg","skills/ml/sklearn.svg","skills/ml/tf.svg","skills/programming/python.svg","skills/programming/r.svg","skills/programming/sql.svg"]),
	mimeTypes: {".pdf":"application/pdf",".svg":"image/svg+xml",".png":"image/png",".ttf":"font/ttf",".txt":"text/plain",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.DMjZmJAi.js",app:"_app/immutable/entry/app.BuWVbUfJ.js",imports:["_app/immutable/entry/start.DMjZmJAi.js","_app/immutable/chunks/BqlJ5WQJ.js","_app/immutable/chunks/D069mYe6.js","_app/immutable/entry/app.BuWVbUfJ.js","_app/immutable/chunks/DaFXl2fO.js","_app/immutable/chunks/D069mYe6.js","_app/immutable/chunks/BqlJ5WQJ.js","_app/immutable/chunks/j0XxCVU7.js","_app/immutable/chunks/CF1Njy3J.js","_app/immutable/chunks/Bjv2I9uO.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/resume",
				pattern: /^\/resume\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
