import React from 'react';

function inlineFormat(text: string): React.ReactNode[] {
  // Regex to match bold, code, links, and italic
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Bold: **text**
    const boldMatch = remaining.match(/\*\*(.*?)\*\*/);
    // Inline code: `code`
    const codeMatch = remaining.match(/`([^`]+)`/);
    // Link: [text](url)
    const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);
    // Italic: *text*
    const italicMatch = remaining.match(/\*([^*]+)\*/);

    let firstMatch: { index: number; length: number; node: React.ReactNode } | null = null;

    if (boldMatch && boldMatch.index !== undefined) {
      firstMatch = {
        index: boldMatch.index,
        length: boldMatch[0].length,
        node: <strong key={key++} className="font-semibold text-text-primary">{boldMatch[1]}</strong>,
      };
    }

    if (codeMatch && codeMatch.index !== undefined && (!firstMatch || codeMatch.index < firstMatch.index)) {
      firstMatch = {
        index: codeMatch.index,
        length: codeMatch[0].length,
        node: <code key={key++} className="font-mono text-xs text-accent-primary bg-background/80 px-1.5 py-0.5 rounded border border-border-subtle">{codeMatch[1]}</code>,
      };
    }

    if (linkMatch && linkMatch.index !== undefined && (!firstMatch || linkMatch.index < firstMatch.index)) {
      firstMatch = {
        index: linkMatch.index,
        length: linkMatch[0].length,
        node: (
          <a key={key++} href={linkMatch[2]} target={linkMatch[2].startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-accent-primary hover:underline font-medium">
            {linkMatch[1]}
          </a>
        ),
      };
    }

    if (italicMatch && italicMatch.index !== undefined && (!firstMatch || italicMatch.index < firstMatch.index)) {
      firstMatch = {
        index: italicMatch.index,
        length: italicMatch[0].length,
        node: <em key={key++} className="italic text-text-primary">{italicMatch[1]}</em>,
      };
    }

    if (!firstMatch) {
      parts.push(remaining);
      break;
    }

    if (firstMatch.index > 0) {
      parts.push(remaining.slice(0, firstMatch.index));
    }

    parts.push(firstMatch.node);
    remaining = remaining.slice(firstMatch.index + firstMatch.length);
  }

  return parts;
}

export default function MarkdownArticle({ markdown }: { markdown: string }) {
  const blocks = markdown.split(/\n{2,}/).map((block) => block.trim()).filter(Boolean);

  return (
    <div className="space-y-6 text-text-secondary leading-relaxed">
      {blocks.map((block, index) => {
        // H1
        if (block.startsWith('# ')) {
          return (
            <h1 key={index} className="text-3xl md:text-4xl font-display text-text-primary pt-8 pb-2 border-b border-border-subtle">
              {inlineFormat(block.slice(2))}
            </h1>
          );
        }

        // H2
        if (block.startsWith('## ')) {
          return (
            <h2 key={index} className="text-2xl md:text-3xl font-display text-text-primary pt-8 pb-2 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-accent-primary rounded-full inline-block" />
              {inlineFormat(block.slice(3))}
            </h2>
          );
        }

        // H3
        if (block.startsWith('### ')) {
          return (
            <h3 key={index} className="text-xl md:text-2xl font-display text-text-primary pt-4">
              {inlineFormat(block.slice(4))}
            </h3>
          );
        }

        // Code block: ```
        if (block.startsWith('```')) {
          const lines = block.split('\n');
          const language = lines[0].replace('```', '').trim() || 'text';
          const code = lines.slice(1, lines[lines.length - 1].startsWith('```') ? -1 : undefined).join('\n');
          return (
            <div key={index} className="my-6 rounded-xl border border-border-subtle bg-[#080d0a] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/[0.02] text-xs font-mono text-text-secondary">
                <span>{language}</span>
                <span className="text-[10px] text-accent-primary uppercase tracking-wider">Codesstellar Verification</span>
              </div>
              <pre className="p-4 text-xs md:text-sm font-mono text-text-primary overflow-x-auto leading-relaxed">
                <code>{code}</code>
              </pre>
            </div>
          );
        }

        // Blockquote: >
        if (block.startsWith('> ')) {
          const quoteText = block.split('\n').map((l) => l.replace(/^>\s?/, '')).join(' ');
          return (
            <blockquote key={index} className="my-6 border-l-2 border-accent-primary bg-surface/50 p-5 rounded-r-xl text-text-primary italic">
              {inlineFormat(quoteText)}
            </blockquote>
          );
        }

        // Unordered List: - or *
        if (block.startsWith('- ') || block.startsWith('* ')) {
          const items = block.split('\n').filter(Boolean);
          return (
            <ul key={index} className="list-disc pl-6 space-y-2.5 my-4 marker:text-accent-primary">
              {items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-base text-text-secondary leading-relaxed">
                  {inlineFormat(item.replace(/^[-*]\s+/, ''))}
                </li>
              ))}
            </ul>
          );
        }

        // Ordered List: 1.
        if (/^\d+\.\s/.test(block)) {
          const items = block.split('\n').filter(Boolean);
          return (
            <ol key={index} className="list-decimal pl-6 space-y-2.5 my-4 marker:font-mono marker:text-accent-primary">
              {items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-base text-text-secondary leading-relaxed">
                  {inlineFormat(item.replace(/^\d+\.\s+/, ''))}
                </li>
              ))}
            </ol>
          );
        }

        // Horizontal Rule
        if (block === '---' || block === '***') {
          return <hr key={index} className="my-8 border-border-subtle" />;
        }

        // Paragraph
        return (
          <p key={index} className="text-base md:text-lg text-text-secondary leading-relaxed">
            {inlineFormat(block)}
          </p>
        );
      })}
    </div>
  );
}
