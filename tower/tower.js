if( typeof Element.prototype.clearChildren === 'undefined' ) {
    Object.defineProperty(Element.prototype, 'clearChildren', {
      configurable: true,
      enumerable: false,
      value: function() {
        while(this.firstChild) this.removeChild(this.lastChild);
      }
    });
}

document.getElementById("output1").innerhtml = ' '

async function start() {
    let x = JSON.parse(document.getElementById("first").value)
    let y = JSON.parse(document.getElementById("second").value)

    let i;

    for (i = 0; i < document.getElementById("iterations").value; i++) {
        let z = x + y
        var para = await document.createElement("li");
        var node = await document.createTextNode(z);
        para.appendChild(node);
        document.getElementById("output1").appendChild(para);
        x = y
        y = z

    }
}
