
exports.getGraphPath = function(currentGraph) {

    const graphPath = [];

    if (!currentGraph) {
      return [];
    }

    graphPath.unshift(currentGraph.name);

    return this.getGraphPath(currentGraph.parentGraph).concat(graphPath);
  }

