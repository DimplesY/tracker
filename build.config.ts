import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/core/index',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
})
