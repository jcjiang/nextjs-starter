const data = require('//utils/projectsData');

module.exports = {
    trailingSlash: true,
    exportPathMap: async function() {
      const { projects } = data;
      const paths = {
        '/': { page: '/' },
      };

      projects.forEach((project) => { //each project is turned into a path
          paths[`/project/$[project.slug`] = {
              page: '/project/[path]',
              query: { path: project.slug },
          };
      });

      return paths;
    },
  };