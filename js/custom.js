var tl = new TimelineLite();

tl.from("#header", 2, {
    y:-10,
    opacity:0,
    ease:Power1.easeOut,}, 0)

tl.from("#project1", 0.5, {
    opacity:0,
    ease:Power1.easeOut,}, 0.9)

tl.from("#project2", 0.5, {
    opacity:0,
    ease:Power1.easeOut,}, 1)

tl.from("#project3", 0.5, {
    opacity:0,
    ease:Power1.easeOut,}, 1.1)

tl.from("#project4", 0.5, {
    opacity:0,
    ease:Power1.easeOut,}, 1.4)

tl.from("#project5", 0.5, {
    opacity:0,
    ease:Power1.easeOut,}, 1.5)

tl.from("#project6", 0.5, {
    opacity:0,
    ease:Power1.easeOut,}, 1.6)

tl.from("#footer", 2, {
    y:10,
    opacity:0,
    ease:Power1.easeOut,}, 2)