import React from 'react';

type Props = {
  children: React.ReactNode;
  title?: string;
  flip?: 'white' | 'light-blue' | 'dark-blue' | 'blueprint' | boolean;
  roundedCorners?: 'top' | 'bottom' | true | false;
  centered?: boolean;
  inner?: boolean;
  margin?: 'top' | 'bottom' | true | false;
  shadow?: boolean;
  padding?: 'less' | 'more' | boolean;
  gap?: 'less' | boolean;
  titleSize?: 'sm';
};

export default function BlockContainer({
  children,
  title,
  flip = 'white',
  roundedCorners = false,
  centered = false,
  inner = false,
  margin = false,
  shadow = false,
  padding = true,
  gap = true,
  titleSize = 'sm',
}: Props) {
  return (
    <div
      className={`${padding === 'less' ? 'py-8' : padding && 'py-16'} ${flip === 'light-blue' && 'bg-blueprint-50'} ${flip === 'white' && 'bg-white'} ${flip === 'dark-blue' && 'bg-[#0A1E3A]'} ${flip === 'blueprint' && 'bg-blueprint'} ${roundedCorners === true && 'rounded-[50px]'} ${roundedCorners === 'top' && 'rounded-t-[50px]'} ${roundedCorners === 'bottom' && 'rounded-b-[50px]'} ${inner && 'self-center md:w-max md:px-12'} ${margin === true && 'my-12'} ${margin === 'top' && 'mt-12'} ${margin === 'bottom' && 'mb-12'} ${shadow && 'shadow-[2px_6px_4px_0_rgba(0,0,0,0.3)]'}`}
    >
      <div
        className={`container ${gap === 'less' ? 'space-y-6 pb-8' : 'space-y-12'} ${centered && 'flex flex-col items-center'}`}
      >
        {title && (
          <div
            className={`flex py-2 font-bold text-blueprint ${titleSize === 'sm' ? 'text-3xl md:text-4xl' : 'text-5xl md:text-6xl'} ${centered && 'text-center'} ${flip === 'dark-blue' || flip === 'blueprint' ? 'text-white' : 'text-blueprint'}`}
          >
            {title}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
