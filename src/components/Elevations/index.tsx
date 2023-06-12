import clsxm from '@/lib/clsxm';
import s from './Elevations.module.scss';

type Props = {
  children?: React.ReactNode | string;
  className?: string;
};

export default function Elevations({ children, className }: Props) {
  return <div className={clsxm(s.Elevations, className)}>{children}</div>;
}
