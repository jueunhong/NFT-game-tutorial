const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["ma dong seok", "Zhang Chen", "Pikachu"],
        ["https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201912/17/07712b9e-e451-49c7-a65c-fb94b6dcda0b.jpg", "http://db.kookje.co.kr/news2000/photo/2018/1118/L20181118.99099007485i1.jpg", "https://i.imgur.com/WMB6g9u.png" ],
        [300, 200, 100], [100, 50, 25]
        );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
    let txn;
    // We only have three characters.
    // an NFT w/ the character at index 2 of our array.
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    // Get the value of the NFT's URI.
    let returnedTokenUri = await gameContract.tokenURI(1);
    console.log("Token URI:", returnedTokenUri);
    };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();


  
