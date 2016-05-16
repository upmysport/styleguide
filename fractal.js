/*
 * Require the Fractal module
 */
var fractal = require('@frctl/fractal');

/*
 * Tell Fractal where to look for components.
 */
fractal.set('components.path', 'components');

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.set('docs.path', 'docs');

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.set('plugins.web.static.path', 'assets');

/*
 * Give your project a title.
 */
fractal.set('project.title', 'UpMySport Component Library');

/*
 * The default layout template to use when rendering component previews
 */
fractal.set('components.default.preview', '@preview');

/*
 * The default status to use for a component. Choices: prototype | wip | ready. Default: ready
 */
fractal.set('components.default.status', 'ready');

/*
 * The directory within which any static builds of the web UI should be generated.
 */
fractal.set('plugins.web.build.path', 'build');
