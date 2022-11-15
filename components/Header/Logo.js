import Image from 'next/image'

function Logo() {
  return (
    <div className='flex cursor-pointer items-center space-x-3'>
      <Image src='/Logo.png' width={100} height={40} />
    </div>
  )
}

export default Logo
