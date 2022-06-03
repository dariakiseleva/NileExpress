## Homework

- Show item # in checkout and the total price

## Resources

- **Tutorial:** https://youtu.be/RDV3Z1KCBvo

## Process

- [ ] Come back to testing, did not delete those files
  - Test ideas: Items in basket are added correctly (the data layer...)
- [ ] Not sure what to do with the index.css defaults, maybe delete later
- [ ] Come back to storybook - learn to set it up properly etc.

## Notes

- BEM - Block, Element, Modifier. Written as `block__element--modifier`
- `object-fit: contain`
- Review what `flex: 1` does - stretches as big as it can go
- `{Array(rating).fill().map((_, i) => (<p>⭐</p>))}`
- React context API/redux: we push things into the data layer and from there into basket. A reducer is how the data is dispatched into the data layer.
- Good practice to have the selector within the reducer

## Holding

- The basket contents refresh when page is refreshed - what do?
