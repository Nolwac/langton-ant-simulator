# Welcome!

Langton’s ant is a two-dimensional automata devised by computer scientist Christopher
Langton. When the ant moves the grid tile it was on, it change’s color with respect to some rules, thereby resulting in to some interesting patterns. You can find more details here:
[Langton's Ant Wikipedia Page][langton-ant]

Use a module bundler like parcel or webpack to run index.html to quickly visualize an example simulation.
Something like:

```shell
parcel index.html
```
assuming that you already have parcel installed.
You are free to also use any http server to run index.html.
You can also import LangtonAntSimulation from 'langton-ant-simulator.js' to use as it may interest you.

You can embed embed a custom javascript file which imports `langton-ant-simulator.js` to a html file, then run the html file on a http server to visualize your result.

## A walk through some Langton's ant drawings/simulation

The following drawings/simulations of Langton's ant can be found in the example folder of this repository.
You can navigate to any of the example pages to visualize the example.
- [Langton's ant drawing for 11000 moves][langton-ant-11000-draws]
- [Langton's ant drawing for 2000000 moves][langton-ant-2000000-draws]
- [Langton's ant simulation of 11000 moves][langton-ant-11000-simulations]
- [Langton's ant simulation of infinite moves][langton-ant-infinite-simulations]

[langton-ant]: https://en.wikipedia.org/wiki/Langton's_ant
[langton-ant-11000-draws]: https://langton-ant.nwafor.org/examples/langton-ant-11000-draws
[langton-ant-2000000-draws]: https://langton-ant.nwafor.org/examples/langton-ant-2000000-draws
[langton-ant-11000-simulations]: https://langton-ant.nwafor.org/examples/langton-ant-11000-simulations
[langton-ant-infinite-simulations]: https://langton-ant.nwafor.org/examples/langton-ant-infinite-simulations