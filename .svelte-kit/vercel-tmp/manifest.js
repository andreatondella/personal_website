export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","documents/resume.pdf","email.svg","favicon.png","github_logo.svg","linkedin_logo.svg","personal_logo.svg","resume.svg","robots.txt","skills/.DS_Store","skills/dataviz/.DS_Store","skills/dataviz/colab.svg","skills/dataviz/jupyter.svg","skills/dataviz/matplotlib.svg","skills/dataviz/numpy.svg","skills/dataviz/pandas.svg","skills/dataviz/plotly.svg","skills/frontend/d3.svg","skills/frontend/html.svg","skills/frontend/illustrator.svg","skills/frontend/svelte.svg","skills/frontend/tailwind.svg","skills/languages/.DS_Store","skills/languages/english.svg","skills/languages/italian.svg","skills/languages/spanish.svg","skills/ml/huggingface.svg","skills/ml/keras.svg","skills/ml/sklearn.svg","skills/ml/tf.svg","skills/programming/python.svg","skills/programming/r.svg","skills/programming/sql.svg"]),
	mimeTypes: {".pdf":"application/pdf",".svg":"image/svg+xml",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.DBEOZVBs.js","app":"_app/immutable/entry/app.BO322Bue.js","imports":["_app/immutable/entry/start.DBEOZVBs.js","_app/immutable/chunks/entry.DhrcXm9Q.js","_app/immutable/chunks/runtime.D069mYe6.js","_app/immutable/entry/app.BO322Bue.js","_app/immutable/chunks/i18n.krEiaZO3.js","_app/immutable/chunks/runtime.D069mYe6.js","_app/immutable/chunks/entry.DhrcXm9Q.js","_app/immutable/chunks/legacy.DWS5Df1q.js","_app/immutable/chunks/render.L-iYWCfy.js","_app/immutable/chunks/svelte-head.BdOSXJz4.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js'))
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
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
