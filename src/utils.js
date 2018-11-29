
class utils {
 getGraphPath (currentGraph) {
  const graphPath = [];

  if (!currentGraph) {
    return [];
  }

  graphPath.unshift(currentGraph.name);

  return this.getGraphPath(currentGraph.parentGraph).concat(graphPath);
 }
}

export default utils;
