import React from 'react';
import { StyleRegistry, createStyleRegistry } from 'styled-jsx';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

type ChildProps = { children: React.ReactNode };

export function useStyledComponentsRegistry() {
  const [styledComponentsStyleSheet] = React.useState(
    () => new ServerStyleSheet(),
  );

  const styledComponentsFlushEffect = () => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.seal();
    return <>{styles}</>;
  };

  function StyledComponentsRegistry({ children }: ChildProps) {
    return (
      <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
        {children as React.ReactNode}
      </StyleSheetManager>
    );
  }

  return [StyledComponentsRegistry, styledComponentsFlushEffect] as const;
}

export function useStyledJsxRegistry() {
  const [jsxStyleRegistry] = React.useState(() => createStyleRegistry());

  function styledJsxFlushEffect() {
    const styles = jsxStyleRegistry.styles();
    jsxStyleRegistry.flush();
    return <>{styles}</>;
  }

  function StyledJsxRegistry({ children }: ChildProps) {
    return (
      <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>
    );
  }

  return [StyledJsxRegistry, styledJsxFlushEffect] as const;
}
