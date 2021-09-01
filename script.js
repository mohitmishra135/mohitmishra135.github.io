const jsDiv = document.getElementById("dataJs");
const reactDiv = document.getElementById("dataReact")

const render = () => {
    jsDiv.innerHTML = `
    <div class = "split">
        Js template
        <input />
        <p>${(new Date())}</p>
    `;

    var divToRender = React.createElement(
        "div",
        { className: "split" },
        "React template",
        React.createElement("input"),
        React.createElement(
            "p",
            null,
            new Date().toString()
        )
    );

    ReactDOM.render(divToRender, reactDiv);

}

setInterval(render, 1000);