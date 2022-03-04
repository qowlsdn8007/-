import { fetchRootDirectory } from "../api/api.js";

export default function Nodes({ $target }) {
  const $Nodes = document.createElement("div");
  $target.appendChild($Nodes);

  this.state = {
    nodes: [],
  };
  this.setState = (nextState) => {
    this.state = nextState;
  };

  this.render = () => {
    console.log(this.state.nodes);
    const htmlString = `${this.state.nodes.map(
      (Node) => `<img class="Node" src="assets/directory.png" />`
    )}`;
    $Nodes.innerHTML = htmlString;
  };
  this.render();
}
