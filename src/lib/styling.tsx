import React from 'react';
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