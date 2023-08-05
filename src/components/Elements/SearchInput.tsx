'use client'
import { searchProps } from '@/types'
import { RiSearchLine } from 'react-icons/ri'

const SearchInput = ({ isSearched }: searchProps) => {
    return (
        <div
            className={`border flex flex-row items-center bg-white border-clr-gray duration-300 transition-[width] ease-in-out px-3 lg:px-4 py-1 lg:py-2 rounded-full ${isSearched ? 'w-[40%]' : 'w-[0%] px-0 py-0 border-none'}`} >
            <input
                className='outline-none placeholder:text-clr-gray w-full'
                type="text"
                name=""
                id="" />
            <RiSearchLine className="h-[20px] text-clr-gray" />
        </div>
    )
}

export default SearchInput
