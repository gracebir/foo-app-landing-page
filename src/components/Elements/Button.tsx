import Image from 'next/image'

type buttonProps = {
    text: string
    isIconed?: boolean
}

const Button = ({ text, isIconed = false }: buttonProps) => {
    return (
        <button className='flex gap-2 lg:px-6 px-4 lg:py-2 py-1 bg-orange-color hover:shadow-lg rounded-full duration-300'>
            {isIconed && (<Image src={"/assets/sign-in.svg"} width={15} height={17} alt='sign' />)}
            <span className='text-sm text-head-text font-bold'>{text}</span>
        </button>
    )
}

export default Button
