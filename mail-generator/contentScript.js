(() => {
  const composeMail = () => {

    setTimeout(() => {
      const aiBtn = document.querySelector(".mail-gen-ai-btn");
      if (aiBtn == null) {
        //!styles
        const styling = {
          containerDiv: {
            width: "25px",
            height: "100%",
            position: "absolute",
            bottom: "0px",
            right: "0px",
          },
          imgElement: {
            height: "21px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          },
          subdiv: {
            padding: "30px 10px"
          }
        };

        //!Main Div
        const div = document.querySelector(".bAK");
        //!SubDiv
        const subdiv = document.createElement("div");
        subdiv.className = "J-J5-Ji J-Z-I-Kv-H";
        //!ContainerDiv
        var containerDiv = document.createElement("div");
        containerDiv.className = "mail-gen-ai-btn";
        //!img
        var imgElement = document.createElement("img");
        //var inkpot = "https://img.icons8.com/fluency/120/quill-with-ink.png";
        var pen = "https://img.icons8.com/color-glass/480/quill-pen.png";
        imgElement.src = pen;

        //?Styles
        Object.assign(containerDiv.style, styling.containerDiv);
        Object.assign(imgElement.style, styling.imgElement);
        Object.assign(subdiv.style, styling.subdiv);

        //?DivInsertions
        containerDiv.appendChild(imgElement);
        subdiv.append(containerDiv);
        div.insertBefore(subdiv, div.firstChild);

      }
    }, 2000);
  };

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type } = obj;
    if (type === "compose") {
      composeMail();
    }
  });
})();