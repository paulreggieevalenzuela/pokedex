import * as React from 'react';
import clsxm from '@/lib/clsxm';

export default function Layout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className='bg-gray-300'>
      <main
        className={clsxm(
          'container mx-auto min-h-screen max-w-xl pt-8 ',
          className
        )}
      >
        {children}
      </main>
    </div>
  );
}
