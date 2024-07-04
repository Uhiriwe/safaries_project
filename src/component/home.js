import pixel from '../assets/pixel.jpg';
const Home = () => {
    return <div>
        <div className='slide'>
            <img className='home_image' src={pixel} />
            <span>
                <p className='home_text'>Discover Rwanda</p>
                <h1 className='home_head_image'>Experience WildLife Safari With Us</h1>
            </span>
            <div className='locations'>
                <label>Where are you going?</label><br /><br />
                <input className='direction' type='text' name='direction' /><br /><br />
                <label>Destinations</label><br /><br />
                <select id='dropdown' name='option'>
                    <option value='option1'>option1</option>
                    <option value='option2'>option2</option>
                    <option value='option3'>option3</option>
                </select><br /><br />
                <label>Activities</label><br /><br />
                <select className='' id='dropdown' name='option'>
                    <option value='option1'>option1</option>
                    <option value='option2'>option2</option>
                    <option value='option3'>option3</option>
                </select>
            </div>
        </div>
    </div>;
};

export default Home;