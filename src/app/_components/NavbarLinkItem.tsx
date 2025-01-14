import Link from 'next/link';
import { PageDataType } from '@/lib/types';

export default function NavbarLinkItem({ page }: { page: PageDataType }) {
  return (
    <Link href={page.href} className="text-white hover:text-blueprint-100">
      {page.name}
    </Link>
  );
}
