
## Links

- **Tutorial:** https://youtu.be/RDV3Z1KCBvo (stopped at 5:44)
- Hosted: https://ecommerce-81161.web.app/

## Process

- [ ] Come back to testing, did not delete those files
  - Test ideas: Items in basket are added correctly (the data layer...)
- [ ] Not sure what to do with the index.css defaults, maybe delete later
- [ ] Come back to storybook - learn to set it up properly etc.
- [ ] Deploy to Netlify (come back)
- [ ] Upon refreshing while signed in, the basket gets empty.

## Notes

- BEM - Block, Element, Modifier. Written as `block__element--modifier`
- `object-fit: contain`
- Review what `flex: 1` does - stretches as big as it can go
- `{Array(rating).fill().map((_, i) => (<p>⭐</p>))}`
- React context API/redux: we push things into the data layer and from there into basket. A reducer is how the data is dispatched into the data layer.
- Good practice to have the selector within the reducer
- useNavigate vs. Link. useNavigate keeps the styling of the button while still doing a redirect (useHistory is an older version of this)
- Don't need stripe blaze account from express server?
- history.push vs. history.replace - with the latter you can not come back to that back. How to do the same with navigate? (on payment page which goes to orders)
- Request query instead of params/data...

## Holding

- The basket contents refresh when page is refreshed - what do?
