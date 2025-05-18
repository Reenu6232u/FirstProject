import react from 'react'

const DetailsPage = ()=>{
    
    return(

        <div className="container">
            <div className='row'>
                <div className='col-md-9 my-5'>
                    <div className='card m-1 p-3'>
                       <h5>1 BHK Flat Avaiable for Rent</h5>
                       <h5>&#8377;12000.00</h5>
                       <p> <i class="fa fa-map-marker" aria-hidden="true"></i>Nipania Indore </p>
                       <div className='row'>
                        <div className='col-md-5'>
                        <img src="assets/images/img_7.jpg" className="img-thumbnail" style ={{border :"none" ,borderRadius:"10px"}} />
                        </div>
                        <div className='col-md-7'>
                            <div className='p-2'>

                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div className='col-md-3 my-5'>
                    <div className='card m-1 p-3'>
                        <h5>Contact Owner </h5>
                        <p><b>Owner Name</b>+91-78XXXXXXXX</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DetailsPage;