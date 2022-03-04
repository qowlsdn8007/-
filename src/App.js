import Nodes from "../src/components/Nodes.js";
import { fetchRootDirectory } from "./api/api.js";

export default function App({ $target }) {
  this.state = {
    nodes: [],
  };

  const nodes = new Nodes({ $target });

  this.setState = (nextState) => {
    this.state = nextState;
    nodes.setState({
      nodes: this.state.nodes,
    });
  };
  const init = async () => {
    const rootNode = await fetchRootDirectory();
    this.setState({
      nodes: rootNode,
    });
    console.log(this.state.nodes);
  };

  init();
}
