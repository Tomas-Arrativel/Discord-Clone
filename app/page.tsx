import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <div className=''>
      <p className='text-3xl font-bold text-indigo-500'>Hello discord clone</p>
      <Button variant='ghost' className='bg-indigo-500'>
        Click me
      </Button>
    </div>
  );
}
