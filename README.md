# Benchmarks

## Disclaimer

👀 This is a fork from Styled-Components. I have just added a few more libraries. All thanks goes to the people working on [Styled-Components](https://github.com/styled-components/styled-components) and [Necolas](https://github.com/necolas) 👀

Try the [benchmarks app](https://necolas.github.io/react-native-web/benchmarks) online.

To run the benchmarks locally:

```
yarn build
open ./packages/benchmarks/dist/index.html
```

Develop against these benchmarks:

```
yarn build --watch
```

## Notes

These benchmarks are approximations of extreme cases that libraries may
encounter. Their purpose is to provide an early-warning signal for performance
regressions. Each test report includes the mean and standard deviation of the
timings, and approximations of the time spent in scripting (S) and layout (L).

The components used in the render benchmarks are simple enough to be
implemented by multiple UI or style libraries. The benchmark implementations
and the features of the style libraries are _only approximately equivalent in
functionality_.

No benchmark will run for more than 20 seconds.

### Mount deep/wide tree

These cases look at the performance of mounting and rendering large trees of
elements that use static styles.

### Update dynamic styles

This case looks at the performance of repeated style updates to a large mounted
tree. Some libraries choose to inject new styles for each "dynamic style",
whereas others choose to use inline styles. Libraries without built-in support
for dynamic styles (i.e., they rely on user-authored inline styles) are not
included.
