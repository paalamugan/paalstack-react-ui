---
'@paalstack/react-components': patch
'@paalstack/react-ui': patch
---

fix(components): give `Form` a `method` prop, defaulting to `post`, so a native submit can never put credentials in the URL

- Add a `method` prop to `Form` ('get' | 'post'), defaulting to 'post'.
- A `<form>` with no `method` attribute is a GET. The browser only runs React's own `onSubmit` once the form is hydrated, so a submit in the window between the server-rendered HTML and hydration falls through to the browser's native submit - which appends every field value to the URL. For a sign-in form that is the password: in the address bar, in browser history, in the proxy's access log, and in the `Referer` header of the next navigation. `post` keeps those values in the request body instead.
- This is the default, so a consumer needs no change to be protected. Pass `method="get"` to opt back into the old behaviour.
- Make the components package's jest setup able to load the library's own ESM-only dependencies (`intl-messageformat` and its `@formatjs/*` deps, reached through `@/shared/lib` -> `format`). Without it no component test could load the component under test, which is why the package had no component tests at all.
- Add the first component test in `packages/components`: the rendered `<form>` always carries a `method`, defaulting to 'post'.
