module.exports = function(RED) {
    function firstNode(config) {
        RED.nodes.createNode(this,config);
        // start of node specific code
var context =this.context();
var node =this;
// listener on input
this.on('input',function(msg){
  // msg output
var outMsg = {payload:"Your firstNode Works"};
node.send(outMsg);
// end of send

        });
        // end of listener
        // end of the node specific code
    }
    RED.nodes.registerType("firstNode",firstNode);
}
