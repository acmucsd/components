import React from 'react';
import Link from 'next/link';
import { HTMLAttributes, PropsWithChildren } from 'react'
import './Typography.css';



// shared
type Variant = 'displayName' | 'display1' | 'display2' | 'title1' | 'title2' | 'title3' | 
               'bodyLarge' | 'bodyMedium' | 'bodySmall' | 'cardTitle' | 'cardBody' | 'cardTags';

type ComponentType = 'p' | 'span' | 'div';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant: Variant;
  component?: ComponentType; // For 'a' or an h1-6 too
  href?: string;
  className?: string;
}

const variantToCSS = (variant: Variant): string => {
  switch (variant) {
    case 'displayName':
      return 'h1';
    case 'display1':
      return 'h2';
    case 'display2':
      return 'h3';
    case 'title1':
      return 'h4';
    case 'title2':
      return 'h5';
    case 'title3':
      return 'h6';
  }
  return variant;
};

// Typography component
//
// As determined by: https://www.figma.com/design/9iQV86DfnonmL01vyEFqxq/Design-System-v2?node-id=19-2&t=3DSRR1vIg0O9KvWe-1
// @param props
// @param props.variant - variant as specified by Diamond Design System, e.g. display name, card title, etc.
// @param props.component - the actual semantic element, e.g. `h1`, `p`, `div` — overriden by props.variant if h1-6
// @returns styled typography component
export const Typography = (props: PropsWithChildren<TypographyProps>) => {
  const { variant, component, children, className, ...restProps } = props;

  type ComponentProp = React.ElementType;

  const Component: ComponentProp = variant === variantToCSS(variant) ? component || 'div' : variantToCSS(variant) as ComponentProp;
  let cssClass = variant === variantToCSS(variant) ? variantToCSS(variant)+' ': '';
  if (restProps.href) {
    return (
      <Component className={`${cssClass}${className || ''}`} {...restProps}>
        <Link href={restProps.href}>{children}</Link>
      </Component>
    );
  }

  return (
    <Component className={`${cssClass}${className || ''}`} {...restProps}>
      {children}
    </Component>
  );
};

