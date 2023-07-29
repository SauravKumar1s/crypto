import React from 'react';

type SmallNavProps = {

};

const SmallNav:React.FC<SmallNavProps> = () => {
    
    return <div>
        <span className='text-center  cursor-pointer text-sm text-slate-700 '>
                Register now - Get 100% Bonus on your first deposit(for verified user) <span className='text-xs px-2 py-1 bg-yallow_500 font-bold'>Redeem</span>
        </span>
    </div>
}
export default SmallNav;