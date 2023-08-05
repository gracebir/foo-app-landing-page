'use client';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from './Elements/NavLink';
import Button from './Elements/Button';
import ShopCartIcon from './Elements/ShopCartIcon';
import { navElts } from '@/lib/data';

const Header = () => {
    return (
        <header className="w-full lg:h-[11.44vh] h-[9vh] bg-header-bg py-4">
            <div className='max-w-7xl px-4 lg:px-0 mx-auto flex gap-8 items-center justify-between'>
                <Link className='col-span-1' href={'/'}>
                    <Image src={'/assets/logo.png'} className='lg:w-[168px] lg:h-[47px] w-[136px] h-[37px]' width={168} height={47} alt='logo' />
                </Link>
                <div className='lg:flex-1 flex flex-row lg:ml-10 ml-0 justify-between'>
                    <div className='hidden lg:block py-4 space-x-10'>
                        {navElts.map((elt, _) => (
                            <NavLink key={elt.id} text={elt.text} href={elt.href} />
                        ))}
                    </div>
                    <div className="flex flex-row gap-4 items-center">
                        <button>
                            <img className='h-4 lg:h-6' src='/assets/search.svg' alt='icon' />
                        </button>
                        <ShopCartIcon count={0} />
                        <Button className='hidden lg:flex' isIconed={true} text='Sign in' />
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header
