import { useState } from "react";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import PropTypes from 'prop-types'
function ProductCard({data}) {
    const {brand, model, price, ram,  operatingSystem, screen, camera, } = data;
    const [isLiked, setIsLiked] = useState(false)
  return (
    <div className="w-full border-b-[1px] ">
      <div className="flex w-full md:py-8">
        <div className="md:w-[36%] h-full flex justify-center md:px-12 relative">
            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/2/x/-original-imagtyxg7mdjhfqm.jpeg?q=70" alt="" />
            <button onClick={() => setIsLiked(isLiked => !isLiked)} className="absolute right-5 top-2 bg-white">

           {isLiked ?<BsFillHeartFill fill="red"/> : <BsHeart />}
            </button>
        </div>
        <div className="w-full px-4">
            <div className="flex md:items-center md:flex-row flex-col">
                <div className="font-semibold md:text-xl md:w-3/5 w-full  flex gap-1">
                    <span>{brand}</span>
                    <span>{model}</span>
                    <span>{ram}</span>
                </div>
                <div className="font-bold text-2xl ">{price}</div>
            </div>
            <div className="py-4 overflow-hidden ">
                <ul className="list-disc px-4 md:w-3/4  font-light">
                    <li>{ram} ram | 128 Gb ROM | expandable upto 1 Tb</li>
                    <li>16.76cm({screen?.size}Inch) {screen?.type} display</li>
                    <li>{camera?.main?.resolution} | {camera?.front?.resolution} front camera</li>
                    <li>{operatingSystem}</li>
                    <li>1 year manufacture warrenty for device and 6 month manufacturer warrenty for In-Box Accessories</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

ProductCard.propTypes = {
    data:PropTypes.objectOf()
}
