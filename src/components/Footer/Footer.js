import React from 'react'

export const Footer = () => {
  return (
    <div>
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">our services</a></li>
                            <li><a href="#">privacy policy</a></li>
                            <li><a href="#">affiliate program</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">shipping</a></li>
                            <li><a href="#">returns</a></li>
                            <li><a href="#">order status</a></li>
                            <li><a href="#">payment options</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>online shop</h4>
                        <ul>
                            <li><a href="#">watch</a></li>
                            <li><a href="#">bag</a></li>
                            <li><a href="#">shoes</a></li>
                            <li><a href="#">dress</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>follow us</h4>
                        <div class="social-links">
                        <box-icon name='facebook-square' type='logo' color='#1033f5' ></box-icon> 
                        <box-icon name='twitter' type='logo' color='#3bb8ec' ></box-icon>
                        <box-icon name='instagram' type='logo' color='#e41467' ></box-icon>
                        <box-icon name='linkedin-square' type='logo' color='#4f4fd8' ></box-icon>
                    </div>                   
                    </div>
                </div>
            </div>
    </footer>
    </div>
  )
}
