import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { Button, Icon } from '../../components/_shared';
import quadpayImg from '../../assets/images/quadpay.png';
import { ITEMS } from './constants';

const Banner = styled.div.attrs({
  className: 'bg-primary w-full relative overflow-hidden'
})`
  background-image: url(/images/quadpay.png);
  background-position: right;
  background-repeat: no-repeat;
  padding: 96px 135px;

  .title {
    line-height: 92px;
  }
  .logo {
    z-index: 1;
    top: 0;
    right: 0;

    .quadpay-img {
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 72px 110px;
    background-size: 1024px;

    .title {
      font-size: 72px;
      line-height: 72px;
    }
    .subtitle {
      font-size: 16px;
      margin-top: 18px
    }
    buttons {
      margin-top: 24px;
      svg {
        width: 16px;
        height: 16px;
      }
    }
    button {
      ${tw`px-5 py-2`}
      font-size: 12px;
      svg {
        margin-right: 6px;
      }
    }
  }
`;
const Content = styled.div.attrs({
  className: 'w-full z-10',
})`
  padding: 96px 135px;

  .title {
    margin-bottom: 72px;
  }

  @media only screen and (max-width: 1024px) {
    padding: 72px 110px;
    .title {
      font-size: 50px;
      margin-bottom: 50px;
    }
    svg {
      width: 45px;
      height: 45px;
    }
    .content-title {
      font-size: 20px;
      margin-bottom: 12px;
      margin-top: 20px;
    }
    .content-description {
      font-size: 16px;
    }
  }
`;

const Home = () => {
  return (
    <div className="w-screen h-auto min-h-screen">
      <Banner>
        <div className="z-10">
          <div className="w-1/2 sm:w-full z-10">
            <div className="text-white text-92 font-bold title">Quadpay anywhere</div>
            <div className="text-white text-2xl mt-6 subtitle">Shop your favorite brands with the Quadpay app—online or in-store.</div>
          </div>
          <div className="flex mt-8 buttons">
            <Button type="misc" className="mr-3" icon="apple" caption="Get on the App Store" />
            <Button type="misc" icon="google" caption="Get on Google Play" />
          </div>
        </div>
      </Banner>
      <Content>
        <div className="text-64 leading-tiny font-bold title">Partnering with Quadpay</div>
        <div className="flex w-full -mx-4 flex-wrap">
          {ITEMS.map((item) => (
            <div key={item.id} className="w-1/3 p-4 flex flex-col">
              <div>
                <Icon name={item.icon} />
              </div>
              <div className="text-28 font-bold mt-8 mb-4 leading-snug content-title">{item.title}</div>
              <div className="text-18 leading-normal content-description">{item.text}</div>
            </div>
          ))}
        </div>
      </Content>
    </div>
  );
};

export default Home;
