import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

export const loadCodeHighlight = () => {
    console.log("load Code Highlight")
    deckDeckGoHighlightElement().then(() => console.log("Loading Code Highlight Done!"));
};
