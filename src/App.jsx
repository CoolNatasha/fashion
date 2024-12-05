import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/Heading'
import Container from './components/Container'
import Flex from './components/Flex'
import Image from './components/Image'
import logo from './assets/logo.png'
import Menu from './components/Menu'
import Button from './components/Button'
import model1 from './assets/model1.png'
import model2 from './assets/model2.png'
import model3 from './assets/model3.png'
import model4 from './assets/model4.png'
import model5 from './assets/model5.png'
import model6 from './assets/model6.png'
import model7 from './assets/model7.png'
import { FaStar } from "react-icons/fa";

function App() {
 

  return (
    <>
    {/* {Heading part start } */}
    <div className="py-[30px] bg-primaryColor">
      <Container className={"max-w-headerContainer"}>
        <Flex className={'justify-between items-center'}>
          <div className="w-[10%]">
            <Image src={logo} alt={logo}/>
          </div>
          <div className="w-[75%]">
            <Flex className={'justify-center space-x-12'}>
            <Menu mText={"Man"} className={'font-pop font-semibold text-[24px]'}/>
            <Menu mText={"Woman"} className={'font-pop font-semibold text-[24px]'}/>
            <Menu mText={"Kids"} className={'font-pop font-semibold text-[24px]'}/>
            <Menu mText={"Collections"} className={'font-pop font-semibold text-[24px]'}/>
            <Menu mText={"Trends"} className={'font-pop font-semibold text-[24px]'}/>
            </Flex>
          </div>
          <div className="w-[15%] flex gap-x-4">
            <Button btnText={'Login'} className={'py-[15px] px-[30px] font-pop font-semibold text-[22px] border border-bordercolor rounded-2xl hover:bg-bordercolor shadow-lg'}/>
            <Button btnText={'SignUp'} className={'  py-[15px] px-[30px]  font-pop font-semibold text-[22px] border border-bordercolor rounded-2xl hover:bg-bordercolor shadow-lg '}/>
          </div>
        </Flex>
      </Container>
    </div>
    {/* {Heading part End } */}
    {/* {Banner part start } */}
    <div className="py-[50px] bg-primaryColor">
      <Container className={'max-w-bannerContainer'}>
        <Flex>
          <div className="w-[50%]">
            <Heading text={'Find The Best Fashion Style For You'} as={"h1"} className={'font-pop font-semibold text-[64px] pr-[100px]'}/>
            <Heading text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra.'} as={'p'} className={'font-pop text-[22px] pr-[100px] mt-[10px] mb-[40px]'}/>
            <Button btnText={'Shop Now'} className={'py-[15px] px-[30px]  font-pop font-semibold text-[22px] text-white  bg-black rounded-2xl hover:bg-bordercolor shadow-lg'}/>
          </div>
          <div className="w-[50%]">
            <Image src={model1} alt={model1}/>
          </div>
        </Flex>
      </Container>
    </div>
    {/* {Banner part End } */}
    {/* {About part start } */}
    <div className="">
      <Container className={'max-w-bannerContainer'}>
      <Heading text={'New Collection'} as={'h2'} className={'font-frank font-bold text-[60px] py-[40px] text-center'}/>
      <Flex className={'pb-[40px] gap-x-8'}>
        
        <div className="w-[350px] w-full relative ">
          
        <Image src={model2} alt={model2}  className={""}/>
        <Button btnText={"Sweater"} className={"py-[10px] px-[100px] font-pop text-[22px] text-black bg-white rounded-2xl hover:bg-bordercolor shadow-lg bottom-5 left-[30px] -transelate-x-1/2 absolute"}/>
        </div>
        <div className="w-[350px] w-full relative">
          <Image src={model3} alt={model3} className={""}/>
          <Button btnText={"Jeans"} className={"py-[10px] px-[100px] font-pop text-[22px] text-black bg-white rounded-2xl hover:bg-bordercolor shadow-lg bottom-5 left-[30px] -transelate-x-1/2 absolute"}/>
        </div>
        <div className="w-[350px] w-full relative">
          <Image src={model4} alt={model4} className={""}/>
          <Button btnText={"Baskets"} className={"py-[10px] px-[100px] font-pop text-[22px] text-black bg-white rounded-2xl hover:bg-bordercolor shadow-lg bottom-5 left-[30px] -transelate-x-1/2 absolute"}/>
        </div>
      </Flex>
      </Container>
    </div>
    {/* {About part end } */}
    {/* {Woman part start } */}
    <div className="py-[40px]">
      <Container className={"max-w-bannerContainer"}>
       <Flex>
        <div className="w-[60%] relative">
          <Flex>
            <div className="w-[600px] w-full">
              <Image src={model5} alt={model5}/>
            </div>
            <div className="w-[900px] py-[20px] bg-primaryColor absolute top-[550px] left-[450px] rounded-2xl">
              <Flex>
                <div className="p-[50px] ">
                  <Flex>
                    <div>
                  <Heading text={"2010"} as={"h3"} className={"font-pop font-bold text-[60px] text-black "}/>
                  <Heading text={"Founded"} as={'h4'} className={"font-pop font-bold text-[22px] text-black  "}/>
                  </div>
                  <div className="p-[2px] bg-black ml-[20px]"></div>
                  </Flex>
                </div>
                <div className="p-[50px]  ">
                  <Flex>
                    <div>
                <Heading text={"5000+"} as={"h3"} className={"font-pop font-bold text-[60px] text-black "}/>
                <Heading text={"Product Sold"} as={'h4'} className={"font-pop font-bold text-[22px] text-black "}/>
                </div>
                <div className="p-[2px] bg-black ml-[20px]"></div>
                </Flex>
                </div>
                <div className="p-[50px]  ">
                <Flex>
                    <div>
                <Heading text={"4500+"} as={"h3"} className={"font-pop font-bold text-[60px] text-black "}/>
                <Heading text={"Best Reviews"} as={'h4'} className={"font-pop font-bold text-[22px] text-black "}/>
                </div>
                <div className="p-[2px] bg-black ml-[20px]"></div>
                </Flex>
                </div>
              </Flex>
            </div>
          </Flex>
        </div>
        <div className="w-[40%]">
          <Heading text={"Best Fashion Since 2010"} as={"h2"} className={"fotn-frank font-bold text-[64px] text-black"}/>
          <Heading text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra."} as={"p"} className={"fotn-pop font-semibold text-[22px] text-black mt-[20px] pr-[200px]"}/>
        </div>
       </Flex>
      </Container>
    </div>
    {/* {Seller part start } */}
     <div className="py-[50px] bg-SellerColor mt-[200px]">
      <Container className={"max-w-bannerContainer"}>
       <Flex>
        <div className="w-[50%]">
        <Heading text={'Best Seller Product'} as={"h1"} className={'font-frank font-bold text-[64px] pr-[100px] text-white'}/>
            <Heading text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus.'} as={'p'} className={'font-frank font-bold text-[24px] pr-[200px] mt-[10px] mb-[40px] text-white'}/>
            <Button btnText={'Learn More'} className={'py-[15px] px-[80px]  font-pop font-semibold text-[24px] text-white  bg-black rounded-2xl hover:bg-bordercolor shadow-lg'}/>
        </div>
        <div className="w-[50%]">
          <Flex className={"gap-x-8"}>
            <div className="w-[366px] w-full ">
              <Image src={model6} alt={model6} className={"h-[435px] w-full" }/>
              <div className={"bg-white h-[135px] p-[20px]"}>
              <Flex className={"space-x-4"}>
              <FaStar className={"text-[#FFAF37] text-[24px]"} />
              <FaStar className={"text-[#FFAF37] text-[24px]"} />
              <FaStar className={"text-[#FFAF37] text-[24px]"} />
              <FaStar className={"text-[#FFAF37] text-[24px]"} />
              <FaStar className={"text-[#FFAF37] text-[24px]"} />
              </Flex>
              <Heading text={"Sweater Shirt"} as={"h4"} className={"font-pop font-semibold text-[22px] mt-[10px]"}/>
              <Flex className={"gap-x-10"}>
                <div className="font-pop text-[24px] text-[#C4C4C4]">$45.99</div>
                <div className="font-pop text-[24px] text-black">$35.99</div>
              </Flex>
              </div>
            </div>
            <div className={"w-[366px] w-full"}>
            <Image src={model7} alt={model7} className={"h-[435px] w-full" }/>
              <div className={"bg-white h-[135px] p-[20px]"}>
              <Flex className={"space-x-4"}>
              <FaStar className={"text-[#FFAF37] text-[24px]"} />
              <FaStar className={"text-[#FFAF37] text-[24px]"} />
              <FaStar className={"text-[#FFAF37] text-[24px]"} />
              <FaStar className={"text-[#FFAF37] text-[24px]"} />
              <FaStar className={"text-[#FFAF37] text-[24px]"} />
              </Flex>
              <Heading text={"Pants fasion"} as={"h4"} className={"font-pop font-semibold text-[22px] mt-[10px]"}/>
              <Flex className={"gap-x-10"}>
                <div className="font-pop text-[24px] text-[#C4C4C4]">$55</div>
                <div className="font-pop text-[24px] text-black">$44.99</div>
              </Flex>
              </div>
            </div>
          </Flex>
        </div>
       </Flex>
      </Container>
     </div>

    </>
  )
}

export default App
