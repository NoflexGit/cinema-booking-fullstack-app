import { cn } from '@repo/utils';

type Props = {
  size?: 'sm' | 'md' | 'lg';
};

export const Logo = ({ size = 'md' }: Props) => {
  const classNames = cn(
    {
      ['text-2xl']: size === 'sm',
      ['text-4xl']: size === 'md',
      ['text-6xl']: size === 'lg',
    },
    'font-extrabold tracking-widest uppercase',
  );

  return (
    <div className={classNames} data-test-id="logo">
      <span className="text-indigo-400">n</span>
      <span className="text-purple-400">o</span>
      <span className="text-pink-400">m</span>
      <span className="text-rose-300">o</span>
    </div>
  );
};
