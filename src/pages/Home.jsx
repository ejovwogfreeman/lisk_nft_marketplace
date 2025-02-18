import React, { useContext } from "react";
import { BiWallet } from "react-icons/bi";
import { BiFolder } from "react-icons/bi";
import { BiDiamond } from "react-icons/bi";
import { BiCard } from "react-icons/bi";
import { Web3Context } from "../contexts/nftContext";

const Home = () => {
  // const { listAllNFTs } = useContext(Web3Context);
  // console.log(listAllNFTs());
  return (
    <main>
      <article>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="h1 hero-title">
                Discover digital art sell your specific <span>NFT</span>
              </h1>

              <p className="hero-text">
                Partner with one of the world’s largest retailers to showcase
                your brand and products.
              </p>

              <div className="btn-group">
                <a href="/explore" className="btn btn-primary">
                  Explore more
                </a>

                <a href="/create" className="btn btn-secondary">
                  Create now
                </a>
              </div>
            </div>

            <figure className="hero-banner">
              <img
                src={new URL("../assets/hero-banner.jpg", import.meta.url).href}
                alt="nft art"
              />
            </figure>
          </div>
        </section>
        <section className="new-product">
          <div className="container">
            <div className="section-header-wrapper">
              <h2 className="h2 section-title">Newest Items</h2>

              <button className="btn btn-primary">View all</button>
            </div>

            <ul className="product-list">
              <li className="product-item">
                <div className="product-card" tabIndex="0">
                  <figure className="product-banner">
                    <img
                      src={
                        new URL("../assets/new-item-1.jpg", import.meta.url)
                          .href
                      }
                      alt="Dimond riding a blue body art"
                    />

                    <div className="product-actions">
                      <button className="product-card-menu">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                      </button>

                      <button className="add-to-whishlist" data-whishlist-btn>
                        <ion-icon name="heart"></ion-icon>
                      </button>
                    </div>

                    <button className="place-bid-btn">Place bid</button>
                  </figure>

                  <div className="product-content">
                    <a href="#" className="h4 product-title">
                      Dimond riding a blue body art
                    </a>

                    <div className="product-meta">
                      <div className="product-author">
                        <figure className="author-img">
                          <img
                            src={
                              new URL(
                                "../assets/bidding-user.png",
                                import.meta.url
                              ).href
                            }
                            alt="Jack Reacher"
                          />
                        </figure>

                        <div className="author-content">
                          <h4 className="h5 author-title">Jack R</h4>

                          <a href="#" className="author-username">
                            @jackr
                          </a>
                        </div>
                      </div>

                      <div className="product-price">
                        <data value="0.568">0.568ETH</data>

                        <p className="label">Current Bid</p>
                      </div>
                    </div>

                    <div className="product-footer">
                      <p className="total-bid">12+ Place Bid.</p>

                      <button className="tag">New</button>
                    </div>
                  </div>
                </div>
              </li>

              <li className="product-item">
                <div className="product-card" tabIndex="0">
                  <figure className="product-banner">
                    <img
                      src={
                        new URL("../assets/new-item-2.jpg", import.meta.url)
                          .href
                      }
                      alt="Dimond riding a blue body art"
                    />

                    <div className="product-actions">
                      <button className="product-card-menu">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                      </button>

                      <button className="add-to-whishlist" data-whishlist-btn>
                        <ion-icon name="heart"></ion-icon>
                      </button>
                    </div>

                    <button className="place-bid-btn">Place bid</button>
                  </figure>

                  <div className="product-content">
                    <a href="#" className="h4 product-title">
                      Dimond riding a blue body art
                    </a>

                    <div className="product-meta">
                      <div className="product-author">
                        <figure className="author-img">
                          <img
                            src={
                              new URL(
                                "../assets/bidding-user.png",
                                import.meta.url
                              ).href
                            }
                            alt="Jack Reacher"
                          />
                        </figure>

                        <div className="author-content">
                          <h4 className="h5 author-title">Jack R</h4>

                          <a href="#" className="author-username">
                            @jackr
                          </a>
                        </div>
                      </div>

                      <div className="product-price">
                        <data value="0.568">0.568ETH</data>

                        <p className="label">Current Bid</p>
                      </div>
                    </div>

                    <div className="product-footer">
                      <p className="total-bid">12+ Place Bid.</p>

                      <button className="tag">New</button>
                    </div>
                  </div>
                </div>
              </li>

              <li className="product-item">
                <div className="product-card" tabIndex="0">
                  <figure className="product-banner">
                    <img
                      src={
                        new URL("../assets/new-item-3.jpg", import.meta.url)
                          .href
                      }
                      alt="Dimond riding a blue body art"
                    />

                    <div className="product-actions">
                      <button className="product-card-menu">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                      </button>

                      <button className="add-to-whishlist" data-whishlist-btn>
                        <ion-icon name="heart"></ion-icon>
                      </button>
                    </div>

                    <button className="place-bid-btn">Place bid</button>
                  </figure>

                  <div className="product-content">
                    <a href="#" className="h4 product-title">
                      Dimond riding a blue body art
                    </a>

                    <div className="product-meta">
                      <div className="product-author">
                        <figure className="author-img">
                          <img
                            src={
                              new URL(
                                "../assets/bidding-user.png",
                                import.meta.url
                              ).href
                            }
                            alt="Jack Reacher"
                          />
                        </figure>

                        <div className="author-content">
                          <h4 className="h5 author-title">Jack R</h4>

                          <a href="#" className="author-username">
                            @jackr
                          </a>
                        </div>
                      </div>

                      <div className="product-price">
                        <data value="0.568">0.568ETH</data>

                        <p className="label">Current Bid</p>
                      </div>
                    </div>

                    <div className="product-footer">
                      <p className="total-bid">12+ Place Bid.</p>

                      <button className="tag">New</button>
                    </div>
                  </div>
                </div>
              </li>

              <li className="product-item">
                <div className="product-card" tabIndex="0">
                  <figure className="product-banner">
                    <img
                      src={
                        new URL("../assets/new-item-4.jpg", import.meta.url)
                          .href
                      }
                      alt="Dimond riding a blue body art"
                    />

                    <div className="product-actions">
                      <button className="product-card-menu">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                      </button>

                      <button className="add-to-whishlist" data-whishlist-btn>
                        <ion-icon name="heart"></ion-icon>
                      </button>
                    </div>

                    <button className="place-bid-btn">Place bid</button>
                  </figure>

                  <div className="product-content">
                    <a href="#" className="h4 product-title">
                      Dimond riding a blue body art
                    </a>

                    <div className="product-meta">
                      <div className="product-author">
                        <figure className="author-img">
                          <img
                            src={
                              new URL(
                                "../assets/bidding-user.png",
                                import.meta.url
                              ).href
                            }
                            alt="Jack Reacher"
                          />
                        </figure>

                        <div className="author-content">
                          <h4 className="h5 author-title">Jack R</h4>

                          <a href="#" className="author-username">
                            @jackr
                          </a>
                        </div>
                      </div>

                      <div className="product-price">
                        <data value="0.568">0.568ETH</data>

                        <p className="label">Current Bid</p>
                      </div>
                    </div>

                    <div className="product-footer">
                      <p className="total-bid">12+ Place Bid.</p>

                      <button className="tag">New</button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="about">
          <div className="container">
            <h2 className="h2 about-title">Create and sell your NFTs</h2>

            <ol className="about-list">
              <li className="about-item">
                <div className="about-card">
                  <div className="card-number">01</div>

                  <div className="card-icon">
                    {/* <img
                      src={
                        new URL(
                          "../assets/single-create-sell-item-1.png",
                          import.meta.url
                        ).href
                      }
                      alt="wallet icon"
                    /> */}
                    <BiWallet />
                  </div>

                  <h3 className="h3 about-card-title">Set up Your Wallet</h3>

                  <p className="about-card-text">
                    There are many variations of passagi Ipsum available but the
                    majorty have eration in some form, by injected
                  </p>
                </div>
              </li>

              <li className="about-item">
                <div className="about-card">
                  <div className="card-number">02</div>

                  <div className="card-icon">
                    {/* <img
                      src={
                        new URL(
                          "../assets/single-create-sell-item-2.png",
                          import.meta.url
                        ).href
                      }
                      alt="collection icon"
                    /> */}
                    <BiCard />
                  </div>

                  <h3 className="h3 about-card-title">
                    Create Your Collection
                  </h3>

                  <p className="about-card-text">
                    There are many variations of passagi Ipsum available but the
                    majorty have eration in some form, by injected
                  </p>
                </div>
              </li>

              <li className="about-item">
                <div className="about-card">
                  <div className="card-number">03</div>

                  <div className="card-icon">
                    {/* <img
                      src={
                        new URL(
                          "../assets/single-create-sell-item-3.png",
                          import.meta.url
                        ).href
                      }
                      alt="folder icon"
                    /> */}
                    <BiFolder />
                  </div>

                  <h3 className="h3 about-card-title">Add Your NFT's</h3>

                  <p className="about-card-text">
                    There are many variations of passagi Ipsum available but the
                    majorty have eration in some form, by injected
                  </p>
                </div>
              </li>

              <li className="about-item">
                <div className="about-card">
                  <div className="card-number">04</div>

                  <div className="card-icon">
                    {/* <img
                      src={
                        new URL(
                          "../assets/single-create-sell-item-4.png",
                          import.meta.url
                        ).href
                      }
                      alt="diamond icon"
                    /> */}
                    <BiDiamond />
                  </div>

                  <h3 className="h3 about-card-title">Sell Your NFT's</h3>

                  <p className="about-card-text">
                    There are many variations of passagi Ipsum available but the
                    majorty have eration in some form, by injected
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="explore-product">
          <div className="container">
            <div className="section-header-wrapper">
              <h2 className="h2 section-title">Explore Product</h2>

              <button className="btn btn-primary">Explore</button>
            </div>

            <ul className="product-list">
              <li className="product-item">
                <div className="product-card" tabIndex="0">
                  <figure className="product-banner">
                    <img
                      src={
                        new URL(
                          "../assets/explore-product-1.jpg",
                          import.meta.url
                        ).href
                      }
                      alt="Dimond riding a blue body art"
                    />

                    <div className="product-actions">
                      <button className="product-card-menu">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                      </button>

                      <button className="add-to-whishlist" data-whishlist-btn>
                        <ion-icon name="heart"></ion-icon>
                      </button>
                    </div>

                    <button className="place-bid-btn">Place bid</button>
                  </figure>

                  <div className="product-content">
                    <a href="#" className="h4 product-title">
                      Dimond riding a blue body art
                    </a>

                    <div className="product-meta">
                      <div className="product-author">
                        <figure className="author-img">
                          <img
                            src={
                              new URL(
                                "../assets/bidding-user.png",
                                import.meta.url
                              ).href
                            }
                            alt="Jack Reacher"
                          />
                        </figure>

                        <div className="author-content">
                          <h4 className="h5 author-title">Jack R</h4>

                          <a href="#" className="author-username">
                            @jackr
                          </a>
                        </div>
                      </div>

                      <div className="product-price">
                        <data value="0.568">0.568ETH</data>

                        <p className="label">Current Bid</p>
                      </div>
                    </div>

                    <div className="product-footer">
                      <p className="total-bid">12+ Place Bid.</p>

                      <button className="tag">New</button>
                    </div>
                  </div>
                </div>
              </li>

              <li className="product-item">
                <div className="product-card" tabIndex="0">
                  <figure className="product-banner">
                    <img
                      src={
                        new URL(
                          "../assets/explore-product-2.jpg",
                          import.meta.url
                        ).href
                      }
                      alt="Dimond riding a blue body art"
                    />

                    <div className="product-actions">
                      <button className="product-card-menu">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                      </button>

                      <button className="add-to-whishlist" data-whishlist-btn>
                        <ion-icon name="heart"></ion-icon>
                      </button>
                    </div>

                    <button className="place-bid-btn">Place bid</button>
                  </figure>

                  <div className="product-content">
                    <a href="#" className="h4 product-title">
                      Dimond riding a blue body art
                    </a>

                    <div className="product-meta">
                      <div className="product-author">
                        <figure className="author-img">
                          <img
                            src={
                              new URL(
                                "../assets/bidding-user.png",
                                import.meta.url
                              ).href
                            }
                            alt="Jack Reacher"
                          />
                        </figure>

                        <div className="author-content">
                          <h4 className="h5 author-title">Jack R</h4>

                          <a href="#" className="author-username">
                            @jackr
                          </a>
                        </div>
                      </div>

                      <div className="product-price">
                        <data value="0.568">0.568ETH</data>

                        <p className="label">Current Bid</p>
                      </div>
                    </div>

                    <div className="product-footer">
                      <p className="total-bid">12+ Place Bid.</p>

                      <button className="tag">New</button>
                    </div>
                  </div>
                </div>
              </li>

              <li className="product-item">
                <div className="product-card" tabIndex="0">
                  <figure className="product-banner">
                    <img
                      src={
                        new URL(
                          "../assets/explore-product-3.jpg",
                          import.meta.url
                        ).href
                      }
                      alt="Dimond riding a blue body art"
                    />

                    <div className="product-actions">
                      <button className="product-card-menu">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                      </button>

                      <button className="add-to-whishlist" data-whishlist-btn>
                        <ion-icon name="heart"></ion-icon>
                      </button>
                    </div>

                    <button className="place-bid-btn">Place bid</button>
                  </figure>

                  <div className="product-content">
                    <a href="#" className="h4 product-title">
                      Dimond riding a blue body art
                    </a>

                    <div className="product-meta">
                      <div className="product-author">
                        <figure className="author-img">
                          <img
                            src={
                              new URL(
                                "../assets/bidding-user.png",
                                import.meta.url
                              ).href
                            }
                            alt="Jack Reacher"
                          />
                        </figure>

                        <div className="author-content">
                          <h4 className="h5 author-title">Jack R</h4>

                          <a href="#" className="author-username">
                            @jackr
                          </a>
                        </div>
                      </div>

                      <div className="product-price">
                        <data value="0.568">0.568ETH</data>

                        <p className="label">Current Bid</p>
                      </div>
                    </div>

                    <div className="product-footer">
                      <p className="total-bid">12+ Place Bid.</p>

                      <button className="tag">New</button>
                    </div>
                  </div>
                </div>
              </li>

              <li className="product-item">
                <div className="product-card" tabIndex="0">
                  <figure className="product-banner">
                    <img
                      src={
                        new URL(
                          "../assets/explore-product-4.jpg",
                          import.meta.url
                        ).href
                      }
                      alt="Dimond riding a blue body art"
                    />

                    <div className="product-actions">
                      <button className="product-card-menu">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                      </button>

                      <button className="add-to-whishlist" data-whishlist-btn>
                        <ion-icon name="heart"></ion-icon>
                      </button>
                    </div>

                    <button className="place-bid-btn">Place bid</button>
                  </figure>

                  <div className="product-content">
                    <a href="#" className="h4 product-title">
                      Dimond riding a blue body art
                    </a>

                    <div className="product-meta">
                      <div className="product-author">
                        <figure className="author-img">
                          <img
                            src={
                              new URL(
                                "../assets/bidding-user.png",
                                import.meta.url
                              ).href
                            }
                            alt="Jack Reacher"
                          />
                        </figure>

                        <div className="author-content">
                          <h4 className="h5 author-title">Jack R</h4>

                          <a href="#" className="author-username">
                            @jackr
                          </a>
                        </div>
                      </div>

                      <div className="product-price">
                        <data value="0.568">0.568ETH</data>

                        <p className="label">Current Bid</p>
                      </div>
                    </div>

                    <div className="product-footer">
                      <p className="total-bid">12+ Place Bid.</p>

                      <button className="tag">New</button>
                    </div>
                  </div>
                </div>
              </li>

              <li className="product-item">
                <div className="product-card" tabIndex="0">
                  <figure className="product-banner">
                    <img
                      src={
                        new URL(
                          "../assets/explore-product-5.jpg",
                          import.meta.url
                        ).href
                      }
                      alt="Dimond riding a blue body art"
                    />

                    <div className="product-actions">
                      <button className="product-card-menu">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                      </button>

                      <button className="add-to-whishlist" data-whishlist-btn>
                        <ion-icon name="heart"></ion-icon>
                      </button>
                    </div>

                    <button className="place-bid-btn">Place bid</button>
                  </figure>

                  <div className="product-content">
                    <a href="#" className="h4 product-title">
                      Dimond riding a blue body art
                    </a>

                    <div className="product-meta">
                      <div className="product-author">
                        <figure className="author-img">
                          <img
                            src={
                              new URL(
                                "../assets/bidding-user.png",
                                import.meta.url
                              ).href
                            }
                            alt="Jack Reacher"
                          />
                        </figure>

                        <div className="author-content">
                          <h4 className="h5 author-title">Jack R</h4>

                          <a href="#" className="author-username">
                            @jackr
                          </a>
                        </div>
                      </div>

                      <div className="product-price">
                        <data value="0.568">0.568ETH</data>

                        <p className="label">Current Bid</p>
                      </div>
                    </div>

                    <div className="product-footer">
                      <p className="total-bid">12+ Place Bid.</p>

                      <button className="tag">New</button>
                    </div>
                  </div>
                </div>
              </li>

              <li className="product-item">
                <div className="product-card" tabIndex="0">
                  <figure className="product-banner">
                    <img
                      src={
                        new URL(
                          "../assets/explore-product-6.jpg",
                          import.meta.url
                        ).href
                      }
                      alt="Dimond riding a blue body art"
                    />

                    <div className="product-actions">
                      <button className="product-card-menu">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                      </button>

                      <button className="add-to-whishlist" data-whishlist-btn>
                        <ion-icon name="heart"></ion-icon>
                      </button>
                    </div>

                    <button className="place-bid-btn">Place bid</button>
                  </figure>

                  <div className="product-content">
                    <a href="#" className="h4 product-title">
                      Dimond riding a blue body art
                    </a>

                    <div className="product-meta">
                      <div className="product-author">
                        <figure className="author-img">
                          <img
                            src={
                              new URL(
                                "../assets/bidding-user.png",
                                import.meta.url
                              ).href
                            }
                            alt="Jack Reacher"
                          />
                        </figure>

                        <div className="author-content">
                          <h4 className="h5 author-title">Jack R</h4>

                          <a href="#" className="author-username">
                            @jackr
                          </a>
                        </div>
                      </div>

                      <div className="product-price">
                        <data value="0.568">0.568ETH</data>

                        <p className="label">Current Bid</p>
                      </div>
                    </div>

                    <div className="product-footer">
                      <p className="total-bid">12+ Place Bid.</p>

                      <button className="tag">New</button>
                    </div>
                  </div>
                </div>
              </li>

              <li className="product-item">
                <div className="product-card" tabIndex="0">
                  <figure className="product-banner">
                    <img
                      src={
                        new URL(
                          "../assets/explore-product-7.jpg",
                          import.meta.url
                        ).href
                      }
                      alt="Dimond riding a blue body art"
                    />

                    <div className="product-actions">
                      <button className="product-card-menu">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                      </button>

                      <button className="add-to-whishlist" data-whishlist-btn>
                        <ion-icon name="heart"></ion-icon>
                      </button>
                    </div>

                    <button className="place-bid-btn">Place bid</button>
                  </figure>

                  <div className="product-content">
                    <a href="#" className="h4 product-title">
                      Dimond riding a blue body art
                    </a>

                    <div className="product-meta">
                      <div className="product-author">
                        <figure className="author-img">
                          <img
                            src={
                              new URL(
                                "../assets/bidding-user.png",
                                import.meta.url
                              ).href
                            }
                            alt="Jack Reacher"
                          />
                        </figure>

                        <div className="author-content">
                          <h4 className="h5 author-title">Jack R</h4>

                          <a href="#" className="author-username">
                            @jackr
                          </a>
                        </div>
                      </div>

                      <div className="product-price">
                        <data value="0.568">0.568ETH</data>

                        <p className="label">Current Bid</p>
                      </div>
                    </div>

                    <div className="product-footer">
                      <p className="total-bid">12+ Place Bid.</p>

                      <button className="tag">New</button>
                    </div>
                  </div>
                </div>
              </li>

              <li className="product-item">
                <div className="product-card" tabIndex="0">
                  <figure className="product-banner">
                    <img
                      src={
                        new URL(
                          "../assets/explore-product-8.jpg",
                          import.meta.url
                        ).href
                      }
                      alt="Dimond riding a blue body art"
                    />

                    <div className="product-actions">
                      <button className="product-card-menu">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                      </button>

                      <button className="add-to-whishlist" data-whishlist-btn>
                        <ion-icon name="heart"></ion-icon>
                      </button>
                    </div>

                    <button className="place-bid-btn">Place bid</button>
                  </figure>

                  <div className="product-content">
                    <a href="#" className="h4 product-title">
                      Dimond riding a blue body art
                    </a>

                    <div className="product-meta">
                      <div className="product-author">
                        <figure className="author-img">
                          <img
                            src={
                              new URL(
                                "../assets/bidding-user.png",
                                import.meta.url
                              ).href
                            }
                            alt="Jack Reacher"
                          />
                        </figure>

                        <div className="author-content">
                          <h4 className="h5 author-title">Jack R</h4>

                          <a href="#" className="author-username">
                            @jackr
                          </a>
                        </div>
                      </div>

                      <div className="product-price">
                        <data value="0.568">0.568ETH</data>

                        <p className="label">Current Bid</p>
                      </div>
                    </div>

                    <div className="product-footer">
                      <p className="total-bid">12+ Place Bid.</p>

                      <button className="tag">New</button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="top-seller">
          <div className="container">
            <h2 className="h2 top-seller-title">
              Top seller in <span>1</span> day
              <ion-icon name="chevron-down"></ion-icon>
            </h2>

            <ol className="top-seller-list">
              <li className="top-seller-item">
                <a href="#" className="top-seller-card">
                  <div className="card-number">01</div>

                  <figure className="card-avatar">
                    <img
                      src={
                        new URL("../assets/seller-01.png", import.meta.url).href
                      }
                      alt="Brodband"
                    />

                    <div className="avatar-badge">
                      <ion-icon name="checkmark-outline"></ion-icon>
                    </div>
                  </figure>

                  <div className="card-content">
                    <h3 className="h5 card-title">Brodband</h3>

                    <data value="2500000">$2500,000</data>
                  </div>
                </a>
              </li>

              <li className="top-seller-item">
                <a href="#" className="top-seller-card">
                  <div className="card-number">02</div>

                  <figure className="card-avatar">
                    <img
                      src={
                        new URL("../assets/seller-02.png", import.meta.url).href
                      }
                      alt="Alexander"
                    />
                  </figure>

                  <div className="card-content">
                    <h3 className="h5 card-title">Alexander</h3>

                    <data value="2500000">$2500,000</data>
                  </div>
                </a>
              </li>

              <li className="top-seller-item">
                <a href="#" className="top-seller-card">
                  <div className="card-number">03</div>

                  <figure className="card-avatar">
                    <img
                      src={
                        new URL("../assets/seller-03.png", import.meta.url).href
                      }
                      alt="William Jeck"
                    />
                  </figure>

                  <div className="card-content">
                    <h3 className="h5 card-title">William Jeck</h3>

                    <data value="2500000">$2500,000</data>
                  </div>
                </a>
              </li>

              <li className="top-seller-item">
                <a href="#" className="top-seller-card">
                  <div className="card-number">04</div>

                  <figure className="card-avatar">
                    <img
                      src={
                        new URL("../assets/seller-04.png", import.meta.url).href
                      }
                      alt="Henry Jhon"
                    />

                    <div className="avatar-badge">
                      <ion-icon name="checkmark-outline"></ion-icon>
                    </div>
                  </figure>

                  <div className="card-content">
                    <h3 className="h5 card-title">Henry Jhon</h3>

                    <data value="2500000">$2500,000</data>
                  </div>
                </a>
              </li>

              <li className="top-seller-item">
                <a href="#" className="top-seller-card">
                  <div className="card-number">05</div>

                  <figure className="card-avatar">
                    <img
                      src={
                        new URL("../assets/seller-05.png", import.meta.url).href
                      }
                      alt="James Thomas"
                    />

                    <div className="avatar-badge">
                      <ion-icon name="checkmark-outline"></ion-icon>
                    </div>
                  </figure>

                  <div className="card-content">
                    <h3 className="h5 card-title">James Thomas</h3>

                    <data value="2500000">$2500,000</data>
                  </div>
                </a>
              </li>

              <li className="top-seller-item">
                <a href="#" className="top-seller-card">
                  <div className="card-number">06</div>

                  <figure className="card-avatar">
                    <img
                      src={
                        new URL("../assets/seller-06.png", import.meta.url).href
                      }
                      alt="Anthony Roy"
                    />
                  </figure>

                  <div className="card-content">
                    <h3 className="h5 card-title">Anthony Roy</h3>

                    <data value="2500000">$2500,000</data>
                  </div>
                </a>
              </li>

              <li className="top-seller-item">
                <a href="#" className="top-seller-card">
                  <div className="card-number">07</div>

                  <figure className="card-avatar">
                    <img
                      src={
                        new URL("../assets/seller-07.png", import.meta.url).href
                      }
                      alt="Chritopher"
                    />
                  </figure>

                  <div className="card-content">
                    <h3 className="h5 card-title">Chritopher</h3>

                    <data value="2500000">$2500,000</data>
                  </div>
                </a>
              </li>

              <li className="top-seller-item">
                <a href="#" className="top-seller-card">
                  <div className="card-number">08</div>

                  <figure className="card-avatar">
                    <img
                      src={
                        new URL("../assets/seller-08.png", import.meta.url).href
                      }
                      alt="Elijabeth Ran"
                    />
                  </figure>

                  <div className="card-content">
                    <h3 className="h5 card-title">Elijabeth Ran</h3>

                    <data value="2500000">$2500,000</data>
                  </div>
                </a>
              </li>

              <li className="top-seller-item">
                <a href="#" className="top-seller-card">
                  <div className="card-number">09</div>

                  <figure className="card-avatar">
                    <img
                      src={
                        new URL("../assets/seller-01.png", import.meta.url).href
                      }
                      alt="Brodband HR"
                    />
                  </figure>

                  <div className="card-content">
                    <h3 className="h5 card-title">Brodband HR</h3>

                    <data value="2500000">$2500,000</data>
                  </div>
                </a>
              </li>

              <li className="top-seller-item">
                <a href="#" className="top-seller-card">
                  <div className="card-number">10</div>

                  <figure className="card-avatar">
                    <img
                      src={
                        new URL("../assets/seller-02.png", import.meta.url).href
                      }
                      alt="Michel Raw"
                    />

                    <div className="avatar-badge">
                      <ion-icon name="checkmark-outline"></ion-icon>
                    </div>
                  </figure>

                  <div className="card-content">
                    <h3 className="h5 card-title">Michel Raw</h3>

                    <data value="2500000">$2500,000</data>
                  </div>
                </a>
              </li>

              <li className="top-seller-item">
                <a href="#" className="top-seller-card">
                  <div className="card-number">11</div>

                  <figure className="card-avatar">
                    <img
                      src={
                        new URL("../assets/seller-03.png", import.meta.url).href
                      }
                      alt="Liam Dylan"
                    />

                    <div className="avatar-badge">
                      <ion-icon name="checkmark-outline"></ion-icon>
                    </div>
                  </figure>

                  <div className="card-content">
                    <h3 className="h5 card-title">Liam Dylan</h3>

                    <data value="2500000">$2500,000</data>
                  </div>
                </a>
              </li>

              <li className="top-seller-item">
                <a href="#" className="top-seller-card">
                  <div className="card-number">12</div>

                  <figure className="card-avatar">
                    <img
                      src={
                        new URL("../assets/seller-04.png", import.meta.url).href
                      }
                      alt="Thomas Jar"
                    />
                  </figure>

                  <div className="card-content">
                    <h3 className="h5 card-title">Thomas Jar</h3>

                    <data value="2500000">$2500,000</data>
                  </div>
                </a>
              </li>
            </ol>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Home;
