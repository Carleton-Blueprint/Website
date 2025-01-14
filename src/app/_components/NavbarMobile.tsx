import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import { GiHamburgerMenu } from 'react-icons/gi';
import { PageDataType } from '@/lib/types';
import { v4 as uuidv4 } from 'uuid';
import NavbarLinkItem from './NavbarLinkItem';

type PropType = {
  data: PageDataType[];
  breakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

/*
  https://github.com/tailwindlabs/tailwindcss/discussions/3461
  Weird problem caused by PurgeCSS.
  <SheetTrigger className={`{breakpoint}:hidden`}> will not work as expected
*/
const styles = {
  sheetTrigger: {
    xs: 'xs:hidden',
    sm: 'sm:hidden',
    md: 'md:hidden',
    lg: 'lg:hidden',
    xl: 'xl:hidden',
  },
};

export default function NavbarMobile({ data, breakpoint = 'md' }: PropType) {
  return (
    <Sheet>
      <SheetTrigger className={styles.sheetTrigger[breakpoint]}>
        <GiHamburgerMenu className="size-7 text-white" />
      </SheetTrigger>
      <SheetContent className="w-[250px] bg-blueprint text-2xl flex justify-center items-center">
        <SheetHeader className="h-4/5">
          <div className="h-3/6 flex flex-col justify-between">
            {data.map(page => (
              <NavbarLinkItem key={uuidv4()} page={page} />
            ))}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
