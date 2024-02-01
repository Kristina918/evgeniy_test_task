import svgSprite from "gulp-svg-sprite";

export const svgSprive = () => {
  return app.gulp
    .src(`${app.path.src.svgicons}`, {})
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SVG",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: "../icons/icons.svg",
            example: true,
          },
          symbol: {
            // Create a «symbol» sprite
            inline: true, // Prepare for inline embedding
          },

		  defs: true,
          css: {
            // Create a «css» sprite
            render: {
              scss: true, // Render a Sass stylesheet
            },
          },
        },
      })
    )
    .pipe(app.gulp.dest(`${app.path.src.svgspriteresult}`));
};
