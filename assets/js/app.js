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

temp = temp.replace(/^(\d+)/gm, '<span style="color: #808080;">$1</span>');

htmlCode = temp.replace(/\n/g, "<br>");

document.querySelector(".code_text-html").innerHTML = htmlCode;

let cssCode = `1    * {
2       padding: 0;
3       margin: 0;
4   }
5
6   .class {
7       color: green;
8       background: blue;
9       border: 2px solid black;
10      font-family: "Calibri", sans-serif;
11  }
12`;

cssCode = cssCode
  .replace(/(\*)/g, '<span style="color: #98ff98;">$1</span>')
  .replace(/(\.class)/g, '<span style="color: #98ff98;">$1</span>')
  .replace(/(\{)/g, '<span style="color: #f1fa8c;">$1</span>')
  .replace(/(\})/g, '<span style="color: #f1fa8c;">$1</span>');

document.querySelector(".code_text-css").innerHTML = cssCode;
