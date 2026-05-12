let htmlCode = `1   <!DOCTYPE html>
2   <html lang="en">
3   <head>
4       <title>Document</title>
5   </head>
6   <body>
7       <h1>Hello World!</h1>
8   </body>
9   </html>
10`;

htmlCode = htmlCode
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;");

let temp = htmlCode
  .replace(/&lt;!DOCTYPE html&gt;/g, "{{DOCTYPE}}")
  .replace(/&lt;\/html&gt;/g, "{{CLOSE_HTML}}")
  .replace(/&lt;\/head&gt;/g, "{{CLOSE_HEAD}}")
  .replace(/&lt;\/title&gt;/g, "{{CLOSE_TITLE}}")
  .replace(/&lt;\/body&gt;/g, "{{CLOSE_BODY}}")
  .replace(/&lt;\/h1&gt;/g, "{{CLOSE_H1}}")
  .replace(/&lt;html/g, "{{OPEN_HTML}}")
  .replace(/&lt;head/g, "{{OPEN_HEAD}}")
  .replace(/&lt;title/g, "{{OPEN_TITLE}}")
  .replace(/&lt;body/g, "{{OPEN_BODY}}")
  .replace(/&lt;h1/g, "{{OPEN_H1}}");

temp = temp
  .replace(
    /{{DOCTYPE}}/g,
    '<span style="color: #4ecdc4;">&lt;</span>' +
      '<span style="color: #98ff98;">!</span>' +
      '<span style="color: #98ff98;">DOCTYPE</span>' +
      '<span style="color: #98ff98;"> </span>' +
      '<span style="color: #50c878;">html</span>' +
      '<span style="color: #4ecdc4;">&gt;</span>',
  )
  .replace(
    /{{CLOSE_HTML}}/g,
    '<span style="color: #4ecdc4;">&lt;</span>' +
      '<span style="color: #4ecdc4;">/</span>' +
      '<span style="color: #98ff98;">html</span>' +
      '<span style="color: #4ecdc4;">&gt;</span>',
  )
  .replace(
    /{{CLOSE_HEAD}}/g,
    '<span style="color: #4ecdc4;">&lt;</span>' +
      '<span style="color: #4ecdc4;">/</span>' +
      '<span style="color: #98ff98;">head</span>' +
      '<span style="color: #4ecdc4;">&gt;</span>',
  )
  .replace(
    /{{CLOSE_TITLE}}/g,
    '<span style="color: #4ecdc4;">&lt;</span>' +
      '<span style="color: #4ecdc4;">/</span>' +
      '<span style="color: #98ff98;">title</span>' +
      '<span style="color: #4ecdc4;">&gt;</span>',
  )
  .replace(
    /{{CLOSE_BODY}}/g,
    '<span style="color: #4ecdc4;">&lt;</span>' +
      '<span style="color: #4ecdc4;">/</span>' +
      '<span style="color: #98ff98;">body</span>' +
      '<span style="color: #4ecdc4;">&gt;</span>',
  )
  .replace(
    /{{CLOSE_H1}}/g,
    '<span style="color: #4ecdc4;">&lt;</span>' +
      '<span style="color: #4ecdc4;">/</span>' +
      '<span style="color: #98ff98;">h1</span>' +
      '<span style="color: #4ecdc4;">&gt;</span>',
  )
  .replace(
    /{{OPEN_HTML}}/g,
    '<span style="color: #4ecdc4;">&lt;</span><span style="color: #98ff98;">html</span>',
  )
  .replace(
    /{{OPEN_HEAD}}/g,
    '<span style="color: #4ecdc4;">&lt;</span><span style="color: #98ff98;">head</span>',
  )
  .replace(
    /{{OPEN_TITLE}}/g,
    '<span style="color: #4ecdc4;">&lt;</span><span style="color: #98ff98;">title</span>',
  )
  .replace(
    /{{OPEN_BODY}}/g,
    '<span style="color: #4ecdc4;">&lt;</span><span style="color: #98ff98;">body</span>',
  )
  .replace(
    /{{OPEN_H1}}/g,
    '<span style="color: #4ecdc4;">&lt;</span><span style="color: #98ff98;">h1</span>',
  );

temp = temp
  .replace(/lang/g, '<span style="color: #50c878;">lang</span>')
  .replace(/="en"/g, '=<span style="color: #d19a66;">"en"</span>');

temp = temp.replace(/^(\d+)/gm, '<span style="color: #7a7a7a;">$1</span>');

htmlCode = temp.replace(/\n/g, "<br>");

document.querySelector(".code_text-html").innerHTML = htmlCode;

let cssCode = `1    * {
2       padding: 0;
3       margin: 0;
4   }
5 
6   .class {
7       display: flex;
8       background: blue;
9       border: 2px solid black;
10      font-family: "Calibri", sans-serif;
11  }
12  `;

let lines = cssCode.split("\n");
let coloredLines = lines.map((line) => {
  let match = line.match(/^(\d+)(\s+)/);
  if (match) {
    let number = match[1];
    let spaces = match[2];
    let rest = line.substring(match[0].length);
    return `<span style="color: #808080;">${number}</span>${spaces}${rest}`;
  }
  return line;
});
cssCode = coloredLines.join("\n");

cssCode = cssCode.replace(/(\*)/g, '<span style="color: #98ff98;">$1</span>');
cssCode = cssCode.replace(
  /(\.class)/g,
  '<span style="color: #98ff98;">$1</span>',
);

cssCode = cssCode.replace(
  /(padding|margin|display|background|border|font-family)(?=\s*:)/g,
  '<span style="color: #98ff98;">$1</span>',
);

cssCode = cssCode.replace(
  /:\s*(flex)/g,
  ':<span style="color: #d19a66;">flex</span>',
);
cssCode = cssCode.replace(
  /:\s*(blue)/g,
  ':<span style="color: #50c878;">blue</span>',
);
cssCode = cssCode.replace(
  /:\s*(black)/g,
  ':<span style="color: #50c878;">black</span>',
);
cssCode = cssCode.replace(
  /:\s*(green)/g,
  ':<span style="color: #50c878;">green</span>',
);
cssCode = cssCode.replace(
  /("Calibri", sans-serif)/g,
  '<span style="color: #d19a66;">$1</span>',
);

cssCode = cssCode.replace(
  /(?<!<span[^>]*>)\b(0)\b/g,
  '<span style="color: #d19a66;">$1</span>',
);
cssCode = cssCode.replace(
  /(?<!<span[^>]*>)\b(\d+px)\b/g,
  '<span style="color: #d19a66;">$1</span>',
);

cssCode = cssCode.replace(/(\{)/g, '<span style="color: #f1fa8c;">$1</span>');
cssCode = cssCode.replace(/(\})/g, '<span style="color: #f1fa8c;">$1</span>');

cssCode = cssCode.replace(/\n/g, "<br>");

document.querySelector(".code_text-css").innerHTML = cssCode;

let jsCode = `1   const blocks = document.querySelectorAll(".block");
2   const descriptions = document.querySelectorAll(".description");
3   function writeDescriptionInBlocks() {
4       for(let i = 0; i < blocks.length; i++) {
5           blocks[i].textContent = descriptions[i];
6           blocks[i].style.border = "2px solid black";
7       }
8   }
9 
10  if(blocks.length > 0) {
11      writeDescriptionInBlocks();
12  }`;

function highlightJavaScript(code) {
  let escaped = code.replace(/&/g, "&amp;");

  const tokens = [];
  const regex =
    /(\/\*[\s\S]*?\*\/|\/\/[^\n]*|"[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'|`[^`\\]*(?:\\.[^`\\]*)*`|\b\d+(?:\.\d+)?\b|[a-zA-Z_$][\w$]*|\+\+|--|[-+*/%=<>!&|?:;,.[\](){}]|\s+)/g;
  let match;
  while ((match = regex.exec(escaped)) !== null) {
    tokens.push(match[0]);
  }

  const keywords = new Set([]);

  let result = "";
  for (let token of tokens) {
    if (/^\s+$/.test(token)) {
      result += token;
      continue;
    }

    if (/^\/\//.test(token) || /^\/\*/.test(token)) {
      result += `<span style="color: #6a9955;">${token}</span>`;
      continue;
    }

    if (/^(["'`])/.test(token)) {
      result += `<span style="color: #ce9178;">${token}</span>`;
      continue;
    }

    if (/^\d+(?:\.\d+)?$/.test(token)) {
      result += `<span style="color: #7a7a7a;">${token}</span>`;
      continue;
    }

    if (keywords.has(token)) {
      result += `<span style="color: #569cd6;">${token}</span>`;
      continue;
    }

    if (/^[a-zA-Z_$][\w$]*$/.test(token)) {
      result += `<span style="color: #c586c0;">${token}</span>`;
      continue;
    }

    result += `<span style="color: #d4d4d4;">${token}</span>`;
  }

  return result;
}

const coloredHtml = highlightJavaScript(jsCode);

console.log(coloredHtml);

if (typeof document !== "undefined") {
  const container = document.querySelector(".code_text-js");
  if (container) {
    const pre = document.createElement("pre");
    pre.innerHTML = coloredHtml;
    pre.style.fontSize = "18px";
    pre.style.lineHeight = "1.5";
    pre.style.margin = "0";
    pre.style.padding = "0";
    pre.style.background = "transparent";
    pre.style.color = "#d4d4d4";
    pre.style.border = "none";
    container.innerHTML = "";
    container.appendChild(pre);
  }
}
