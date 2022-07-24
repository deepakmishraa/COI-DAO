import ReactPlayer from "react-player";
import React, { useState } from "react";
import ModalComponent from "../atoms/modalComponent";
import { constants } from "../../data/data";
import nftvideo from "../../assets/video/coin.mp4";
import './NftBuy.css';
import { ethers } from "ethers";
import { useEffect } from "react";


const NftBuy = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [walletConnect, setWalletConnect] = useState(true);
  
  
  useEffect(()=>{
    const getWalletData=localStorage.getItem('WalletAddress');
    setWalletConnect(getWalletData);
    console.log(walletConnect);
  },[localStorage.setItem])

  // const connectWalletHandler = () => {
  //   setWalletConnect(true);
  // };

  // usetstate for storing and retrieving wallet details
  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });
  
  // Button handler button for handling a
  // request event for metamask
  const connectWalletHandler = () => {
    // Asking if metamask is already present or not
    if (window.ethereum) {
  
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => 
        // console.log(res)
        // // accountChangeHandler(res[0],
        // //   setWalletConnect(true)
        localStorage.setItem('WalletAddress', res[0])

          );
    } else {
      alert("install metamask extension!!");
    }
  };
  
  // getbalance function for getting a balance in
  // a right format with help of ethers
  const getbalance = (address) => {
  
    // Requesting balance method
    window.ethereum
      .request({ 
        method: "eth_getBalance", 
        params: [address, "latest"] 
      })
      .then((balance) => {
        // Setting balance
        setdata({
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };
  
  // Function for getting handling all events
  const accountChangeHandler = (account) => {
    // Setting an address data
    setdata({
      address: account,
    });

    localStorage.setItem('WalletAddress', account);

  
    // Setting a balance
    getbalance(account);
  };

  return (
    <div className="welcome-container" id="home" >  
      <ModalComponent
        show={modalShow}
        onHide={() => setModalShow(false)}
        heading={"About COI"}
        content={constants.KnowMore.aboutCoi}
      />
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-5">
            <div className="card" id="orangeButton" style={{borderRadius:'0px '}}>
              <video autoPlay loop muted>
                <source src={nftvideo} type="video/mp4" className="border" />
              </video>
            </div>
            <div className="row ">
              <div className="col">
                <p className="welcome-subheading">Total Mint</p>
              </div>
              <div className="col">
                <p className="text-end welcome-subheading">10/7000</p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-8 ">
                {!walletConnect && (
                  <button
                    className="btn addOrangeNeon w-100"
                    onClick={connectWalletHandler}
                    style={{
                      backgroundColor: '#1212',
                      borderColor: '#F4C773',
                      color:'#F4C773',
                      height:'80px',
                      fontSize:'20px',
                      borderRadius: '2rem'
                    }}
                  >
                    Connect Wallet
                  </button>
                )}
                {walletConnect && (
                  <button className="btn addOrangeNeon w-100 "  style={{
                    backgroundColor: '#1212',
                    borderColor: '#F4C773',
                    color:'#F4C773',
                    height:'80px',
                    fontSize:'20px',
                    borderRadius: '2rem'
                  }}>
                    mint NFT
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 offset-md-1  ">
            <div className=" align-items-center d-flex  justify-content-center h-100">
              <div>
                <p className="welcome-heading text-center ">
                  COLOURS OF INDIA (COI) DAO
                </p>
                <p className='welcome-subheading'>
              We are on a mission to bring Indian NFT art to the world! As the
              first DAO of its kind in the subcontinent, we aim to develop a
              vibrant culture of diversity, openness and freedom of expression.
              Join the movement.
            </p>
            <p>
              <a
                href={props.data ? props.data.discord : '/'}
                className='btn btn-custom btn-lg know-more-anchor'
                style={{
                  backgroundColor: '#4daeb4',
                  borderColor: '#4daeb4',
                }}
                target='blank'
                onClick={(event) => {
                  event.preventDefault();
                  setModalShow(true);
                }}
              >
                Know More
              </a>
            </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NftBuy;
