
import { Typewriter } from 'react-simple-typewriter'

const SingleSlide = ({ text }) => {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                {' '}
                <span style={{ color: 'white', fontWeight: 'bold', textSize: '40px' }}>
                   
                    <Typewriter
                        words={[`${text}`]}
                        loop={true}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={70}
                        delaySpeed={1000}

                    />
                </span>
            </h1> */}
            <p className='text-4xl font-bold text-white'>{text}</p>

        </div >
    );
};

export default SingleSlide;