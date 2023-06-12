import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function Loading({ size = 'xs' }: { size?: string }) {
  return (
    <FontAwesomeIcon
      className='animate-spin'
      icon={faSpinner}
      spin
      size={size}
    />
  );
}
