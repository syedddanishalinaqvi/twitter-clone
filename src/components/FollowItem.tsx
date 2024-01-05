import Link from 'next/link';
import React from 'react'
import '../css/FollowItem.css'
import Image from 'next/image';
import dp from '../assets/dp.jpeg'

const FollowItem = () => {
  return (
    <Link href='/' className='account'>
        <div className="account-content">
            <div className="dp">
                <Image src={dp} height={40} width={40} alt="dp"></Image>
            </div>
            <div className="name-goto">
                <p><b>Name</b></p>
                <p>@account</p>
            </div>
        </div>
        <div className="follow-button">
            <button>Follow</button>
        </div>
    </Link>
  )
}
export default FollowItem;