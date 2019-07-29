// These are customizable theme options we only need to check once
let basePath;

exports.onPreBootstrap = ({ store }, themeOptions) => {
  basePath = themeOptions.basePath || "/";
}

exports.createPages = ({ actions, reporter }) => {
  actions.createPage({
    path: basePath,
    component: require.resolve("./src/templates/page.js"),
  })
}
