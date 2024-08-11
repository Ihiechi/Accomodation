import React from 'react'
import Delete from '../Assets/x.png'
import Metaimage from '../Assets/image 66.png'
import Rightarrow from '../Assets/Group.png'
import Faceup from '../Assets/image 69.png'

export default function 
() {
  return (
    <div>
        <div>
            <h3>Connect wallet</h3>
            <img src={Delete} alt="" />
        </div>
        <p>Choose your prefered wallet:</p>
        <form>
             <button>
               <img src={Metaimage} alt="" />
               <span>Metamask</span>
            </button>
            <img src={Rightarrow} alt="" />
        </form>
        <form>
             <button>
               <img src={Faceup} alt="" />
               <span>Metamask</span>
            </button>
            <img src={Rightarrow} alt="" />
        </form>

    </div>
  )
}
