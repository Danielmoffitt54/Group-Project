import React,{Component} from 'react'
import './Animals.css';

export default class Animals extends Component {
    render(){
        return(
            <div className='Animals'>
                <h1 className='Animals-name'>Name</h1>
                <div className = "Animals-headerButton"  >
                {/* this is where the favorite button will go */}
                <button >Heart</button>
                {/* This is where the adopt button will be where you can click to adopt the animal */}
                <button>Adopt</button>
                {/*This is where the main image of the dog will go */}
                <div className = 'Animals-image'>

                </div>
                <div className = "Animal-link">
                {/*This is where the URL is gonna go for the website for the shelter*/}
                <p><a href='/'></a>Page for website</p>
                {/*This is where more pictures of the animal is gonna go*/}
                </div>
                <div className = 'Animal-image'></div>
                    </div>
                <div className='About'>
                <h1>About Me</h1>
                {/*This is where the description about the animal will go*/}
                <p></p>
                    </div>
                    <div className= 'Card'>
                <div className='Characteristics'>
        {/*In here will be the physical characteristics */}
                    <h1>Physical Characteristics</h1>
                    <p>Size</p>
                    <p>Age/Gender</p>
                    <p>Coat</p>
                    <p>Color/Primary-Secondary</p>
                    </div>
                <div className='Behavior'>
                    {/*In here will be where the Behavior characteristics will go*/}
                    <h1>Behaviorial Characteristics</h1>
                    <p>Good with Children</p>
                    <p>Good with Dogs</p>
                    <p>Good with Cats</p>
                    </div>
                <div className='Health'>
                    {/* In here will be the Health Info about the animal */}
                    <h1>Health</h1>
                    <p>Spade_Neutered</p>
                    <p>House_Trained</p>
                    <p>De-Clawed</p>
                    <p>Special_Needs</p>
                    <p>Shots_Current</p>
                    </div>
                <div className='Contact-info'>
                    {/*In here will be the Contact Info */}
                    <h1>Contact Me</h1>
                    <p>E-Mail</p>
                    <p>Phone</p>
                    <p>Address</p>
                
                    </div>
                </div>
            </div>
        );
    }
}