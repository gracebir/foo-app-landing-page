import { HiShoppingCart } from 'react-icons/hi'
const ShopCartIcon = ({ count = 0 }: { count: number }) => {
    return (
        <div className="relative cursor-pointer w-8 h-8  flex flex-col items-end">
            <div className='h-4 z-50 rounded-full absolute top-0 w-4 text-[10px] text-center bg-orange-color'>{count}</div>
            <div className='absolute top-2 left-0'>
                <HiShoppingCart size={24} />
            </div>
        </div>
    )
}

export default ShopCartIcon
