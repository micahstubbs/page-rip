Pinch apart to split the viewport in two, so you can do parallel reading. Pinch together to recombine. Only tested on iPhone & iPad; should work on other multitouch devices?; doesn't do anything (or make any sense) on non-touch single-pointer mouse/trackpad devices, whatever we're calling that classic category these days. But you can see it demo'ed in [this tweet](https://twitter.com/tophtucker/status/833379891429175296).

**WHY:**

The Web is missing *lenses* and *mirrors* and such, I think — images! maps! — fundamental mechanics for getting various views on the same underlying content. We have the freedom to paint any pixel according to any arbitrary rule, and yet it's weirdly hard to . . . like, hold your place in a long document, as one would with a finger marking a page in a book as you skim ahead. Sometimes I highlight the last sentence I read with the mouse so it jumps out when I scroll back up, which is a nice near-unconscious hack that takes advantage of something I know about how document state works; it'll still be there when I scroll back up. It's nice to be able to make that inertial assumption. But it's all so fragile and shallow compared to the deep predictable rules of the "physical world" that enable emergent functionality like bookmarking-by-finger.

I'm sorry if I'm jumping around here. I forget most of why I'm here.

I tried something similar [here](https://bl.ocks.org/tophtucker/b60766a1a137dbee3bf12fa6350d0069), with a similarly discombobulated readme, I see.

It's like: take multi-touch seriously!! (Which should set you up nicely to take multi-user seriously!!!) Let independent fingers do independent things on the same underlying things! So they can recombine, augment each other, go in parallel, compare, contrast... like all the mechanics of Braid. :)  

Some to-dos, in rough order from narrow to broad:  

- Fix text selection. (Pass single touches through to native behavior, only override for two fingers.)  
- My inertial scroll implementation is a lil glitchy cuz it only remembers the last touchmove dy, so if you stop moving and don't trigger a touchmove before a touchup, the page can jump...  
- Hysteresis! (path dependence): stretch the pages a bit before it snaps into pieces; i.e., provide some resistance to a UI fragmentation that may be slightly jarring.  
- When you recombine pages here, the bottom pane always wins. That's lazy and there's no good reason for it. I'm not sure what the correct behavior would be. Should one win? Should they average? How to indicate priority with gesture? Easiest thing to do would be "bigger pane wins". Maybe there's a metaphor of conservative collisions of different masses; scroll position goes to weighted average of pane sizes ;) ... no....    
- Recursive splitting into arbitrarily many panes!!  
- Problem: it's so easy to scroll that it's hard to, like, robustly mark the beginning of a chapter. So...? Stick panes to a position. Leave a mark where you split. Semantic snapping, like to headers?  
- Save & restore panes. Like: swipe a pane left to save it to some dock / bucket / hopper, right to trash it. Which interacts with a related problem of touch scope bubbling; I wanna zoom out on the whole window..... touch the viewport vs document, etc.  
- Show synchronized document state across views of the document. Start with projecting ghosted pointer & viewport of every pane (view) onto every other. Then, for interactive/dynamic documents... like, if you hover on a button in one view, you should see ghosted pointer ghost-hover in every other. But then, if you change something... what state is shared and what isn't? Braid green-glowy objects unstuck in time. Makes different kinds of mechanics possible.   
- Save all scroll state history (wear & tear) across all readers. Discretize into sessions, read vs skim, discontinuities.   
- Flow content into different containers of different positions, widths, sizes, orientations, while keeping track of field of vision. [Flow bottom edge into top edge](https://en.wikipedia.org/wiki/Fundamental_polygon#Examples) to make a torus, carousel. Other topologies. Lol.  
- I mean there's generally a lot more to be done with long-reading.  

I remember when I made my college newspaper CMS it drove me insane that there was no encoded relationship between an html element representing an article on a homepage / tagpage / authorpage and the article view. They're the same thing!! If the same article appears in different places (e.g. in a category list vs in a most-read list) it should visibly share state. You should be able to see which things represent the same things!! How many unique things are on this page? What am I looking at? What relationships? What's derived from something else, and what's the transformation being applied, like sorted by number of views vs. timestamp?

When I click from a link on the NYT homepage to the article, I want it to resemble a refraction and magnification and focusing.

Naturally I am fond of ZUIs, but they have their drawbacks and haven't really worked, broadly. And I think in part they need more exotic lenses and, uh, optical topologies. I know that sounds super user-hostile lol but I think it could feel really really good and natural and obvious and nobody would have to say bullshit like "optical topologies". It's hard and belabored to try to describe in words before it exists but that's just because it's ... not a literal or linguistic endeavor, maybe? What things are hardest to talk about? A lot of very simple natural human things can be. So it's not an indictment that my words are bad here I think hahahah ok goodnight.

> *These fragments I have shored against my ruins*
