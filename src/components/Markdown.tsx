import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// import remarkToc from "remark-toc";
import emoji from "remark-emoji";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Markdown(props: any) {
  const [markdown, setMarkdown] = React.useState<any>();

  React.useEffect(() => {
    if (markdown) {
      const tables = markdown.querySelectorAll("table");
      if (tables.length) {
        tables.forEach((table: any) => {
          if (
            !table.matches(".table.table-bordered.table-striped.table-hover")
          ) {
            table.className = "table table-bordered table-striped table-hover";
          }
        });
      }
      const quotes = markdown.querySelectorAll("blockquote");
      if (quotes.length) {
        quotes.forEach((table: any) => {
          if (!table.matches(".block-quote")) {
            table.className = "block-quote";
          }
        });
      }
      const checkboxes = markdown.querySelectorAll('input[type="checkbox"]');
      if (checkboxes.length) {
        checkboxes.forEach((table: any) => {
          if (!table.matches(".form-check-input")) {
            table.className = "form-check-input";
          }
        });
      }
    }
  }, [markdown]);
  return (
    <div className="markdown-body" ref={setMarkdown}>
      <ReactMarkdown
        remarkPlugins={[
          remarkGfm,
          // remarkToc,
          emoji,
        ]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={oneDark}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
        children={props.children}
      />
    </div>
  );
}
