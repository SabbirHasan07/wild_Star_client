

const Review = ({ rw }) => {
    return (
        <div>
            <div className="shadow-xl">
                
                    <div className="flex m-2 p-4">
                        <img className='w-12 rounded-full mr-4 ' src={rw.photoURL} alt='' />
                        <p className='text-xl font-bold'>{rw.name}</p>
                    </div>
                
                <div className="m-4 p-4">
                    <p>{rw.text}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;